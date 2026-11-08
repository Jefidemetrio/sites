# ARCH_DOCS.md - Phase 2: Complete Technical Architecture for Dinamicos.pt

## 1. Sitemap Completo da Navegação

### Site Structure (Portuguese - Primary Language)

```
/                           - Homepage (unified dashboard for all 4 fronts)
 Sobre/                    - About page (About the company/multi-empresa)
 Processo/                 - 4-step process overview
 Contactos/                - Contact page
 Blog/                     - Blog (future expansion)

/web-development/           - Web Development front (B2B)
  /                    - Overview
  /servicos/            - Services list
  /servicos/[slug]      - Individual service detail
  /casos/               - Case studies
  /casos/[slug]         - Case study detail
  /precos/              - Pricing (optional)
  /contactos/           - Contact specific to this front

/company-administration/    - Company Administration front (B2B)
  /                    - Overview
  /servicos/            - Services list
  /servicos/[slug]      - Individual service detail
  /casos/               - Case studies
  /casos/[slug]         - Case study detail
  /contactos/           - Contact specific to this front

/advertising/             - Advertising/Publicity front (B2C)
  /                    - Overview
  /servicos/            - Services list
  /servicos/[slug]      - Individual service detail
  /casos/               - Case studies
  /casos/[slug]         - Case study detail
  /portfolio/            - Portfolio/gallery
  /contactos/           - Contact specific to this front

/modular-construction/    - Modular Construction front (B2B/B2C)
  /                    - Overview
  /servicos/            - Services list
  /servicos/[slug]      - Individual service detail
  /casos/               - Case studies
  /casos/[slug]         - Case study detail
  /projetos/             - Project gallery
  /contactos/           - Contact specific to this front

/en/                      - English homepage
 Sobre/                   - About page
 Processo/              - 4-step process
 Contactos/               - Contact page
 [front-slug]/           - English versions of each front (same structure)

/api/                    - API routes
  /api/fronts/[slug]     - Front data by slug
  /api/services/[id]     - Service data
  /api/case-studies/[slug] - Case study data
  /api/navigation         - Navigation menu
  /api/process-steps     - Process steps
  /api/ai/generate-case-study - AI generation endpoint
  /api/ai/translate       - Translation endpoint

/auth/                   - Authentication (optional for admin/editor access)
  /login/
  /register/
  /reset-password/
```

## 2. Matriz de Funcionalidades Priorizadas

| ID | Funcionalidade | Prioridade | Sprint | Complexidade | Dependências | MVP |
|---|---|---|---|---|---|---|
| F001 | Navegação dinâmica do CMS | Alta | Sprint 2 | Baixa | Directus API | Sim |
| F002 | Hero section com cores por front | Alta | Sprint 2 | Baixa | None | Sim |
| F003 | Listagem de serviços por front | Alta | Sprint 2 | Média | F001 | Sim |
| F004 | Detalhe de serviço individual | Alta | Sprint 2 | Média | F003 | Sim |
| F005 | Case studies dinâmicos | Alta | Sprint 2 | Média | Directus Media | Sim |
| F006 | Before/After visualization | Alta | Sprint 2 | Média | F005 | Sim |
| F007 | Processo 4-passos global | Alta | Sprint 2 | Baixa | None | Sim |
| F008 | CTAs diferenciados B2B/B2C | Alta | Sprint 2 | Baixa | F002 | Sim |
| F009 | Meta tags dinâmicos por página | Alta | Sprint 3 | Média | Headless UI | Sim |
| F010 | SEO otimizado (SSR) | Alta | Sprint 3 | Média | Next.js | Sim |
| F011 | Tradução automática PT→EN | Média | Sprint 4 | Alta | AI API | Não |
| F012 | Geração de case study por IA | Média | Sprint 4 | Alta | AI API | Não |
| F013 | Formulário de contacto | Média | Sprint 3 | Média | API Route | Sim |
| F014 | Integração Plausible Analytics | Média | Sprint 3 | Baixa | Script Tag | Sim |
| F015 | Otimização de imagens | Alta | Sprint 2 | Baixa | Next.js Image | Sim |
| F016 | Design system unificado | Alta | Sprint 1 | Alta | Tailwind | Sim |
| F017 | Dark/Light mode toggle | Média | Sprint 3 | Média | CSS Variables | Não |
| F018 | Performance monitoring | Média | Sprint 5 | Média | Sentry | Sim |
| F019 | Acessibilidade WCAG 2.1 AA | Alta | Sprint 5 | Alta | Testing | Sim |
| F020 | Testes e2e (Playwright) | Média | Sprint 5 | Alta | Testing Lib | Não |

