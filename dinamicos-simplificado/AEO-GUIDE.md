# AEO - AI Engine Optimization Guide

> Guia técnico para tornar o conteúdo do Dinâmicos descoberto e citado por agentes de IA (ChatGPT, Gemini, Claude, Google AI).

---

## 1. O que é AEO?

**Answer Engine Optimization** é a prática de estruturar conteúdo para que agentes de IA possam extraí-lo e citá-lo diretamente em respostas geradas.

| Diferença SEO vs AEO |
|----------------------|
| **SEO** | Ranking em posições no SERP |
| **AEO** | Ser citado/em uma resposta gerada pela IA |

---

## 2. Schema Markup Avançado

### Os 9 tipos de schema mais impactantes

#### 1. **FAQPage** (Mais impactante - 3.2x mais chances)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Qual é o melhor horário para postar no Instagram?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O melhor horário para postar no Instagram é entre 11h e 14h nos terços e quintos-feiras, com picture uploads entre 6h-9h. Dados do Hootsuite 2026."
    }
  }]
}
</script>
```

#### 2. **HowTo** (73% de queries "Como faço...")
```json
{
  "@type": "HowTo",
  "name": "Como configurar um site B2B profissional",
  "totalTime": "PT45M",
  "step": [{
    "@type": "HowToStep",
    "text": "Escolha um domínio profissional...",
    "name": "Escolher domínio"
  }]
}
```

#### 3. **Article / BlogPosting** (76% das citações)
```json
{
  "@type": "BlogPosting",
  "headline": "Guia completo de SEO para PMEs",
  "author": {"@type": "Person", "name": "Nome do autor"},
  "datePublished": "2026-11-08",
  "datePublished": "2026-11-08",
  "publisher": {
    "@type": "Organization",
    "name": "Dinâmicos",
    "logo": {"@type": "ImageObject", "url": "..."}
  }
}
```

#### 4. **Organization** (82% das citações)
```json
{
  "@type": "Organization",
  "name": "Dinâmicos",
  "url": "https://dinamicos.jefi.com.br",
  "logo": "...",
  "sameAs": [
    "https://linkedin.com/company/dinamicos",
    "https://twitter.com/dinamicos"
  ]
}
```

#### 5. **LocalBusiness** (+40% em busca local)
```json
{
  "@type": "LocalBusiness",
  "name": "Dinâmicos",
  "address": "...",
  "telephone": "...",
  "geo": {"@type": "GeoCoordinates", "latitude": "...", "longitude": "..."}
}
```

---

## 3. Estruturação de Conteúdo

### Answer-First Formatting (Padão obrigatório)

```markdown
## Como escolher um site para sua empresa?

A escolha correta de um site institucional depende de três fatores principais: objetivo comercial, público-alvo e orçamento. A seguir, apresentamos um checklist prático para sua decisão.

[Detalhamento completo aqui...]
```

**Regras:**
- Resposta direta nos primeiros 40-60 palavras
- Texto da resposta deve corresponder EXACTAMENTE ao HTML visível
- Dados específicos (números, datas, nomes) preferidos

---

## 4. Técnicas de Implementação

### 1. Mapear Perguntas
```bash
# Usar Google Search Console > People Also Ask
# Analisar suporte/clientes comuns
# Criar conteúdo baseado em perguntas reais
```

### 2. Schema por Página

| Página | Schema Priority |
|--------|-----------------|
| Homepage | Organization |
| Blog Post | BlogPosting + FAQPage |
| Serviços | Product/Service + FAQPage |
| Contato | LocalBusiness + ContactPage |

### 3. Cross-Referencing (sameAs)
```html
<link rel="canonical" href="https://dinamicos.jefi.com.br/">
```

**Consistência em 5+ perfis** = +40% mais chances de citação

---

## 5. Checklist SEO + AEO

### Core Web Vitals (Prioridade 1)
- [ ] LCP < 2.5s (Imagem hero WebP/AVIF, `fetchpriority="high"`)
- [ ] INP < 200ms (Remover scripts bloqueantes)
- [ ] CLS < 0.1 (Width/height em imagens)

### Meta Tags Essenciais
- [ ] Title tag único por página (50-60 caracteres)
- [ ] Meta description persuasiva (150-160 caracteres)
- [ ] Canonical URLs
- [ ] Open Graph + Twitter Cards

### Schema Markup
- [ ] Organization schema (homepage)
- [ ] FAQPage (todas as páginas de conteúdo)
- [ ] BlogPosting (posts de blog)
- [ ] sameAs cross-reference
- [ ] speakable (preparação para voz)

---

## 6. Métricas de Sucesso

| Métrica | Valor de referência |
|---------|---------------------|
| Taxa de citação com FAQPage | 3.2x maior |
| Aumento de CTR com schema | +40% média |
| LCP | < 2.5s |
| Taxa de conversão | 2-5% |

---

## 7. Próximos Passos

1. Mapear perguntas do público B2B
2. Criar templates com schema embutido
3. Validar com Google Rich Results Test
4. Monitorar com Google Search Console
5. Ajustar conforme resultados