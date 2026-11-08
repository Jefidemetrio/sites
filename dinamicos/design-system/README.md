# Design System — Dinâmicos (Holding Multi-Empresa PME Portuguesa)

Identidade visual para website holding multi-empresa dirigida a decisores PME **não-técnicos** em Portugal.

## Princípios da Direção de Arte

1. **Confiança sem frieza corporativa** — o público é humano, não técnico. O design comunica solidez sem parecer software de banco.
2. **Clareza acima de tendência** — zero gradientes em excesso, zero glassmorphism, zero dark-mode-first. Legibilidade em primeiro lugar.
3. **Sistema multi-marca** — cada empresa da holding mantém cor primária própria; o design system unifica estrutura, tipografia, espaçamento e componentes.
4. **Anti-genérico** — recusa deliberada do "look de template IA" (roxo-azul #6366F1, gradientes violeta, hero centralizado genérico). Ver seção Diferenciação.

## Estrutura de Ficheiros

| Ficheiro | Conteúdo |
|---|---|
| `variables.css` | Tokens completos (cores, tipografia, espaçamento, sombras, componentes base) — fonte da verdade |
| `colors.css` | Paleta detalhada com mapeamento por empresa da holding |
| `typography.css` | Importação Google Fonts + escala tipográfica + hierarquia de headings |
| `brand-direction.md` | Direção de arte, diferenciação e regras visuais |
| `demo.html` | Demonstração funcional do design system renderizado |

## Paleta Resumida

| Papel | Token | HEX | Uso |
|---|---|---|---|
| Primária (default) | `--primary` | `#1E40AF` | Identidade da holding, navegação, links |
| Acento CTA | `--accent-1` | `#F59E0B` | Botões de conversão, CTAs do funil |
| Sucesso | `--accent-2` | `#10B981` | Confirmações, feedback positivo |
| Fundo escuro | `--gray-900` | `#0F172A` | Footer, secções de contraste |
| Texto secundário | `--gray-600` | `#475569` | Apoios de leitura |
| Superfície | `--off-white` | `#F8FAFC` | Fundos alternados |

Alternativas por empresa da holding: `#0F766E` (verde-teal), `#924483` (roxo-vinho), `#C2410C` (terracota), `#7E22CE` (roxo-tech).

## Tipografia

**Inter** (Google Fonts, OFL) para títulos e corpo — pesos 300–800.

- Títulos: Inter Bold/Semibold, tracking ligeiramente amplo (`0.05em`), tamanho 4xl–6xl em heroes.
- Corpo: Inter Regular 16px, line-height 1.5, `--gray-900` sobre fundo claro.
- Mono (dados, código): JetBrains Mono.
- Suporte completo a acentuação portuguesa (ã, õ, ç, é, ê, à) — verificado.

**Porquê Inter**: eixo vertical alto e abertura generosa das letras garantem legibilidade para leitores não-técnicos; variável (pesos dinâmicos num só ficheiro); não é a escolha default dos geradores de sites IA, que favorecem Space Grotesk / Plus Jakarta Sans — o que ajuda a diferenciação.

## Diferenciação (Anti-Genérico)

O template "gerado por IA" típico usa: gradiente `#6366F1 → #A855F7`, hero centralizado com botão roxo, cards com sombra idêntica, títulos em Space Grotesk. Este sistema evita explicitamente cada um desses clichés — ver `brand-direction.md`.

## Acesso

```css
/* Importar na raíz do projeto */
@import url('design-system/variables.css');
```