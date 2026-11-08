# Schema.org Structured Data - Dinâmicos.pt

## Schema Organization Principal (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dinâmicos.pt",
  "url": "https://www.dinamicos.pt",
  "logo": "https://www.dinamicos.pt/images/logo.png",
  "brand": "Dinâmicos",
  "foundingDate": "2006",
  "founder": {
    "@type": "Person",
    "name": "Equipa Dinâmicos"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua de Exemplo, 123",
    "addressLocality": "Lisboa",
    "postalCode": "1200-001",
    "addressCountry": "PT"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+351-21-123-4567",
      "email": "contacto@dinamicos.pt",
      "contactType": "Customer Service",
      "availableLanguage": ["Portuguese", "Português"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/dinamicos",
    "https://twitter.com/DinamicosPT"
  ],
  "knowsAbout": [
    "Web Development",
    "Company Administration",
    "Advertising",
    "Modular Construction"
  ]
}
```

## Schema LocalBusiness para Cada Frente de Negócio

### Dinâmicos Tech (Web Development)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Dinâmicos Tech",
  "description": "Desenvolvimento web profissional para PMEs portuguesas. Soluções personalizadas, código limpo e resultados mensuráveis.",
  "url": "https://www.dinamicos.pt/web-development",
  "logo": "https://www.dinamicos.pt/images/logo-tech.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lisboa",
    "addressCountry": "PT"
  },
  "serviceArea": {
    "@type": "Place",
    "addressCountry": "PT"
  },
  "areaServed": "Portugal",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Desenvolvimento Web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aplicações Web Personalizadas",
          "description": "Desenvolvimento de aplicações sob medida para automatizar processos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Infraestrutura em Nuvem",
          "description": "Implantação segura de soluções em nuvem"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Segurança Cibernética",
          "description": "Auditorias, correções e políticas de proteção"
        }
      }
    ]
  }
}
```

### Dinâmicos Consultoria (Administração)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Dinâmicos Consultoria",
  "description": "Financiamento, fiscalidade e estratégia com linguagem de gestor, não de consultor.",
  "url": "https://www.dinamicos.pt/company-administration",
  "logo": "https://www.dinamicos.pt/images/logo-consultoria.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lisboa",
    "addressCountry": "PT"
  },
  "serviceArea": {
    "@type": "Place",
    "addressCountry": "PT"
  },
  "areaServed": "Portugal",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Consultoria Empresarial",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestão Financeira e Contabilidade",
          "description": "Contas claras, não contas-complexas. Ajudamos a entender os números e a tomar decisões informadas."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Financiamento e Investimento",
          "description": "Estruturação para pedidos de financiamento. Apresentações que vendem a sua empresa."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Planeamento Estratégico",
          "description": "Criação de planos de ação simples e executáveis. Objetivos mensuráveis e cronograma realista."
        }
      }
    ]
  }
}
```

### Dinâmicos Publicidade (B2C)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Dinâmicos Publicidade",
  "description": "Campanhas publicitárias estratégicas para PMEs portuguesas. Marketing digital com resultados mensuráveis.",
  "url": "https://www.dinamicos.pt/advertising",
  "logo": "https://www.dinamicos.pt/images/logo-publicidade.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lisboa",
    "addressCountry": "PT"
  },
  "serviceArea": {
    "@type": "Place",
    "addressCountry": "PT"
  },
  "areaServed": "Portugal",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Publicidade e Marketing",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Identidade de Marca",
          "description": "Criação de identidade visual e de comunicação que reconhecem e confiam."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Campanhas Digitais",
          "description": "Google Ads, redes sociais e landing pages otimizadas para conversão."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing de Conteúdo",
          "description": "Conteúdo bom é publicidade bom. Histórias que interessam e convertem fãs em clientes fiéis."
        }
      }
    ]
  }
}
```

### Dinâmicos Construção (Modular)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Dinâmicos Construção",
  "description": "Soluções modulares para projectos rápidos e sustentáveis. Construção sem surpresas.",
  "url": "https://www.dinamicos.pt/modular-construction",
  "logo": "https://www.dinamicos.pt/images/logo-construcao.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lisboa",
    "addressCountry": "PT"
  },
  "serviceArea": {
    "@type": "Place",
    "addressCountry": "PT"
  },
  "areaServed": "Portugal",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Construção Modular",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Edifícios Modulares Residenciais",
          "description": "Casas e apartamentos modulares com qualidade certificada e prazos previsíveis."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Espaços Temporários",
          "description": "Armazéns, salas de reunião e lojas móveis para necessidades empresariais."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reformas Modulares",
          "description": "Modernização de espaços sem demolição completa. Soluções flexíveis para remodelação."
        }
      }
    ]
  }
}
````

## Implementação nas Páginas

Insira o Schema Organization no `<head>` da homepage e o schema correspondente de ProfessionalService em cada página de frente de negócio usando JSON-LD `<script type="application/ld+json">`.

## Dicas de Validação

- Use o Google Rich Results Test para validar os schemas
- Certifique-se que o `@type` mais específico substitui o Organization onde aplicável (ProfessionalService para cada frente)
- Mantenha a consistência de `name`, `url` e `address` em todos os schemas
