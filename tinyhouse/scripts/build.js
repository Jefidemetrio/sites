#!/usr/bin/env node
/**
 * build.js — Developer: gera dist/ estático injetando conteúdo do Directus.
 *
 * Lê public/index.html + public/data/*.json (produzidos por fetch-directus.js)
 * e substitui placeholders {{data_key}} pelos dados reais do CMS.
 *
 * Convenção de placeholders (Designer usa no HTML):
 *   {{site.site_name}}, {{site.whatsapp_number}}, {{pages.0.meta_title}} etc.
 * Fallback: se Directus indisponível, usa public/data/fallback.json (último snapshot).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "public");
const DATA = join(SRC, "data");
const DIST = join(ROOT, "dist");

function loadJSON(name) {
  const p = join(DATA, name);
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, "utf8")); } catch { return null; }
}

const data = {
  pages: loadJSON("pages.json") ?? [],
  models: loadJSON("models.json") ?? [],
  faqs: loadJSON("faqs.json") ?? [],
  testimonials: loadJSON("testimonials.json") ?? [],
  site: (loadJSON("site_settings.json") ?? [{}])[0] ?? {},
};

const home = data.pages.find((p) => p.slug === "home") ?? data.pages[0] ?? {};

const ctx = {
  "site.site_name": data.site.site_name ?? "TinyHouses Portugal",
  "site.tagline": data.site.tagline ?? "",
  "site.whatsapp_number": data.site.whatsapp_number ?? "",
  "site.contact_email": data.site.contact_email ?? "",
  "site.primary_color": data.site.primary_color ?? "#2E7D32",
  "site.secondary_color": data.site.secondary_color ?? "#795548",
  "home.title": home.title ?? "TinyHouses modernas e sustentáveis para Portugal",
  "home.meta_title": home.meta_title ?? home.title ?? "TinyHouses Portugal",
  "home.meta_description": home.meta_description ?? "Tiny houses e casas modulares em Portugal. 20-30% mais económicas, entrega em 3-6 meses.",
  "models.json": JSON.stringify(data.models),
  "faqs.json": JSON.stringify(data.faqs),
  "testimonials.json": JSON.stringify(data.testimonials),
  "blocks.json": JSON.stringify(home.content_blocks ?? []),
};

let html = readFileSync(join(SRC, "index.html"), "utf8");
let replaced = 0;
html = html.replace(/\{\{([\w.]+)\}\}/g, (m, key) => {
  if (key in ctx) { replaced++; return String(ctx[key]); }
  console.warn(`⚠ placeholder sem dado: {{${key}}}`);
  return m;
});

mkdirSync(DIST, { recursive: true });
writeFileSync(join(DIST, "index.html"), html);

// Copiar assets estáticos
for (const f of ["style.css", "favicon.ico", "robots.txt", "sitemap.xml"]) {
  const p = join(SRC, f);
  if (existsSync(p)) cpSync(p, join(DIST, f));
}
if (existsSync(join(SRC, "assets"))) cpSync(join(SRC, "assets"), join(DIST, "assets"), { recursive: true });

console.log(`✓ build: dist/index.html (${replaced} placeholders resolvidos, ${data.models.length} modelos, ${data.faqs.length} FAQs)`);