## 3. Integrações Técnicas Detalhadas

### 3.1 CRM Integration (HubSpot/Sendinblue)

**Endpoint Type:** Webhooks + API REST

```
Integration Layer: lib/crm.ts
- CRM_PROVIDER: 'hubspot' | 'sendinblue' | 'none'
- WebHook endpoint: /app/api/crm/webhook/route.ts
- Contact sync: POST /items/contacts (Directus → CRM)

Event Triggers:
- Lead creation form submit → Create CRM contact
- Contact update → Sync to Directus
- Deal stage change → Update Directus pipeline status
```

**CRM Schema Mapping:**
| Directus Field | CRM Field | Sync Direction |
|---|---|---|
| contacts.name | firstname + lastname | One-way |
| contacts.email | email | Bi-directional |
| contacts.company | company.name | One-way |
| contacts.phone | phone number | One-way |
| contacts.interest_front | custom_property | One-way |
| contacts.status | lead_status | Bi-directional |

### 3.2 Payment Integration (Stripe/PayPal)

**Payment Flow:**
```
1. User clicks "Get Quote" or "Buy Service"
2. Next.js API Route → /app/api/payments/create-checkout/route.ts
3. Stripe Checkout Session created
4. Redirect to Stripe
5. Webhook at /app/api/payments/webhook/route.ts
6. Update Directus payments table
7. Send email confirmation via nodemailer
```

**Stripe Integration Code Structure:**
```typescript
// lib/stripe.ts
export const createCheckoutSession = async (
  customerId: string,
  priceId: string,
  frontId: number
) => {
  // Create session with metadata
}

// app/api/payments/checkout/route.ts
export async function POST(req: Request) {
  // Handle checkout
}
```

### 3.3 Newsletter Integration (MailerLite/Sendinblue)

**Integration via Directus Hook:**
```javascript
// directus/extensions/hooks/newsletter-sync.js
module.exports = function registerNewsletterHook({ services }) {
  return {
    'contacts.afterCreate': async (input, { database }) => {
      // Sync to newsletter provider
      await services.mailer.addSubscriber(input.email, {
        source: 'dinamicos.pt',
        front_interest: input.interest_front
      });
    }
  };
};
```

### 3.4 Social Media Integration

**Open Graph & Meta Tags:**
```typescript
// lib/seo.ts
export const generateOGImage = async (front: Front) => {
  // Generate dynamic OG image with front color
}

export const generateMetadata = async ({ 
  front, 
  service, 
  caseStudy 
}: MetadataProps) => {
  return {
    title: front?.seo_title || caseStudy?.title,
    description: front?.description || caseStudy?.before_text,
    openGraph: {
      images: [await generateOGImage(front)],
    },
  };
};
```

### 3.5 API Gateway Configuration

**Rate Limiting (via middleware):**
```typescript
// lib/rate-limit.ts
export const rateLimiter = new RateLimiter({
  windowMs: 60_000, // 1 minute
  max: 100, // max requests
  message: 'Too many requests, please try again later.'
});
```

## 4. Requisitos SEO, Acessibilidade e Performance

### 4.1 SEO Requirements (Portuguese Market)

**Technical SEO:**
- [ ] URL structure clean and semantic
- [ ] Canonical URLs on all pages
- [ ] XML Sitemap generation (automated)
- [ ] Robots.txt with proper directives
- [ ] Structured Data (Schema.org Organization, LocalBusiness, Article)
- [ ] Breadcrumbs structured data
- [ ] hreflang tags for PT/EN versions
- [ ] Meta description optimization (150-160 chars)
- [ ] Title tags (50-60 chars)
- [ ] Mobile-first indexing compliance

**Content SEO:**
- [ ] Keyword research for 4 verticals (market research needed)
- [ ] Content optimization for: "desenvolvimento web", "administração empresa", "publicidade", " construção modular"
- [ ] Local SEO (Lisbon/Portugal focus)
- [ ] Blog content strategy (monthly)
- [ ] Internal linking structure

