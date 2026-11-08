# Directus — Referências

| Arquivo | Descrição |
|---------|-----------|
| `CONTENT_STRUCTURE.md` | Schema completo das collections (pages, models, faqs, testimonials, settings) |
| `schema.json` | JSON oficial para aplicar ao Directus |
| `PLACEHOLDERS.md` | Lista de placeholders para o Designer usar no HTML |
| `API_USAGE.md` | Endpoints REST e exemplos de consumo |
| `content-schema.md` | Documentação do workflow de publicação |

## Como usar

1. **Editor**: Acessar `/admin` do Directus → usar collections conforme `CONTENT_STRUCTURE.md`
2. **Developer**: Consumir API conforme `API_USAGE.md`
3. **Designer**: Usar placeholders em `public/index.html` conforme `PLACEHOLDERS.md`

## Fluxo resumido

```
Editor publica → Directus (status=published) → CI (fetch + build) → GitHub Pages
```