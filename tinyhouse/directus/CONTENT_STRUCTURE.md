# TinyHouses Portugal — Estrutura de Conteúdo (Directus CMS)

## Visão geral
Estrutura de conteúdo para integração com Directus CMS. Editor gerencia conteúdo; Developer consome via API REST.

## Coleções Diretas

### 1. `pages` — Páginas do site
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Chave primária |
| `slug` | String | URL-friendly (ex: `home`, `modelos`, `sobre`) |
| `title` | String | Título da página |
| `hero_image` | File | Imagem de destaque (relação arquivo) |
| `meta_title` | String | SEO title tag |
| `meta_description` | String | SEO meta description |
| `content_blocks` | Json | Array de blocos de conteúdo |
| `created_at` | Timestamp | Data de criação |
| `updated_at` | Timestamp | Data de atualização |

**Exemplo de content_blocks:**
```json
[
  { "type": "hero", "data": { "heading": "Tiny Houses Sustentáveis", "subheading": "Construção modular em Portugal" } },
  { "type": "models-grid", "data": { "show_all": true } },
  { "type": "testimonials", "data": { "limit": 3 } },
  { "type": "faq", "data": {} },
  { "type": "contact-form", "data": { "whatsapp_number": "+351912345678" } }
]
```

### 2. `blocks` — Blocos reutilizáveis
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Chave primária |
| `type` | String | Tipo de bloco (hero, models, testimonials, faq, contact) |
| `name` | String | Nome legível |
| `data` | Json | Dados específicos do bloco |
| `order` | Integer | Ordem de exibição |
| `is_active` | Boolean | Status de visibilidade |

### 3. `settings` — Configurações globais do site
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Chave primária |
| `site_name` | String | Nome do site |
| `tagline` | String | Subtítulo institucional |
| `favicon` | File | Favicon do site |
| `primary_color` | String | Cor primária (hex) |
| `secondary_color` | String | Cor secundária (hex) |
| `seo_defaults` | Json | Valores padrão de SEO |
| `social_links` | Json | Links de redes sociais |
| `contact_email` | String | Email de contato |
| `whatsapp_number` | String | Número WhatsApp |

### 4. `models` — Modelos de Tiny Houses
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Chave primária |
| `slug` | String | Identificador único |
| `name` | String | Nome do modelo |
| `description` | Text | Descrição detalhada |
| `price_range` | String | Faixa de preço |
| `specs` | Json | Especificações técnicas |
| `images` | File | Array de imagens |
| `features` | Array | Lista de funcionalidades |
| `is_featured` | Boolean | Destaque no site |
| `order` | Integer | Ordem de exibição |
| `created_at` | Timestamp | |
| `updated_at` | Timestamp | |

**Exemplo specs:**
```json
{
  "sqm": 20,
  "bedrooms": 1,
  "bathrooms": 1,
  "dimensions": "6m x 3m",
  "weight_kg": 4500,
  "energy_rating": "A+"
}
```

### 5. `testimonials` — Depoimentos
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Chave primária |
| `author_name` | String | Nome do autor |
| `author_location` | String | Localização |
| `content` | Text | Texto do depoimento |
| `rating` | Integer | Nota 1-5 |
| `is_approved` | Boolean | Aprovação editorial |
| `created_at` | Timestamp | |

### 6. `faqs` — Perguntas frequentes
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Chave primária |
| `question` | Text | Pergunta |
| `answer` | Longtext | Resposta |
| `category` | String | Categoria (legal, técnica, preço) |
| `is_active` | Boolean | Visibilidade |
| `order` | Integer | Ordem |

## Permissões (Editor Profile)

### Role: `editor`
- **pages**: Read = All records, Create/Update/Delete = Own records only
- **blocks**: Read = All, Write = None (apenas leitura)
- **settings**: Read = All, Write = Own records
- **models**: Read = All, Write = Own records
- **testimonials**: Read = Approved + Own, Write = Own
- **faqs**: Read = All, Write = Own

### Token API: `editor-content-token`
- Tipo: Public
- Scope: Apenas coleções de conteúdo (pages, models, testimonials, faqs, settings)
- Limitado a GET requests para performance e segurança

## Fluxo Editor → Developer

```
┌─────────────┐     ┌──────────────┐     ┌──────────────────┐     ┌────────────┐
│   Editor    │────▶│  Directus    │────▶│   API REST       │────▶│   Site     │
│             │     │  (CMS)       │     │  https://xxx.directus.app   │     │  (GitHub CI) │
│ Gerencia    │◀────│              │◀────│ /items/pages     │     │            │
│ conteúdo no │     │ Colecções:   │     │ /items/models    │     │ HTML/JS    │
│ dashboard   │     │ pages,       │     │ /items/settings  │     │ estático   │
│             │     │ blocks,      │     │ /files/images    │     │ renderizado│
│             │     │ models...    │     └──────────────────┘     └────────────┘
└─────────────┘                                              Developer consome API
```

## Variáveis de Ambiente (`sites/tinyhouse/.env.example`)

```env
DIRECTUS_URL=https://seu-directus.vercel.app
DIRECTUS_CONTENT_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SITE_ENV=production
```