### 4.2 Acessibilidade WCAG 2.1 AA

**Requirements Checklist:**
- [ ] Color contrast ratio ≥ 4.5:1 (text), ≥ 3:1 (large text)
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility (ARIA labels)
- [ ] Skip navigation link
- [ ] Focus indicators visible
- [ ] Alt text for all images
- [ ] Form labels associated with inputs
- [ ] Error messages accessible
- [ ] Heading structure (h1-h6 logical)
- [ ] Language attribute on html tag
- [ ] Language switcher with proper markup

**Testing Tools:**
- axe-core automated testing
- Lighthouse accessibility audit
- Manual testing with NVDA/JAWS

### 4.3 Performance Targets

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Overall Metrics:**
- PageSpeed Insights: > 90 (mobile/desktop)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle size: < 200KB (JS)

**Optimization Strategies:**
- Image optimization (Next.js Image + WebP)
- Font optimization (Google Fonts preloading)
- CSS splitting (Tailwind purge)
- JavaScript code splitting
- ISR (Incremental Static Regeneration)
- CDN caching (Vercel Edge)
- Lazy loading for images/components

### 4.4 Performance Budget

| Resource | Budget |
|---|---|
| HTML | < 20KB |
| CSS | < 50KB |
| JavaScript | < 150KB |
| Images (total) | < 500KB |
| First paint | < 1.5s |
| Fully loaded | < 3s |

## 5. Modelo de Dados para Multi-Empresa

### 5.1 Core Database Schema

```sql
-- Multi-company data model
CREATE SCHEMA company_1;
CREATE SCHEMA company_2;
CREATE SCHEMA company_3;
CREATE SCHEMA company_4;

-- Tables per company
-- company_N.services
-- company_N.services
-- company_N.case_studies
-- company_N.projects
-- company_N.testimonials
-- company_N.pricing_pages
```

### 5.2 Directus Collections Schema

#### company_info (Singleton per front)
| Field | Type | Description |
|---|---|---|
| id | integer | Primary key |
| front_id | relation | FK to fronts table |
| company_name | string | Name of the company |
| tagline | string | Short description |
| seo_title | string | SEO title |
| seo_description | string | SEO description |
| logo | alias | File relation |
| favicon | alias | File relation |

#### contact_info (Global singleton)
| Field | Type | Description |
|---|---|---|
| email | email | Global contact email |
| phone | string | Contact phone |
| address | string | Company address |
| map_lat | string | Map latitude |
| map_lng | string | Map longitude |
| business_hours | json | Hours JSON structure |

#### navigation_menu (Global, ordered)
| Field | Type | Description |
|---|---|---|
| label | string | Menu label |
| url | string | URL or route |
| front_id | relation | Optional: scope to specific front |
| parent_id | relation | For dropdowns |
| order | integer | Display order |
| is_active | boolean | Visibility toggle |

#### process_steps (Global, 4 steps)
| Field | Type | Description |
|---|---|---|
| title | string | Step title |
| description | rich-text | Detailed description |
| order | integer | Sequence (1-4) |
| icon | string | Icon name/class |
| image | alias | Step illustration |

#### fronts (Main configuration)
| Field | Type | Description |
|---|---|---|
| title | string | Front name |
| slug | string | URL slug |
| color | string | Hex color code |
| cta_type | string | B2B or B2C |
| value_proposition | string | Key message |
| description | rich-text | Extended description |
| hero_image | alias | Background image |
| seo_title | string | Page SEO title |
| seo_description | string | Page SEO description |

#### services (Per front)
| Field | Type | Description |
|---|---|---|
| name | string | Service name |
| description | rich-text | Detailed description |
| front_id | relation | Parent front |
| icon | string | Icon class |
| price | number | Price hint |
| duration | string | Time estimate |
| seo_keywords | string | Keywords for SEO |
| order | integer | Display order |

#### case_studies (Per front)
| Field | Type | Description |
|---|---|---|
| title | string | Case study title |
| slug | string | URL slug |
| front_id | relation | Parent front |
| before_text | rich-text | Before situation |
| after_text | rich-text | After results |
| client_name | string | Customer name |
| client_industry | string | Industry sector |
| duration | string | Project duration |
| thumbnail | alias | Main image |
| gallery | alias[] | Image gallery |
| featured_metrics | json | Key results |
| is_featured | boolean | Homepage showcase |
| seo_keywords | string | SEO optimization |

