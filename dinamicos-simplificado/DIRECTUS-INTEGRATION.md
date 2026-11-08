# Directus CMS Integration - Dinâpicos

## Configuração Inicial

### 1. Instalação Directus (Local ou Cloud)

```bash
# Instalar globalmente ou use npx
npm install -g directus

# Inicializar projeto
directus init

# Iniciar
directus database restore ./directus.json
directus start
```

### 2. Estrutura de Coleções Recomendada

#### Collection: `blog_posts`
- `title` (string) - Título do post
- `slug` (string) - URL amigável
- `description` (string) - Meta description
- `content` (rich text) - Conteúdo HTML
- `published` (boolean) - Status publicação
- `published_at` (date) - Data de publicação
- `reading_time` (string) - Tempo de leitura
- `image` (alias) - Imagem destacada
- `tags` (array) - Tags do post
- `seo_title` (string) - Title SEO personalizado
- `seo_description` (string) - Meta SEO personalizado

#### Collection: `services`
- `title` (string) - Nome do serviço
- `slug` (string) - URL
- `description` (string) - Resumo curto
- `content` (rich text) - Descrição completa
- `icon` (file) - Ícone do serviço
- `order` (number) - Orde para exibição

#### Collection: `settings` (Singleton)
- `site_title` (string) - Título do site
- `site_description` (string) - Descrição global
- `logo` (file) - Logo da empresa
- `favicon` (file) - Favicon

### 3. API Endpoints

```bash
# Listar posts publicados
GET /items/blog_posts?filter[published][$eq]=true&limit=10&sort=-published_at

# Post específico
GET /items/blog_posts/{slug}

# Serviços
GET /items/services?sort=order
```

### 4. Proxy no Astro

```javascript
// astro.config.mjs - Adicionar rewrites
export default defineConfig({
  // ... outras configs
  
  // Rewrites para Proxy
  server: {
    pages: {
      '/api/blog': 'http://localhost:8055/items/blog_posts',
      '/api/services': 'http://localhost:8055/items/services',
    }
  }
});
```

### 5. Client Astro para Directus

```bash
npm install @directus/sdk
```

```javascript
// src/lib/directus.js
import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('http://localhost:8055');
const client = directus.getRestClient();

export const getBlogPosts = async () => {
  return await client.items('blog_posts').readMany({
    filter: { published: { _eq: true } },
    sort: '-published_at',
    limit: 12
  });
};

export const getBlogPostBySlug = async (slug) => {
  return await client.items('blog_posts').readOne(undefined, {
    filter: { slug: { _eq: slug } }
  });
};

export const getServices = async () => {
  return await client.items('services').readMany({
    sort: 'order'
  });
};
```

### 6. Autenticação (Opcional para Admin)

```javascript
// Usar token estático para leitura pública
const DIRECTUS_TOKEN = 'your-static-token-here';

export const getClient = async () => {
  const staticClient = directus.getTokenClient(DIRECTUS_TOKEN);
  return staticClient;
};
```

### 7. Estrutura de Pastas

```
dinamicos-simplificado/
├── src/
│   ├── lib/
│   │   └── directus.js     # Client API
│   ├── pages/
│   │   ├── api/            # Proxies/Endpoints
│   │   └── blog/           # Blog pages
│   └── content/            # Conteúdo fallback local
│
├── directus/
│   ├── directus.json       # Schema
│   └── migrations/         # Migrations
│
└── directus.env            # Credenciais
```

---

## Configuração de Variáveis de Ambiente

```bash
# .env
DIRECTUS_URL=http://localhost:8055
DIRECTUS_TOKEN=static-token-from-admin
SITE_URL=https://dinamicos.jefi.com.br
```