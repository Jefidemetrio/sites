#!/usr/bin/env node
/**
 * fetch-directus.js — Developer: consome a API do Directus e salva conteúdo em public/data/
 *
 * Uso:
 *   DIRECTUS_URL=... DIRECTUS_READ_TOKEN=*** npm run fetch:content
 *
 * O Editor publica conteúdo no dashboard do Directus; este script extrai
 * apenas itens publicados/aprovados via token de leitura pública (CI-safe).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "public", "data");

const DIRECTUS_URL = (process.env.DIRECTUS_URL || "").replace(/\/$/, "");
const TOKEN = process.env.DIRECTUS_READ_TOKEN || "";

if (!DIRECTUS_URL) {
  console.error("✗ DIRECTUS_URL não definida. Copie .env.example → .env e preencha.");
  process.exit(1);
}

// Sem token: assume instância com coleções abertas para role public (dev local).
const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};

async function fetchItems(collection, params = "") {
  const url = `${DIRECTUS_URL}/items/${collection}?${params}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`${collection}: HTTP ${res.status} ${await res.text().catch(() => "")}`);
  }
  const json = await res.json();
  return json.data;
}

async function main() {
  mkdirSync(OUT, { recursive: true });

  const jobs = [
    ["pages", "fields=*&filter[status][_eq]=published&sort=sort"],
    ["models", "fields=*&filter[status][_eq]=active&sort=sort&limit=-1"],
    ["faqs", "fields=*&filter[status][_eq]=published&sort=sort"],
    ["testimonials", "fields=*&filter[status][_eq]=approved&limit=10"],
    ["site_settings", "fields=*"],
  ];

  let total = 0;
  for (const [collection, params] of jobs) {
    try {
      const data = await fetchItems(collection, params);
      const file = join(OUT, `${collection}.json`);
      writeFileSync(file, JSON.stringify(data, null, 2));
      const count = Array.isArray(data) ? data.length : 1;
      total += count;
      console.log(`✓ ${collection}: ${count} registro(s) → public/data/${collection}.json`);
    } catch (err) {
      console.error(`✗ ${collection}: ${err.message}`);
      process.exitCode = 1;
    }
  }
  console.log(`\n→ Conteúdo extraído do Directus: ${total} registro(s) no total.`);
}

main();