#### media_files (Shared)
| Field | Type | Description |
|---|---|---|
| filename | string | Original filename |
| alternative | string | Alt text |
| caption | string | Image caption |
| width | integer | Image width |
| height | integer | Image height |
| filesize | integer | Size in bytes |
| extension | string | File extension |

### 5.3 Multi-Tenant Data Access Patterns

```typescript
// lib/directus.ts - Multi-tenant client
export class MultiTenantDirectus {
  private client: Directus;
  
  constructor(private frontSlug: string) {
    this.client = new Directus(DIRECTUS_URL, {
      token: DIRECTUS_TOKEN
    });
  }
  
  async getFront(): Promise<Front> {
    const [front, services, caseStudies, processSteps] = await Promise.all([
      this.client.items('fronts').findOne({ slug: this.frontSlug }),
      this.client.items('services').readMany({ 
        filter: { front_id: { _eq: this.getFrontId() } },
        sort: 'order'
      }),
      this.client.items('case_studies').readMany({
        filter: { front_id: { _eq: this.getFrontId() } },
        sort: '-is_featured,-order'
      }),
      this.client.items('process_steps').readMany({ sort: 'order' })
    ]);
    
    return { ...front, services, caseStudies, processSteps };
  }
}
```

### 5.4 Caching Strategy

```typescript
// Cache keys structure
const CACHE_KEYS = {
  front: (slug: string) => `front:${slug}`,
  services: (frontId: number) => `services:front:${frontId}`,
  caseStudies: (frontId: number) => `case-studies:front:${frontId}`,
  navigation: 'navigation:global',
  processSteps: 'process-steps:global',
  seo: (path: string) => `seo:${path}`
};

// Revalidation times (in seconds)
const REVALIDATE = {
  front: 3600, // 1 hour
  services: 1800, // 30 min
  caseStudies: 1800, // 30 min
  navigation: 86400, // 24 hours
  processSteps: 86400, // 24 hours
  seo: 3600 // 1 hour
};
```

## 6. File Structure for Developer

```
dinamicos-pt/
├── apps/
│   └── web/
│       ├── app/
│       │   ├── [front]/
│       │   │   ├── page.tsx              # Front overview
│       │   │   ├── services/
│       │   │   │   ├── page.tsx          # Services list
│       │   │   │   └── [id]/page.tsx     # Service detail
│       │   │   ├── casos/
│       │   │   │   ├── page.tsx          # Case studies list
│       │   │   │   └── [slug]/page.tsx   # Case study detail
│       │   │   └── contactos/page.tsx    # Front-specific contact
│       │   ├── layout.tsx                # Root layout
│       │   ├── page.tsx                  # Homepage
│       │   ├── sobre/page.tsx
│       │   ├── processo/page.tsx
│       │   ├── contactos/page.tsx
│       │   ├── [locale]/
│       │   │   └── ...                   # English routes
│       │   └── api/
│       │       ├── fronts/route.ts
│       │       ├── services/route.ts
│       │       ├── case-studies/route.ts
│       │       ├── navigation/route.ts
│       │       ├── process-steps/route.ts
│       │       └── ai/
│       │           ├── generate-case-study/route.ts
│       │           └── translate/route.ts
│       ├── components/
│       │   ├── ui/                       # shadcn/ui
│       │   ├── layout/
│       │   ├── sections/
│       │   │   ├── HeroSection.tsx
│       │   │   ├── ServicesSection.tsx
│       │   │   ├── CaseStudiesSection.tsx
│       │   │   └── ProcessSection.tsx
│       │   ├── common/
│       │   │   ├── DynamicHead.tsx
│       │   │   ├── CTAButton.tsx
│       │   │   └── BeforeAfterCard.tsx
│       │   └── localization/
│       ├── lib/
│       │   ├── directus.ts               # Directus client
│       │   ├── ai.ts                     # AI integration
│       │   ├── seo.ts                    # SEO utilities
│       │   ├── rate-limit.ts             # Rate limiting
│       │   └── utils.ts
│       ├── styles/
│       └── public/
├── directus/
│   ├── migrations/
│   └── extensions/
├── packages/
│   └── ui/
└── .env.example
```

