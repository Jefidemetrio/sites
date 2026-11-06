# DIREÇÃO ARTÍSTICA - TinyHouses Portugal

## Visão Geral da Identidade Visual

### Conceito
Identidade baseada em materiais sustentáveis portugueses, com conexão visceral ao campo e construções modernas. Não estética "tech" genérica, mas algo que transmita "feito em Portugal com terroir e cuidado".

### Paleta de Cores (Design Tokens)

#### Primário: Verde Sustentável
- CSS Variable: `--primary: #2E7D32`
- Contraste: Satisfaz WCAG AA em fundo branco
- Significado: Natureza, sustentabilidade, Portugal
- Uso: Cabeçalho, links ativos, CTA principal

#### Secundário: Terracota Portuguesa
- CSS Variable: `--secondary: #795548`
- Contraste: WCAG AA em fundo claro
- Significado: Telhas portuguesas, terra batida, tradição
- Uso: Hover states, acentos, detalhes

#### Neutro Claro: Cinza Areia
- CSS Variable: `--neutral-light: #F5F5F5`
- Significado: Concreto, areia, construção
- Uso: Fundo secundário, cards

#### Neutro Escuro: Grafite
- CSS Variable: `--neutral-dark: #2D3748`
- Significado: Estabilidade, estrutura
- Uso: Texto principal, footers

#### Texto: Cinza Escuro
- CSS Variable: `--text: #333333`
- Legibilidade ótima em todos os fundos

#### Branco: Puro
- CSS Variable: `--white: #FFFFFF`

### Tipografia (Com Personalidade)

#### Família Principal: "Open Sans", sans-serif
- Peso 400 para body
- Peso 600 para títulos secundários
- Peso 700 para títulos principais

#### Família de Impacto: "Montserrat", sans-serif
- Peso 700 para títulos hero
- Peso 600 para subtítulos de seção
- Hierarquia: h1 > h2 > h3 > h4

#### Escala Tipográfica
- h1: 2.75rem (44px) - Hero section
- h2: 2.25rem (36px) - Seções
- h3: 1.75rem (28px) - Subtítulos
- h4: 1.25rem (20px) - Cards
- body: 1rem (16px) - Parágrafos
- small: 0.875rem (14px) - Metadados

### Design Tokens (Systematic)

#### Espaçamento Scale (8px base)
```
0: 0px
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
5: 1.25rem (20px)
6: 1.5rem (24px)
7: 1.75rem (28px)
8: 2rem (32px)
```

#### Border Radius Scale
- `--radius-sm: 4px` - Inputs, pequenos cards
- `--radius: 8px` - Cards padrão, botões
- `--radius-lg: 12px` - Hero, sections
- `--radius-full: 9999px` - Avatares, badges

#### Sombra Scale
- `--shadow-sm: 0 2px 4px rgba(0,0,0,0.05)`
- `--shadow: 0 4px 6px rgba(0,0,0,0.1)` - Cards, hover
- `--shadow-lg: 0 8px 25px rgba(0,0,0,0.15)` - Hero elevation

### Componentes com Variantes

#### Botões

##### Primary Button (CTA Principal)
```css
.btn-primary {
  background: var(--primary);
  color: var(--white);
  border: none;
  padding: 1rem 2rem;
  border-radius: var(--radius);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #2C7A31; /* Darker primary */
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(1px);
}
```

##### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 1rem 2rem;
  border-radius: var(--radius);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--primary);
  color: var(--white);
}
```

##### Small Button
```css
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  border-radius: var(--radius-sm);
}
```

#### Cards

```css
.benefit-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: var(--spacing-4);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

#### Formulários

```css
.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.15);
}
```

### Microinterações com Propósito

#### Hover States
- Todos os links e botões têm state :hover com mudança sutil
- Cores são derivadas da paleta (não cores aleatórias)
- Transformações são modestas (scale, translateY, opacity)

#### Focus States
- `:focus-visible` para navegação por teclado
- Outline derivado de `--primary`
- Contraste WCAG AA garantido

#### Reduce Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
```

### Diretrizes de Originalidade (Anti-AI-Slop)

✓ **Não usar** gradientes genéricos roxo-azul-clichê
✓ **Não usar** ícones de "branding" genérico
✓ **Não usar** "card with shadow on white" padrão
✓ **Não usar** tipologia "sans-serif + roboto" default
✓ **Utilizar** referências de construção portuguesa real
✓ **Utilizar** paleta inspirada em materiais (terracota, madeira, pedra)
✓ **Utilizar** tipografia com personalidade (Montserrat tem peso visual próprio)
✓ **Utilizar** microinterações que servem a propósito (feedback, não decoração vazia)

#### Evitados Explicitamente (referência 09-anti-ai-slop)
1. ❌ Cards com "efeito vidro" (frosted glass) genérico
2. ❌ Gradientes arco-íris ou pôr-do-sol genérico
3. ❌ "Futurismo" sem conexão com o briefing
4. ❌ Estética "startup SaaS" sem razão de ser
5. ❌ Ícones de "lifestyle" genérico sem contexto

### Protótipo Visual (HTML/CSS)

O design system deve ser aplicado ao index.html existente. As variáveis CSS já definidas no style.css precisam ser atualizadas para refletir esta direção artística, mantendo a consistência entre todas as páginas.

#### Variáveis Atualizadas (exemplo)

```css
:root {
    --primary: #2E7D32;      /* Verde sustentável - original content-structure */
    --primary-dark: #236B29;
    --secondary: #795548;    /* Terracota - original content-structure */
    --accent: #D7CCC8;       /* Cinza claro para contraste */
    --neutral-light: #F5F5F5; /* Areia - construção */
    --neutral-mid: #E0E0E0;
    --neutral-dark: #2D3748; /* Grafite - estrutura */
    --text: #333333;
    --text-light: #666666;
    --white: #FFFFFF;
    --radius: 8px;
    --shadow: 0 4px 6px rgba(0,0,0,0.1);
    --transition: 0.3s ease;
}
```

### Próximo Passo
Validar direção artística e avançar para UX/UI, garantindo que todos os critérios de contraste WCAG AA são atendidos e que a identidade visual tem coerência em todas as telas.
