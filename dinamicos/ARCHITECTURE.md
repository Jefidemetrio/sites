# Arquitetura do Projeto Dinamicos

## Stack Tecnológico Definido
- **Frontend**: Next.js (SSR/SSG, SEO otimizado)
- **Estilização**: Tailwind CSS + shadcn/ui
- **Animações**: Framer Motion
- **CMS Headless**: Directus (conector open-source, integra-se com bancos existentes)
- **Backend/IA**: Python FastAPI ou Node.js microserviços para pipelines de geração de conteúdo
- **Banco de Dados**: PostgreSQL (com Supabase ou self-hosted)
- **Hospedagem**: Vercel (frontend) + Cloudflare (CDN) ou Docker/Kubernetes se necessário
- **Integração IA**: Claude 3.5 Sonnet / OpenAI GPT-4o / Google Gemini 2.0
- **Analytics**: Plausible Analytics (GDPR/CPRA compliant)
- **Payment/CTA**: Stripe/PayPal integrados por segmento

## Sitemap Completo
```
/ (Home - Hero + Segment Selection)
/about (Sobre a Holding - visão, valores, trajetória)
/companies/{slug} (Página individual de cada negócio)
/funnel (Funil Inteligente - Quiz/Diagnóstico interativo)
/articles (Blog - Artigos gerados por IA)
/articles/{slug} (Artigo individual)
/resources (Área de Recursos - guias, checklists, ferramentas)
/contact (Contato multicanal)
/pricing (Se aplicável por negócio)
/investors (Para stakeholders - optional)
```

## Funcionalidades Principais
1. **Navegação multi-empresa**: Menu dinâmico que mostra todos os negócios da holding
2. **Seleção de segmento**: Quiz interativo que classifica usuário por setor/tamanho/dor
3. **Funil inteligente**: Fluxo de qualificação → recomendação → CTA contextualizado
4. **Páginas de negócio individuais**: Cada empresa tem página própria com CTA único
5. **Gerenciador de artigos IA**: Painel editorial para criar/editar/publicar artigos
6. **Formulário de contato contextual**: Diferente por negócio/selecionado no funil
7. **Dashboard de analytics**: Tracking de conversões por segmento/funil
8. **SEO técnico automatizado**: Schema markup dinâmico por página/negócio
9. **Sistema de idiomas**: PT/EN com i18next ou similar

## Integrações Técnicas
- **IA API**: Anthropic Claude / OpenAI / Google Gemini (configurável)
- **CMS API**: Directus REST/GraphQL para gestão de conteúdo
- **Payment**: Stripe Connect (se houver monetização por negócio)
- **Email**: SendGrid/Mailgun para formulários de contato
- **Chat**: WhatsApp Business API (opcional)

## Modelo de Dados Principal
```
Business (negócio)
├── id
├── name
├── slug
├── sector (healthcare, hospitality, logistics, construction, retail, professional_services)
├── description
├── website_url
├── contact_email
├── cta_config (JSON: button_text, destination_url)
├── features (array)
└── created_at

Article (artigo)
├── id
├── title
├── slug
├── content
├── excerpt
├── business_id (relação)
├── tags (array)
├── ai_generated (bool)
├── seo_meta (JSON)
└── published_at

UserInteraction (interações do funil)
├── id
├── session_id
├── step (quiz/diagnostic/recommendation/cta)
├── answers (JSON)
├── recommended_business_id
├── converted (bool)
└── created_at
```

## Requisitos Técnicos
- **Performance**: Core Web Vitals otimizados (LCP < 2.5s, CLS < 0.1)
- **Acessibilidade**: WCAG 2.1 AA
- **SEO**: Next.js ISR + Schema.org markup dinâmico
- **Segurança**: CSP headers, CSRF protection, input sanitization
- **Escalabilidade**: Arquitetura headless permite adicionar novos negócios sem refatorar frontend