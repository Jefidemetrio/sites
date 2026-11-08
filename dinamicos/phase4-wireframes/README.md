# Wireframes - Índice da Fase 4

## Documentação Wireframes Disponíveis

| Arquivo | Página | Status |
|---------|--------|--------|
| [home-wireframe.md](./home-wireframe.md) | Página Inicial | ✅ Completar |
| [front-page-wireframe.md](./front-page-wireframe.md) | Página de Frente (4 segmentos) | ✅ Completar |
| [services-wireframe.md](./services-wireframe.md) | Lista e Detalhe de Serviços | ✅ Completar |
| [cases-wireframe.md](./cases-wireframe.md) | Lista e Detalhe de Casos | ✅ Completar |
| [contact-wireframe.md](./contact-wireframe.md) | Página de Contactos | ✅ Completar |

## Fluxo de Navegação

```
                    ┌─────────────┐
                    │  HOME       │
                    │  /          │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│ FRONT A     │   │ FRONT B     │   │ FRONT C     │
│ Web Dev     │   │ Consultoria │   │ Publicidade │
└──────┬──────┘   └──────┬──────┘   └──────┬──────┘
       │                 │                 │
       ▼                 ▼                 ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│ Serviços    │   │ Serviços    │   │ Serviços    │
│ Casos       │   │ Casos       │   │ Casos       │
│ Contactos   │   │ Contactos   │   │ Contactos   │
└─────────────┘   └─────────────┘   └─────────────┘
```

## Design System References
- Paleta de cores: 5 cores corporativas + 5 cores de accent
- Tipografia: Inter 300-800, JetBrains Mono para código
- Espaçamento: Sistema 8pt (0.25rem base)
- Border radius: 0.375rem médio
- Sombras: sm, md, lg (submissores suaves)

## Responsividade
- Mobile: < 640px (sm)
- Tablet: ≥ 768px (md)
- Desktop: ≥ 1024px (lg)
- Wide: ≥ 1280px (xl)

## Acessibilidade
- Contrast ratio ≥ 4.5:1
- Focus visible em todos os elementos interativos
- Labels associados aos formulários
- ARIA landmarks