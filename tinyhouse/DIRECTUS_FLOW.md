# TinyHouses Portugal — Fluxo de Conteúdo Directus

Fluxo: **Editor → Directus CMS → Developer (API) → Site estático → GitHub CI (deploy)**

```
┌──────────┐  publica   ┌──────────────┐  REST API   ┌─────────────────┐  gh-pages
│ Editor   │──────────▶ │  Directus    │───────────▶ │ scripts/fetch + │────────▶
│ (CMS UI) │            │ collections: │  read token │ build (Node)    │          GitHub Pages
└──────────┘            │ pages,models,│◀─────────── │ dist/ estático  │
                        │ faqs,testi...│  Designer   └─────────────────┘
                        └──────────────┘  usa placeholders {{...}}
```

> **Nota:** Dokploy foi descontinuado neste projeto. Deploy é feito via GitHub Actions CI
> (`.github/workflows/deploy.yml` → GitHub Pages).

## Papéis

### Editor (Directus)
- Gerencia conteúdo no dashboard do Directus (`https://<url>/admin`).
- Coleções: `pages`, `models`, `faqs`, `testimonials`, `site_settings` — ver
  [`directus/CONTENT_STRUCTURE.md`](directus/CONTENT_STRUCTURE.md).
- Usa status de workflow (`draft → published/active`) para controlar o que vai ao ar.
- Sobe imagens em `directus_files` (herocards, galerias, favicon).

### Designer (HTML/CSS)
- Edita `public/index.html` e `public/style.css`.
- Usa **placeholders** resolvidos em build-time:
  - `{{site.site_name}}`, `{{site.whatsapp_number}}`, `{{site.primary_color}}`
  - `{{home.meta_title}}`, `{{home.meta_description}}`
  - `{{models.json}}`, `{{faqs.json}}`, `{{testimonials.json}}`, `{{blocks.json}}`
    (injetados em `<script id="data-models" type="application/json">` para render client-side)
- Placeholder sem dado é preservado e avisa no log do build.

### Developer (Integração)
- `scripts/fetch-directus.js` — extrai só itens publicados via token de leitura.
- `scripts/build.js` — resolve placeholders e gera `dist/`.
- Mapeia JSON do Directus para o HTML; mantém `public/data/fallback.json`
  (último snapshot bom) para builds offline.

## Como rodar localmente

```bash
cp .env.example .env        # preencher DIRECTUS_URL + DIRECTUS_READ_TOKEN
npm install
npm run fetch:content       # extrai conteúdo do Directus
npm run build               # gera dist/
npm run preview             # serve dist/ em http://localhost:3000
```

## Deploy (GitHub CI — sem Dokploy)

1. Commit + push para `main` → Actions roda fetch + build + publica GitHub Pages.
2. Secrets do repositório (Settings → Secrets and variables → Actions):
   - `DIRECTUS_URL`
   - `DIRECTUS_READ_TOKEN` (token público, escopo read-only de coleções publicadas)
3. Cron diário 06:00 UTC repuxa conteúdo novo do Directus mesmo sem commit.
4. `workflow_dispatch` permite deploy manual.

## Bootstrap do Directus (uma vez, por ambiente)

O Editor (ou admin) aplica `directus/schema.json` na instância:

```bash
npx directus-schema apply --url $DIRECTUS_URL --token $ADMIN_TOKEN directus/schema.json
# ou via Directus MCP do Editor: criar coleções conforme directus/CONTENT_STRUCTURE.md
```

## Checklist de publicação (novo conteúdo)

- [ ] Editor cria/edita item no Directus e muda status → `published`/`active`
- [ ] `npm run fetch:content` local valida que o item vem na API
- [ ] Push → CI builda e publica; ou aguardar cron diário
- [ ] Verificar site em produção
# Fluxo de Conteúdo — Editor → Directus → Developer → Site

## Arquitetura do Fluxo

```
┌─────────────┐       ┌──────────────────┐       ┌─────────────────┐       ┌─────────────┐
│   EDITOR    │──────▶│    DIRECTUS      │──────▶│   DEVELOPER     │──────▶│    SITE     │
│             │       │                  │       │                 │       │             │
│ • Dashboard │       │  Collections:    │       │  Consome API    │       │  GitHub CI  │
│ • Cria/edita│       │  • pages         │       │  GET /items/*   │       │  Deploy     │
│ • Publica   │       │  • blocks        │       │  JSON → HTML    │       │  Automático │
│ • SEO tags  │       │  • models        │       │  Placeholders   │       │             │
│ • Uploads   │       │  • settings      │       │                 │       │             │
└─────────────┘       └──────────────────┘       └─────────────────┘       └─────────────┘
```

## Responsabilidades por Perfil

### Editor (Directus MCP)
- **Acesso**: Dashboard Directus em `https://<directus-url>/admin`
- **Cria/edita**: páginas, blocos de conteúdo, configurações do site
- **Fotografia**: upload de imagens via media library do Directus
- **SEO**: preenche `meta_title` e `meta_description` de cada página
- **Publica**: muda status de `draft` → `published` (trigger webhook se configurado)

### Developer (Integração API)
- **Lê**: `GET /items/pages`, `GET /items/models`, `GET /items/settings`
- **Mapeia**: JSON → componentes HTML/JS (template engine ou JS dinâmico)
- **Mantém**: `scripts/fetch-content.mjs`, schema de tipos TypeScript
- **Deploy**: push → GitHub Actions CI → build estático → publicação

