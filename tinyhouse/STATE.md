# TinyHouses Portugal — Estado do Projeto

## Visão geral
Site institucional já existente (https://tiny.jefi.com.br) com novo fluxo de conteúdo via **Directus CMS**.

## Objetivo do Direto
Implementar fluxo: **Editor (Directus) → Developer (API) → Site (GitHub CI)**.

---

## Status do Fluxo Directus

| Etapa | Status | Responsável |
|-------|--------|-------------|
| ✅ Estrutura de coleções Directus | CONCLUÍDO | Editor |
| ✅ Schema JSON (`directus/schema.json`) | CONCLUÍDO | Editor |
| ✅ Fetch script (`scripts/fetch-directus.js`) | CONCLUÍDO | Developer |
| ✅ Build script (`scripts/build.js`) | CONCLUÍDO | Developer |
| ✅ CI/CD (`.github/workflows/deploy.yml`) | CONFIGURADO | Developer |
| 📋 Token API criado | PENDENTE | Editor |
| 📋 Secrets GitHub configurados | PENDENTE | Developer |
| 📋 Diretrizes de placeholders | CONCLUÍDO | Designer |

---

## Fluxo Atual (sem Directus)
- Conteúdo hardcodeado no HTML/CSS
- Atualizações via editores de código
- Deploy automático via GitHub Actions push → GitHub Pages

## Fluxo Novo (com Directus)
- **Editor**: Gerencia conteúdo via dashboard Directus
- **Developer**: Consome API REST, build gera HTML dinâmico
- **Designer**: Usa placeholders `{{...}}` no HTML
- **GitHub CI**: Build automático com dados do CMS

---

## Próximos Passos

### 1. Editor — Provisionar Directus
```bash
# 1. Deploy Directus (Railway/Render/VPS)
# 2. Aplicar schema:
npx directus-schema apply \
  --url $DIRECTUS_URL \
  --token $ADMIN_TOKEN \
  directus/schema.json

# 3. Criar Role "Editor" com permissões definidas em schema.json
# 4. Criar Token API "developer-read-only" (read de collections publicadas)
```

### 2. Developer — Configurar Secrets
No repositório → Settings → Secrets and variables → Actions:
- `DIRECTUS_URL` = https://directus.seudominio.com
- `DIRECTUS_READ_TOKEN` = <token criado>

### 3. Designer — Adicionar Placeholders
No `public/index.html`, substituir valores hardcodeados por:
- `{{site.site_name}}` em `<title>` e OG tags
- `{{site.meta_description}}` em meta descriptions
- `{{home.title}}` em hero heading
- `{{models.json}}` em script para renderização dinâmica
- `{{faqs.json}}` para FAQ dinâmico
- `{{testimonials.json}}` para depoimentos dinâmicos

### 4. Deploy Inicial
```bash
# Test local
cp .env.example .env  # ajustar se necessário
npm install
npm run fetch:content  # testar conexão
npm run build
npm run preview        # http://localhost:3000

# CI/CD
git add .
git commit -m "feat: Directus integration"
git push origin main
```

---

## Arquivos Criados/Modificados

| Arquivo | Descrição |
|---------|-----------|
| `.github/workflows/deploy.yml` | CI pipeline (fetch + build + deploy) |
| `directus/schema.json` | Schema das coleções |
| `directus/CONTENT_STRUCTURE.md` | Documentação das coleções |
| `directus/API_USAGE.md` | Endpoints para consumo |
| `directus/PLACEHOLDERS.md` | Referência de placeholders para Designer |
| `scripts/fetch-directus.js` | Consumer da API Directus |
| `scripts/build.js` | Gerador de site estático |
| `public/data/*.json` | Fallback snapshot local |
| `DIRECTUS_FLOW.md` | Arquivo único de referência completo |

---

## Rollback (se necessário)
Se Directus não estiver pronto, o build continua com dados de `public/data/*.json` locais.
Commitar `public/data/*.json` como fallback estável.