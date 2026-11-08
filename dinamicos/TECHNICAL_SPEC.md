# Especificações Técnicas Dinamicos

## Stack Definido
- **Frontend**: Next.js 14+ (App Router) + React Server Components
- **Styling**: Tailwind CSS 3.x com design tokens customizados
- **CMS**: Directus 10.x (headless, REST/GraphQL API)
- **Database**: PostgreSQL 15+
- **Backend**: Docker + Docker Compose
- **Deployment**: Vercel (primary) / Dokploy (alternative)
- **AI Services**: Anthropic Claude 3.5 Sonnet, OpenAI GPT-4o, Google Gemini 2.0 Flash
- **Authentication**: NextAuth.js with Directus roles
- **Analytics**: Plausible Analytics
- **Error Tracking**: Sentry
- **Image Optimization**: Next.js Image + Sharp
- **Monitoring**: UptimeRobot + Lighthouse CI
- **Security**: HTTPS/HSTS, CSP, rate limiting

## API Endpoints (19 totais)

### Directus REST Endpoints
```
GET /items/company_info
GET /items/contact_info
GET /items/process_steps?sort=order
GET /items/fronts?filter[is_active][_eq]=true&sort=order
GET /items/fronts/slug-{slug}
GET /items/fronts/{id}/services
GET /items/services?filter[front_id][_eq]=1&sort=order
GET /items/services?filter[is_active][_eq]=true
GET /items/case_studies?filter[is_active][_eq]=true&sort=-is_featured,-order
GET /items/case_studies/front-id-1
GET /items/case_studies/featured
GET /items/navigation_menu?filter[is_active][_eq]=true&sort=order
GET /assets/{id}
```

### Next.js API Routes
```
app/api/fronts/[slug]/route.ts
app/api/case-studies/[slug]/route.ts
app/api/navigation/route.ts
app/api/process-steps/route.ts
app/api/ai/generate-case-study/route.ts
app/api/ai/translate-content/route.ts
```

## Banco de Dados - Schema

### Tabelas Principais
1. **company_info** - Informações da empresa holding
2. **contact_info** - Contatos multicanal
3. **fronts** - Frente/negócio principal (CTA B2B/B2C)
4. **services** - Serviços por frente
5. **process_steps** - Passos do funil inteligente
6. **case_studies** - Estudos de caso por frente
7. **navigation_menu** - Menu dinâmico

Índices criados para performance em: order, slug, is_active, front_id

## Estrutura do Repositório
```
dinamicos-pt/
├── .github/workflows/
│   ├── ci.yml
│   └── deploy.yml
├── apps/web/
│   ├── app/(auth)/
│   ├── app/api/
│   │   ├── ai/
│   │   ├── fronts/[slug]/
│   │   ├── case-studies/[slug]/
│   │   └── navigation/
│   ├── app/[locale]/
│   │   ├── front/[slug]/
│   │   └── case-studies/[slug]/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── common/
│   ├── lib/
│   │   ├── directus.ts
│   │   ├── ai.ts
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   ├── next.config.mjs
│   └── package.json
├── packages/ui/
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── directus/
│   └── migrations/
│       └── 001_initial_schema.sql
├── public/
│   ├── images/
│   └── icons/
├── docs/
│   ├── DIRECTUS-SCHEMA.md
│   └── ARCHITECTURE.md
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
├── turbo.json
└── README.md
```