### Designer (Placeholders)
- **Usa**: `directus/PLACEHOLDERS.md` como referência de campos disponíveis
- **Insere**: `{{block.data.heading}}`, `{{model.price_range}}` nos templates
- **Não hardcodeia**: conteúdo textual, preços ou dados comerciais

---

## Configuração Inicial do Directus

### 1. Deploy do Directus (Railway / Render / VPS)

```bash
# docker-compose.yml (Directus)
services:
  directus:
    image: directus/directus:11
    ports:
      - "8055:8055"
    environment:
      SECRET: "<openssl rand -hex 32>"
      KEY: "<openssl rand -hex 32>"
      DB_CLIENT: "sqlite3"
      DB_FILENAME: "/data/data.db"
      ADMIN_EMAIL: "editor@dominio.com"
      ADMIN_PASSWORD: "<senha-forte>"
      PUBLIC_URL: "https://directus.seudominio.com"
    volumes:
      - directus_data:/data
volumes:
  directus_data:
```

### 2. Collections (criar via Dashboard ou MCP)

Ver `directus/CONTENT_STRUCTURE.md` para o schema completo.

| Collection | Uso | Campos principais |
|-----------|-----|-------------------|
| `pages` | Páginas do site | slug, title, content_blocks, meta_* |
| `blocks` | Blocos reutilizáveis | type, name, data, is_active |
| `models` | Modelos de tiny house | slug, name, price_range, specs |
| `faqs` | FAQ | question, answer, category |
| `testimonials` | Depoimentos | author, content, is_approved |
| `settings` | Config global | site_name, colors, social_links |

### 3. Role Editor — Permissões

No Directus Dashboard → Access Control → Roles → **Create Role: Editor**:
- Pages: Read=All, Create=Own, Update=Own, Delete=Own
- Models: Read=All, Write=Own
- Settings: Read=All, Write=All
- Files: Read=All, Create=All, Update=All

### 4. Token API (Developer)

Dashboard → Access Control → API Tokens → **Create Token**:
- **Name**: `developer-read-only`
- **Role**: Public (ou Developer com read-only)
- **Scope**: Read

---

## API — Endpoints Usados pelo Developer

```bash
# Base
BASE=https://directus.seudominio.com

# Homepage completa (com blocos ordenados)
curl "$BASE/items/pages?filter[slug][_eq]=home&fields=*&filter[status][_eq]=published"

# Todos os modelos ativos
curl "$BASE/items/models?filter[status][_eq]=active&sort=sort&fields=*"

# Configurações do site
curl "$BASE/items/settings?fields=*"

# FAQs por categoria
curl "$BASE/items/faqs?filter[category][_eq]=legal&filter[is_active][_eq]=true&sort=sort"

# Depoimentos aprovados (top 3)
curl "$BASE/items/testimonials?filter[is_approved][_eq]=true&limit=3&fields=*"

# Imagem por ID (URL direta)
curl "$BASE/assets/{file_id}?width=800&height=600&fit=cover"
```

---

## Placeholders para Designer

Ver `directus/PLACEHOLDERS.md` para a lista completa de placeholders disponíveis.

Resumo rápido:
```html
<!-- Do collection settings -->
{{settings.site_name}}
{{settings.whatsapp_number}}
{{settings.primary_color}}

<!-- Da página atual (via content_blocks array) -->
{{page.title}}
{{page.meta_description}}

<!-- De cada bloco no content_blocks[] -->
{{block.data.heading}}
{{block.data.subheading}}
{{block.data.cta_text}}

<!-- De modelos -->
{{model.name}}
{{model.price_range}}
{{model.sqm}} m²
{{model.capacity}}
```

---

## Deploy via GitHub CI (substitui Dokploy)

### Workflows necessários

| Arquivo | Trigger | Ação |
|---------|---------|------|
| `.github/workflows/deploy.yml` | push → main | build + deploy static |
| `.github/workflows/content-sync.yml` | schedule (*/30) + webhook Directus | revalidate cache |

### Secrets no GitHub (Settings → Secrets → Actions)
- `DIRECTUS_URL`
- `DIRECTUS_READ_TOKEN`
- `DEPLOY_TOKEN` (Vercel/Netlify token para deploy)

### Trigger por conteúdo novo (opcional)
No Directus → Flows → **Create Flow**:
- Trigger: `pages.status` muda para `published`
- Action: Webhook → `POST https://api.github.com/repos/<owner>/<repo>/dispatches`
  - `event_type: content-published`
  - Header `Authorization: Bearer <github-pat>`

---

## Arquivos do Projeto

```
sites/tinyhouse/
├── .env.example                    # Variáveis (Directus URL, Token)
├── .github/
│   └── workflows/
│       ├── deploy.yml              # CI: build + deploy
│       └── content-sync.yml        # Revalidação de conteúdo
├── directus/
│   ├── CONTENT_STRUCTURE.md        # Schema completo das coleções
│   ├── PLACEHOLDERS.md             # Referência p/ Designer
│   └── API_USAGE.md                # Endpoints e exemplos curl
├── scripts/
│   └── fetch-content.mjs           # Fetch + transform Directus → JSON local
├── public/
│   ├── index.html                  # Site (usa placeholders ou JSON)
│   └── style.css
└── package.json
```
