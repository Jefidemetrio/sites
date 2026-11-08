# FASE 2 - ARQUITETURA COMPLETA DO PROJETO DINAMICOS

## 1. SITEMAP COMPLETO DA NAVEGAÇÃO

### Estrutura Principal
```
/                          → Home (Hero + Segment Selection)
/about                     → Sobre a Holding (visão, valores, trajetória)
/companies/{slug}          → Página individual de cada negócio
/funnel                   → Funil Inteligente (Quiz/Diagnóstico interativo)
/articles                 → Blog IA & Negócios (artigos gerados por IA)
/articles/{slug}          → Artigo individual (comentários opcional)
/resources                → Área de Recursos (guias, checklists, ferramentas)
/resources/{slug}         → Recurso específico (download ou visualização)
/contact                    → Contato multicanal contextualizado
/pricing/{slug}           → Preços por negócio (quando aplicável)
/investors                 → Para stakeholders (documentação corporativa)
/terms                      → Termos e Condições
/privacy                    → Política de Privacidade
/not-found                  → Página 404 personalizada
```

### Rotas Dinâmicas por Segmento
Cada segmento possui sub-páginas personalizadas:
- `/{segmento}/servicos` - Serviços específicos
- `/{segmento}/casos` - Estudos de caso segmentados
- `/{segmento}/precos` - Pricing dedicado

### Navegação Multi-Idioma
```
/en/                      → English Home
/en/about                 → English About
/en/companies/{slug}      → English Company Page
/pt/                      → Português (padrão)
```

---

## 2. MATRIZ DE FUNCIONALIDADES PRIORIZADAS

### Prioridade 1 - Core MVP (Lançamento)
| Funcionalidade | Descrição | Complexidade | Status |
|---------------|-----------|--------------|--------|
| Navegação multi-empresa | Menu dinâmico com todos os negócios | Média | ✅ Planejada |
| Seleção de segmento | Quiz interativo classificação setor/tamanho/dor | Média-Alta | ✅ Planejada |
| Funil inteligente | Fluxo qualificação → recomendação → CTA contextualizado | Alta | ✅ Planejada |
| Páginas de negócio individuais | Cada empresa com página própria e CTA único | Média | ✅ Planejada |
| Sistema de idiomas | PT/EN com i18n completo | Média | ✅ Planejada |

### Prioridade 2 - Engajamento (30-60 dias)
| Funcionalidade | Descrição | Complexidade | Status |
|---------------|-----------|--------------|--------|
| Blog IA & Negócios | Gerador de artigos por IA setoriais | Alta | ✅ Planejada |
| Área de recursos | Guias, checklists, ferramentas descargáveis | Média | ✅ Planejada |
| Formulário de contato contextual | Diferente por negócio/funil | Média | ✅ Planejada |
| Sistema de comentários | Disqus ou solução custom | Média | ⏳ Futuro |

### Prioridade 3 - Monetização (90+ dias)
| Funcionalidade | Descrição | Complexidade | Status |
|---------------|-----------|--------------|--------|
| Dashboard analytics | Tracking conversões por segmento/funil | Alta | ⏳ Futuro |
| Integração Stripe | Pagamentos por negócio/serviço | Alta | ⏳ Futuro |
| Newsletter/Precios | Integração Mailchimp/SendGrid | Média | ⏳ Futuro |
| CRM Integration | HubSpot/Pipedrive/Salesforce | Alta | ⏳ Futuro |

---

## 3. INTEGRAÇÕES TÉCNICAS DETALHADAS

### 3.1 Integração com Diretus CMS

#### Configuração Base
```typescript
// lib/directus.ts
const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

// Client configurado
export const directus = createDirectus(
  DIRECTUS_URL,
  new RestTransport({ auth: true })
);
```

#### Coleções Principais
- `companies` - Informações multi-empresa
- `articles` - Blog IA gerado
- `services` - Serviços por empresa
- `resources` - Recursos baixáveis
- `settings` - Configurações globais
- `navigation` - Menu dinâmico
- `seo` - Metadados SEO

### 3.2 Integração com APIs de IA

#### Configuração Anthropic Claude
```typescript
// lib/ai.ts
import { Anthropic } from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Prompt template para gerar artigos setoriais
export async function generateArticle(sector: string, topic: string) {
  const prompt = `
    Gera um artigo técnico mas acessível sobre ${topic} para o setor ${sector}.
    Formato: Markdown com subtítulos H2/H3, lista de benefícios, CTA final.
    Estilo: Português europeu, sem jargão técnico excessivo.
  `;
  return await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1500,
    temperature: 0.7,
    system: 'Você é um especialista em digitalização de PMEs.',
    messages: [{ role: 'user', content: prompt }],
  });
}
```