## 7. Development Environment Setup

### 7.1 Required Environment Variables

```env
# Directus
DIRECTUS_URL=https://cms.dinamicos.pt
DIRECTUS_TOKEN=your-admin-token
DATABASE_URL=postgresql://user:password@localhost:5432/dinamicos

# AI Services
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
GOOGLE_GEMINI_API_KEY=...

# Next.js
NEXT_PUBLIC_SITE_URL=https://dinamicos.pt
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://dinamicos.pt

# Analytics
PLAUSIBLE_API_HOST=https://plausible.io
SENTRY_DSN=...

# Optional: CRM
CRM_PROVIDER=hubspot
CRM_HOOK_SECRET=...

# Optional: Payments
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=...
```

### 7.2 Docker Compose (Local Development)

```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: directus
      POSTGRES_PASSWORD: directus
      POSTGRES_DB: dinamicos
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  directus:
    image: directus/directus:10
    depends_on:
      - postgres
    environment:
      KEY: some-random-key
      SECRET: some-very-long-secret
      ADMIN_EMAIL: admin@dinamicos.pt
      ADMIN_PASSWORD: admin-password
      DB_CLIENT: pg
      DB_HOST: postgres
      DB_PORT: 5432
      DB_NAME: dinamicos
      DB_USER: directus
      DB_PASSWORD: directus
    ports:
      - "8055:8055"
    volumes:
      - ./directus/uploads:/usr/src/directus/uploads
    command: start --only-sync

volumes:
  postgres_data:
```

## 8. Deployment Pipeline

### 8.1 GitHub Actions CI/CD

```yaml
# .github/workflows/deployment.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: vercel/action@v2
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### 8.2 Build Commands

```json
// package.json scripts
{
  "build": "next build",
  "dev": "next dev",
  "start": "next start",
  "lint": "next lint",
  "test": "vitest",
  "format": "prettier --write ."
}
```

## 9. Monitoring & Error Tracking

### 9.1 Sentry Configuration

```typescript
// lib/sentry.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  environments: ["production", "staging"],
});
```

### 9.2 Plausible Analytics

```html
<!-- Partial template -->
<script defer data-domain="dinamicos.pt" src="https://plausible.io/js/plausible.js"></script>
```

### 9.3 Performance Monitoring

```typescript
// lib/performance.ts
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
```

## 10. Testing Strategy

### 10.1 Unit Tests

```typescript
// __tests__/components/HeroSection.test.tsx
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/sections/HeroSection';

describe('HeroSection', () => {
  it('renders front title', () => {
    render(<HeroSection front={mockFront} />);
    expect(screen.getByText(mockFront.title)).toBeInTheDocument();
  });
});
```

### 10.2 End-to-End Tests

```typescript
// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test('navigation between fronts', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Desenvolvimento Web');
  await expect(page).toHaveURL('/web-development');
});
```

## 11. Security Checklist

- [ ] HTTPS enforced (HSTS header)
- [ ] CSP headers configured
- [ ] Input validation on all forms
- [ ] SQL injection protection (ORM parameterized queries)
- [ ] XSS protection (React auto-escaping)
- [ ] CSRF protection (NextAuth.js)
- [ ] Rate limiting on API endpoints
- [ ] Environment variables (not in repo)
- [ ] File upload restrictions (Directus media library)
- [ ] Secret key rotation policy

## 12. Internationalization (i18n)

### 12.1 Translation Structure

```typescript
// lib/i18n/config.ts
export consti18nConfig = {
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  localeDetection: true,
  hreflang: true,
};
```

### 12.2 Translation Files

```
public/locales/
├── pt/
│   ├── common.json
│   ├── fronts.json
│   └── navigation.json
└── en/
    ├── common.json
    ├── fronts.json
    └── navigation.json
```

## 13. Future Considerations

1. **Progressive Enhancement**: Add PWA support
2. **Multilingual Expansion**: Add Spanish, French
3. **Blog System**: Integration with Directus articles
4. **Newsletter**: Integration with MailerLite
5. **Live Chat**: Tawk.to or Crisp integration
6. **Reviews System**: Google Reviews API
7. **Testimonials Carousel**: Dynamic from CMS
8. **Related Content**: AI-powered recommendations