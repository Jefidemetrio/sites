# Directus Placeholders — Guia para Designer

Placeholders disponíveis no HTML. Substituam valores fixos por `{{camada.campo}}` que são resolvidos em build pelo Developer.

## Estrutura dos dados

```javascript
// site_settings.json (único, collection: settings)
site = { site_name, tagline, whatsapp_number, contact_email, primary_color, secondary_color, social_links, seo_defaults }

// pages.json (múltiplos, slug identifica)
pages = [{ slug, title, meta_title, meta_description, content_blocks: [] }]

// models.json (múltiplos, por slug ou ordem)
models = []

// faqs.json (múltiplos, por categoria)
faqs = []

// testimonials.json (múltiplos, aprovados)
testimonials = []
```

## Placeholders disponíveis

### Site Settings (geral)
| Placeholder | Fonte | Exemplo |
|-------------|-------|---------|
| `{{site.site_name}}` | settings.site_name | "TinyHouses Portugal" |
| `{{site.tagline}}` | settings.tagline | "Construção modular desde €45.000" |
| `{{site.whatsapp_number}}` | settings.whatsapp_number | "+351912345678" |
| `{{site.contact_email}}` | settings.contact_email | "info@tinyhouses.pt" |
| `{{site.primary_color}}` | settings.primary_color | "#2E7D32" |
| `{{site.secondary_color}}` | settings.secondary_color | "#795548" |

### Home Page
| Placeholder | Fonte | Exemplo |
|-------------|-------|---------|
| `{{home.title}}` | pages[home].title | "TinyHouses Portugal" |
| `{{home.meta_title}}` | pages[home].meta_title | "TinyHouses modernas e sustentáveis em Portugal" |
| `{{home.meta_description}}` | pages[home].meta_description | "Construção modular desde €45.000..." |
| `{{home.hero.heading}}` | pages[home].content_blocks.hero.data.heading | "Bem-vindo" |

### Modelos
| Placeholder | Fonte | Exemplo |
|-------------|-------|---------|
| `{{models.json}}` | models.json | JSON string injetado em `<script>` para render client-side |
| `{{model.name}}` | models[].name | "Micro", "Compacto" |
| `{{model.price_range}}` | models[].price_range | "€45.000" |
| `{{model.price_eur}}` | models[].price_eur | 45000 (número) |
| `{{model.sqm}}` | models[].sqm | 15 |
| `{{model.specs.bedrooms}}` | models[].specs.bedrooms | 1 |
| `{{model.is_featured}}` | models[].is_featured | true |

### FAQs
| Placeholder | Fonte | Exemplo |
|-------------|-------|---------|
| `{{faqs.json}}` | faqs.json | JSON string injetado |
| `{{faq.question}}` | faqs[].question | "Quanto custa?" |

### Testemunhos
| Placeholder | Fonte | Exemplo |
|-------------|-------|---------|
| `{{testimonials.json}}` | testimonials.json | JSON string injetado |
| `{{testimonial.author_name}}` | testimonials[].author_name | "João Silva" |
| `{{testimonial.rating}}` | testimonials[].rating | 5 |

## Uso em HTML (exemplo)

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <title>{{home.meta_title}}</title>
  <meta name="description" content="{{home.meta_description}}">
  <meta property="og:title" content="{{site.site_name}}">
</head>
<body style="--primary: {{site.primary_color}}; --secondary: {{site.secondary_color}};">
  
  <!-- Hero -->
  <section class="hero">
    <h1>{{home.hero.heading}}</h1>
    <p>{{home.hero.subheading}}</p>
    <a href="https://wa.me/{{site.whatsapp_number}}" class="cta">WhatsApp Orçamento</a>
  </section>

  <!-- Models (via JSON) -->
  <section id="models">
    <div id="models-container"></div>
  </section>

  <!-- Renderizar via JS -->
  <script id="models-data" type="application/json">{{models.json}}</script>
  <script>
    const models = JSON.parse(document.getElementById('models-data').textContent);
    // render models...
  </script>
</body>
</html>
```

## Convenções

1. **Sempre colocar aspas duplas** nos placeholders do JSON: `{{models.json}}` injeta string escapada.
2. **Arrays são injetados** como strings JSON válidas; o JS front-end faz `JSON.parse()`.
3. **Se placeholder não existe** no dados, build avisa `⚠ placeholder sem dado: {{...}}` e deixa inalterado.