#### Fluxo de Geração de Conteúdo
1. **Prompt Engineering**: Templates especializados por segmento
2. **Revisionamento**: Verificação automática de qualidade
3. **SEO**: Geração automática de meta-títulos e descrições
4. **Publicação**: Envio direto ao Directus via API

### 3.3 Integração com CRM

#### Opções Recomendadas
| CRM | Integração | Uso Principal |
|-----|-----------|---------------|
| HubSpot | Webhooks + API | Funil completo B2B |
| Pipedrive | Zapier/API | Gestão de oportunidades |
| Salesforce | Apex Integration | Enterprise level |

#### Endpoint de Sincronização
```typescript
// app/api/crm/sync/route.ts
export async function POST(request: NextRequest) {
  const { leadData, source, segment } = await request.json();
  
  // Normalização de dados
  const normalizedLead = {
    properties: {
      email: leadData.email,
      name: leadData.name,
      company: leadData.company,
      segment: segment,
      source: source,
      status: 'new'
    }
  };
  
  // Envio ao CRM via webhook
  await fetch(process.env.CRM_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.CRM_API_KEY}` },
    body: JSON.stringify(normalizedLead)
  });
  
  return NextResponse.json({ success: true });
}
```

### 3.4 Integração com Payment Gateway

#### Stripe Connect Configuração
```typescript
// app/api/payments/stripe/route.ts
const stripe = Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const { amount, companyId, successUrl, cancelUrl } = await request.json();
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'eur',
        product_data: { name: `Serviço ${companyId}` },
        unit_amount: amount,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
  });
  
  return NextResponse.json({ sessionId: session.id });
}
```

### 3.5 Analytics e Tracking

#### Plausible Analytics Implementation
```html
<!-- Plausible Tracking -->
<script defer data-domain="dinamicos.pt" src="https://plausible.io/js/plausible.js"></script>
```

#### Eventos Customizados
```typescript
// Eventos de funil tracking
plausible('Funnel Start', { props: { segment: 'healthcare' } });
plausible('Diagnostics Completed', { props: { score: 85 } });
plausible('Recommendation Viewed', { props: { company: 'medcenter' } });
plausible('CTA Clicked', { props: { cta_type: 'demo' } });
```

---

## 4. REQUISITOS SEO, ACESSIBILIDADE E PERFORMANCE

### 4.1 SEO Técnico

#### Meta Tags Dinâmicas
```typescript
// app/components/seo.tsx
export const generateMetadata = async ({ params }: SEOProps) => {
  const page = await directus.readArticles(params.slug);
  
  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.excerpt,
    openGraph: {
      title: page.seo?.ogTitle || page.title,
      description: page.seo?.ogDescription || page.excerpt,
      images: [page.seo?.ogImage || '/og-image.png'],
    },
    alternates: {
      languages: {
        'pt': '/pt/artigos/' + params.slug,
        'en': '/en/articles/' + params.slug,
      }
    }
  };
};
```

#### Schema.org Markup Dinâmico
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título do Artigo",
  "author": {
    "@type": "Organization",
    "name": "Dinamicos"
  },
  "datePublished": "2026-11-08",
  "dateModified": "2026-11-08",
  "publisher": {
    "@type": "Organization",
    "name": "Dinamicos",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dinamicos.pt/logo.png"
    }
  }
}
```

