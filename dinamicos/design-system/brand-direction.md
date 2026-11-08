# Brand Direction — Dinâmicos

## Conceito Central: "Solidez com Rosto Humano"

O visitante típico é um decisor PME português (40–60 anos, dono de construtora, clínica, escritório de contabilidade, quinta agroindustrial) que **não é técnico** e desconfia de "websites bonitos que não vendem". A direção de arte responde a essa desconfiança:

> O site deve parecer construído por uma empresa séria com nomes e moradas — não por um gerador automático.

## Paleta — Estratégia

### Cor primária: Azul profundo `#1E40AF`
- Teste de concorrência (pesquisado em Sortlist/DesignRush PT, nov. 2026): agências e PMEs digitais portuguesas convergem para azul, **mas em tons electric/indigo genéricos** (`#3B82F6`, `#6366F1`). O nosso azul é mais escuro, mais "tinta", mais institucional — distancia-se sem quebrar a expectativa cultural de confiança.
- Contraste com branco: 8.6:1 (AAA) — CTAs e headings legíveis.

### Acento: Âmbar `#F59E0B`
- Combo clássico navy + âmbar: alto contraste, calor mediterrânico/atlântico, culturalmente neutro em Portugal (vermelho é reservado para erro/alerta — regra local confirmada em pesquisa PT).
- Regra 80/15/5: 80% neutros, 15% azul, 5% âmbar. O âmbar **só aparece em ações** (CTAs do funil, badge de destaque). Nunca decorativo.

### Multi-marca
Cada empresa da holding recebe um slot de cor primária (`--primary-corp-1..5`). A estrutura, tipografia e componentes são idênticos — só muda o token. Isso dá coesão de holding com identidade por marca, e permite ao funil inteligente **segmentar CTAs por cor de contexto** sem quebrar o sistema.

## Tipografia — Estratégia

- **Inter** em tudo (variável, OFL, 300–800). Hierarquia criada por peso + tamanho + tracking, **nunca por cor de texto** (texto colorido em corpo = amadorismo percebido por este público).
- H1 com `letter-spacing: 0.05em` em caixa alta pequena para eyebrows/kickers — sinal editorial, não de template.
- Corpo 17–18px em parágrafos longos do blog IA (acima do default 16px): leitores não-técnicos, muitas vezes em telemóvel ao sol.
- Números de casos de estudo em `font-variant-numeric: tabular-nums` — alinhamento profissional de métricas.

## Estilo Visual — Assinatura Própria

1. **Linhas, não blobs.** Separadores de secção com filetes de 1px em `--gray-200` e cantos discretos (`--radius-md`, 6px). Nada de blobs orgânicos, nothing rounded-2xl por todo o lado.
2. **Grid visível.** As secções do funil seguem um grid de 12 colunas com respiro largo (`--space-10` entre blocos). O layout respira confiança institucional.
3. **Fotografia real, nunca stock sorriente de banco de imagens.** Retratos de equipa em ambiente de trabalho português (obra, escritório, armazém), tratamento de cor neutro-frio.
4. **Ícones de traço fino (1.5px) desenhados à mão**, não a biblioteca Lucide/Feather default — é o detalhe mais rápido que denuncia um site de IA.
5. **Micro-interações discretas**: hover eleva 2px + sombra média; transições 150–250ms ease. Zero parallax, zero scroll-hijack.
6. **Dark sections estratégicas**: footer e 1 secção de dados em `--gray-900` com texto branco — cria ritmo sem adotar dark-mode-first (inimigo da leitura para 40+).

## Proibições Explícitas (lista anti-genérico)

| ❌ Nunca | Motivo |
|---|---|
| Gradiente `#6366F1 → #A855F7` | Assinatura de template gerado por IA |
| Space Grotesk / Plus Jakarta Sans como títulos | Default de site builders IA 2024–2026 |
| Hero centrado com badge-pill + 2 botões simétricos | Padrão de landing de SaaS genérica |
| Glassmorphism / backdrop-blur | Reduz legibilidade, sinal de moda passageira |
| Vermelho como cor dominante | Em PT lê-se como erro/alerta |
| Texto de corpo colorido ou gradiente | Amadorismo percebido |
| Sombras `rounded-2xl` idênticas em todos os cards | Uniformidade de template |

## Testes de Aceitação Visual

1. LER (contraste AA mínimo em tudo; AAA em corpo).
2. Reconhecimento em 3s: a um estranho mostramos o hero 3s — deve conseguir dizer "empresa de serviços para empresas".
3. Teste de screenshot invertido: remover o logo; qualquer secção deve ainda parecer "Dinâmicos" pela estrutura de linhas + âmbar pontual.