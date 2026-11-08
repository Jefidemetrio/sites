# CHANGELOG.md - Novo Projeto Dinâmicos

## [2026-11-08] - Deploy Dokploy Ready

### Páginas Criadas
- **index.astro** - Homepage completa com hero, serviços preview, CTA
- **sobre.astro** - Página institucional com missão, valores, equipa
- **contato.astro** - Formulário de captação de leads
- **blog/index.astro** - Lista de posts (grid 3col)
- **blog/[slug].astro** - Template de post com schema AEO

### Blog Posts (3 artigos)
- **seo-erros-b2b-portugal/index.md** - Post principal (10 erros SEO)
- **como-escolher-provedor-sites/index.md** - Guia para escolher provedores
- **seo-checklist-pmes-2026/index.md** - Checklist prático 25 pontos

### Infrastructure - Docker Deployment
- **Dockerfile** - Multi-stage build otimizado
- **docker-compose.yml** - Compose para Dokploy
- **.dockerignore** - Arquivos excluídos do build
- **DOKPLOY.yml** - Configuração do deploy
- **.nvmrc** - Node version 18

### Content System
- **config.ts** - Schema Astro Content Collection
- **src/lib/directus.js** - Client API Directus
- Blog posts com FAQ estruturado

### Components
- **Hero.astro** - Componente reutilizável
- **Layout.astro** - Wrapper principal com header/footer

### Added
- Sitemap automático (astrojs/sitemap)
- JSON-LD schema markup para AI discovery
- Sistema de cores Apple-style (#0052FF primary)
- Tipografia sistema (Inter font)
- Full documentation package

### Tech Stack
- **Framework:** Astro 4.x
- **Styling:** Tailwind CSS
- **CMS:** Directus (headless)
- **Hosting:** Dokploy (Docker)
- **Analytics:** Plausible (GDPR compliant)

### AEO Implementation
- Schema Organization (homepage)
- Schema BlogPosting (posts)
- FAQPage structure
- sameAs cross-referencing

---

## [2024-11-08] - Início do Projeto

### Added
- Briefing colaborativo realizado
- Pesquisa de mercado concluída
- Definição da empresa finalizada
- Domínio definido: dinamicos.jefi.com.br