#### Sitemap Dinâmico
```typescript
// app/sitemap.ts
export default async function sitemap() {
  const articles = await getArticles();
  const companies = await getCompanies();
  
  return [
    {
      url: 'https://dinamicos.pt',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...articles.map(article => ({
      url: `https://dinamicos.pt/articles/${article.slug}`,
      lastModified: article.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...companies.map(company => ({
      url: `https://dinamicos.pt/companies/${company.slug}`,
      lastModified: company.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  ];
}
```

### 4.2 Acessibilidade (WCAG 2.1 AA)

#### Requisitos Implementados
- **Contraste**: Cores com ratio mínimo 4.5:1
- **Navegação**: Teclado 100% funcional
- **ARIA**: Labels e descrições para elementos dinâmicos
- **Imagens**: Alt text obrigatório no CMS
- **Formulários**: Labels associados e validação clara

#### Checklists Automatizados
```json
{
  "accessibility-checks": [
    "alt-text-present",
    "color-contrast-ratio",
    "aria-label-valid",
    "focus-trap-active",
    "skip-link-present",
    "heading-hierarchy-valid"
  ]
}
```

### 4.3 Performance

#### Core Web Vitals Targets
| Métrica | Target | Estratégia |
|---------|--------|------------|
| LCP | < 2.5s | Image optimization, prefetching |
| CLS | < 0.1 | Reserve space for dynamic content |
| FID | < 100ms | Code splitting, minimal JS |

#### Otimizações Implementadas
```javascript
// next.config.mjs
export default {
  images: {
    domains: ['dinamicos.pt', 'cdn.dinamicos.pt'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
```

#### CDN e Cache
- **Vercel Edge Network**: Deploy global
- **Static Generation**: SSG para páginas estáticas
- **ISR**: Incremental Static Regeneration (revalidate: 3600)
- **Image Optimization**: Sharp + Cloudflare Images

---

## 5. MODELO DE DADOS PARA MULTI-EMPESA

### 5.1 Schema PostgreSQL/Diretus

#### Tabela `companies`
| Campo | Tipo | Descrição | Índice |
|-------|------|-----------|--------|
| id | UUID | ID único | PK |
| name | VARCHAR(255) | Nome da empresa | |
| slug | VARCHAR(100) | URL-friendly | UK, UNIQUE |
| sector | VARCHAR(50) | healthcare, hospitality, logistics, construction, retail, professional_services | INDEX |
| description | TEXT | Descrição curta | |
| full_description | TEXT | Descrição completa | |
| logo_url | VARCHAR(500) | URL do logo | |
| website_url | VARCHAR(255) | Site da empresa | |
| contact_email | VARCHAR(255) | Email de contato | |
| cta_button_text | VARCHAR(100) | Texto do botão CTA | |
| cta_destination | VARCHAR(255) | URL destino CTA | |
| features | JSON[] | Lista de características | |
| pricing_available | BOOLEAN | Se há preços públicos | |
| is_active | BOOLEAN | Status de publicação | INDEX |
| created_at | TIMESTAMP | Data de criação | |
| updated_at | TIMESTAMP | Data de atualização | |

#### Tabela `articles`
| Campo | Tipo | Descrição | Índice |
|-------|------|-----------|--------|
| id | UUID | ID único | PK |
| title | VARCHAR(300) | Título do artigo | |
| slug | VARCHAR(255) | URL-friendly | UK, UNIQUE |
| excerpt | TEXT | Resumo curto | |
| content | LONGTEXT | Conteúdo completo (Markdown) | |
| featured_image | VARCHAR(500) | Imagem destacada | |
| company_id | UUID | Empresa relacionada | FK, INDEX |
| tags | VARCHAR(50)[] | Tags categóricas | |
| ai_generated | BOOLEAN | Se gerado por IA | |
| seo_title | VARCHAR(300) | Meta título | |
| seo_description | VARCHAR(500) | Meta descrição | |
| published_at | TIMESTAMP | Data de publicação | INDEX |
| is_featured | BOOLEAN | Em destaque | INDEX |
| created_at | TIMESTAMP | Data de criação | |
| updated_at | TIMESTAMP | Data de atualização | |

#### Tabela `funnel_interactions`
| Campo | Tipo | Descrição | Índice |
|-------|------|-----------|--------|
| id | UUID | ID único | PK |
| session_id | VARCHAR(100) | ID da sessão | INDEX |
| step | VARCHAR(50) | current_step, diagnostics, recommendation | INDEX |
| user_answers | JSONB | Respostas do quiz | |
| recommended_company_id | UUID | Empresa recomendada | FK |
| converted | BOOLEAN | Se converteu | INDEX |
| conversion_type | VARCHAR(50) | contact, demo, pricing | |
| created_at | TIMESTAMP | Data da interação | |

#### Tabela `resources`
| Campo | Tipo | Descrição | Índice |
|-------|------|-----------|--------|
| id | UUID | ID único | PK |
| title | VARCHAR(255) | Título | |
| slug | VARCHAR(255) | URL-friendly | UK |
| description | TEXT | Descrição | |
| file_url | VARCHAR(500) | URL do arquivo | |
| file_type | VARCHAR(50) | pdf, excel, checklist | |
| company_id | UUID | Empresa opcional | FK |
| is_public | BOOLEAN | Público ou restrito | |
| download_count | INTEGER | Contador de downloads | |
| created_at | TIMESTAMP | Data de criação | |

### 5.2 Relacionamentos

```
companies (1) ←→ (M) articles
companies (1) ←→ (M) funnel_interactions
companies (1) ←→ (M) resources
articles (1) ←→ (1) company (opcional)
funnel_interactions (1) ←→ (1) companies (recomendação)
```

### 5.3 Directus Collections Configuration

#### Collection: companies
```json
{
  "collection": "companies",
  "schema": {
    "fields": [
      {"name": "id", "type": "uuid", "primary": true},
      {"name": "name", "type": "string", "required": true},
      {"name": "slug", "type": "string", "required": true, "unique": true},
      {"name": "sector", "type": "string", "choices": ["healthcare", "hospitality", "logistics", "construction", "retail", "professional_services"]},
      {"name": "description", "type": "text"},
      {"name": "features", "type": "json"},
      {"name": "is_active", "type": "boolean", "default": true}
    ]
  }
}
```

---

## 6. ESTRUTURA DE BACKEND

### 6.1 API Endpoints

#### REST Endpoints (Directus)
```
GET /items/companies?filter[is_active][_eq]=true&sort=sector
GET /items/companies/slug-{slug}
GET /items/articles?filter[is_featured][_eq]=true&limit=5
GET /items/articles/slug-{slug}
GET /items/resources?filter[is_public][_eq]=true
POST /items/funnel_interactions
```

#### GraphQL Endpoint
```graphql
query Companies($sector: String) {
  companies(where: { is_active: true, sector: $sector }) {
    data {
      id
      name
      slug
      description
      sector
      cta_button_text
      cta_destination
      features
    }
  }
}
```

### 6.2 Next.js App Router Structure
```
app/
├── (auth)/
│   └── [...slug]/
├── api/
│   ├── ai/
│   │   ├── generate-article/route.ts
│   │   └── translate-content/route.ts
│   ├── companies/
│   │   └── [slug]/route.ts
│   ├── funnel/
│   │   └── interactions/route.ts
│   └── crm/
│       └── sync/route.ts
├── [locale]/
│   ├── about/
│   ├── articles/
│   │   └── [slug]/
│   ├── companies/
│   │   └── [slug]/
│   ├── contact/
│   ├── funnel/
│   ├── resources/
│   │   └── [slug]/
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── sections/
│   └── common/
├── lib/
│   ├── directus.ts
│   ├── ai.ts
│   └── utils.ts
└── layout.tsx
```

---

## 7. ENVIRONMENT VARIABLES

### .env.local
```env
NEXT_PUBLIC_SITE_URL=https://dinamicos.pt
NEXT_PUBLIC_DIRECTUS_URL=https://cms.dinamicos.pt
DIRECTUS_TOKEN=
ANTHROPIC_API_KEY=
OPENAI_API_KEY=
GOOGLE_GENERATIVE_AI_API_KEY=
STRIPE_SECRET_KEY=
CRM_WEBHOOK_URL=
PLAUSIBLE_DOMAIN=dinamicos.pt
```

---

## 8. DEPLOYMENT CONFIGURATION

### Vercel Configuration (vercel.json)
```json
{
  "rewrites": [
    {"source": "/api/(.*)", "destination": "/api/$1"},
    {"source": "/en/(.*)", "destination": "/en/$1"},
    {"source": "/(.*)", "destination": "/$1"}
  ],
  "headers": [
    {
      "source": "/(.*).(ico|jpg|jpeg|png|svg|woff|woff2)",
      "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]
    }
  ]
}
```

### Docker Compose (docker-compose.yml)
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - directus
      - db
  
  directus:
    image: directus/directus:10
    ports:
      - "8055:8055"
    environment:
      - KEY=xxx
      - SECRET=xxx
    volumes:
      - ./directus/uploads:/usr/src/directus/uploads
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: directus
      POSTGRES_USER: directus
      POSTGRES_PASSWORD: password
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

---

## 9. MONITORING E LOGGING

### Error Tracking (Sentry)
```typescript
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  environments: ['production', 'staging'],
});
```

### Performance Monitoring
- Lighthouse CI: Testes automatizados
- Web Vitals: Coleta de métricas em tempo real
- UptimeRobot: Monitorização de disponibilidade

---

## 10. CONFORMITY MATRIX

| Requisito | Especificação | Arquivo |
|-----------|---------------|---------|
| Sitemap completo | ✅ Definido em Seção 1 | docs/SITEMAP.md |
| Matriz funcionalidades | ✅ Matriz em Seção 2 | docs/FEATURES_MATRIX.md |
| Integrações técnicas | ✅ Detalhado em Seção 3 | docs/INTEGRATIONS.md |
| SEO/Accessibility/Performance | ✅ Requisitos em Seção 4 | docs/QUALITY_REQS.md |
| Modelo de dados multi-empresa | ✅ Schema em Seção 5 | docs/DATABASE_SCHEMA.md |

---

## Status: ✅ PHASE 2 ARCHITECTURE COMPLETED

**Próximos passos:**
1. Enviar especificações ao Developer para implementação
2. Iniciar Fase 3: Art Direction (Designer)
3. Preparar ambiente de desenvolvimento