# Directus API Usage — Endpoints para Developer

## Base URL
```
DIRECTUS_URL=https://directus.seudominio.com
```

## Autenticação

### Token de leitura (desenvolvimento/produção)
Header: `Authorization: Bearer <DIRECTUS_READ_TOKEN>`

Para ambientes sem token (dev local), acesso público é permitido.

---

## Endpoints

### 1. Site Settings (singleton)
```bash
GET /items/site_settings?fields=*
```
**Resposta**: `[{ site_name, tagline, whatsapp_number, contact_email, primary_color, secondary_color, social_links, seo_defaults }]`

### 2. Páginas (publicadas)
```bash
GET /items/pages?fields=*&filter[status][_eq]=published&sort=sort
```
**Resposta**: Array de páginas com `content_blocks[]`

#### Página específica (home)
```bash
GET /items/pages?fields=*&filter[slug][_eq]=home&filter[status][_eq]=published
```

### 3. Modelos (ativos)
```bash
GET /items/models?fields=*&filter[status][_eq]=active&sort=sort&limit=-1
```
**Resposta**: Array de modelos com `specs{}`, `features[]`, `images[]`

#### Modelo específico
```bash
GET /items/models?fields=*&filter[slug][_eq]=micro
```

### 4. FAQs (publicadas)
```bash
GET /items/faqs?fields=*&filter[status][_eq]=published&sort=sort
```

#### FAQ por categoria
```bash
GET /items/faqs?fields=*&filter[category][_eq]=legal&filter[status][_eq]=published
```

### 5. Testemunhos (aprovados)
```bash
GET /items/testimonials?fields=*&filter[status][_eq]=approved&sort=-date_created
```

### 6. Arquivos (imagens)
```bash
# Obter URL de upload via Directus Files API
GET /files/{id}?width=800&height=600&fit=cover

# Ou via CDN do Directus
https://directus.seudominio.com/assets/{id}
```

---

## Exemplos JavaScript (Node/Browser)

### Fetch content
```javascript
const API = 'https://directus.seudominio.com';
const TOKEN = 'your-token';

const headers = { Authorization: `Bearer ${TOKEN}` };

const pages = await fetch(`${API}/items/pages?filter[status][_eq]=published`, { headers }).then(r => r.json());
const models = await fetch(`${API}/items/models?filter[status][_eq]=active`, { headers }).then(r => r.json());
const settings = await fetch(`${API}/items/site_settings`, { headers }).then(r => r.json());
```

### No browser (sem token)
Se o role `public` tem acesso read de published items:
```javascript
fetch('https://directus.seudominio.com/items/pages?filter[status][_eq]=published')
  .then(r => r.json())
  .then(data => console.log(data.data));
```

---

## Códigos de status relevantes

| Código | Significado |
|--------|-------------|
| 200 | OK |
| 204 | Sem conteúdo (nenhum item publicado) |
| 401 | Não autenticado |
| 403 | Não autorizado (role não tem read) |
| 404 | Coleção não encontrada |
| 500 | Erro interno |

---

## Rate limiting
Directus padrão: 1000 req/min IP (configurável). Para aplicações, use cache headers e ETag.

---

## Webhook (publicação de conteúdo)

Para invalidar cache quando Editor publica algo:

1. No Directus → Settings → Webhooks
2. Criar webhook:
   - **Trigger**: When an item is updated (collection: pages)
   - **Filter**: `{ "status": { "_eq": "published" } }`
   - **URL**: `https://api.github.com/repos/<owner>/<repo>/dispatches`
   - **Method**: POST
   - **Headers**: `Authorization: Bearer <GH_TOKEN>; Content-Type: application/json`
   - **Body**: `{ "event_type": "content-published", "client_payload": { "collection": "pages", "slug": "{{item.slug}}" } }`

GitHub Actions recebe via `workflow_dispatch` e re-builda.

---

## Erros comuns

### "No permissions to read a collection"
```bash
→ Verificar role do token: é Public ou Editor?
→ Filtrar por status publicado: filter[status][_eq]=published
```

### "Field not found"
```bash
→ Verificar schema em directus/schema.json
→ Recriar collection se necessário
```

### URL quebrada após deployment
```bash
→ Verificar DIRECTUS_URL nos secrets do repositório
→ Testar: curl -H "Authorization: Bearer $TOKEN" $DIRECTUS_URL/items/pages
```