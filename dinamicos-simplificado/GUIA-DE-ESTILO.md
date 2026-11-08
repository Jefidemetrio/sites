# Art Direction — Dinâmicos

> Guia visual completo para o site institucional B2B Dinâmicos. Stack: Astro + Tailwind. Design minimalista estilo Apple.

---

## 1. Paleta de Cores

### Cores Primárias

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Azul Prismático** | `#0052FF` | rgb(0, 82, 255) | Links primários, botões CTA, destaque interativo |
| **Cinza Escuro** | `#1C1C1E` | rgb(28, 28, 30) | Texto principal, headings, contrastes altos |
| **Cinza Médio** | `#636366` | rgb(99, 99, 102) | Texto secundário, placeholders, ícones |
| **Cinza Claro** | `#E5E5EA` | rgb(229, 229, 234) | Bordas, divisores, backgrounds secundários |
| **Branco Puro** | `#FFFFFF` | rgb(255, 255, 255) | Fundo principal, espaçamento, pureza visual |

### Aplicação do Sistema

- **Fundo principal**: `#FFFFFF` (branco puro)
- **Fundo secundário**: `#F2F2F7` (cinza muito claro, para cards/seções)
- **Border/Divisor**: `#E5E5EA` (cinza claro)
- **Hover/Estado ativo**: Opacidade 8% em `#0052FF` → `rgba(0, 82, 255, 0.08)`
- **Hover/Estado ativo primário**: Azul Prismático com fundo `#0052FF` e texto branco

---

## 2. Sistema Tipográfico

### Fontes

| Uso | Fonte | Peso | Estilo |
|-----|-------|------|--------|
| **Headings (H1-H6)** | **Inter** (Google Fonts) | 700 Bold | Sans-serif |
| **Body Text** | **Inter** (Google Fonts) | 400 Regular | Sans-serif |
| **UI/Labels** | **Inter** (Google Fonts) | 500 Medium | Sans-serif |
| **Code/Pre** | **JetBrains Mono** (Google Fonts) | 400 Regular | Monospace |

### Escala Tipográfica

| Elemento | Tamanho (Desktop) | Tamanho (Mobile) | Line Height | Letter Spacing |
|----------|-------------------|------------------|-------------|----------------|
| `h1` | 48px (`3rem`) | 36px (`2.25rem`) | 1.2 | -0.02em |
| `h2` | 36px (`2.25rem`) | 28px (`1.75rem`) | 1.25 | -0.01em |
| `h3` | 28px (`1.75rem`) | 24px (`1.5rem`) | 1.3 | 0em |
| `h4` | 22px (`1.375rem`) | 20px (`1.25rem`) | 1.35 | 0.01em |
| `h5` | 18px (`1.125rem`) | 18px (`1.125rem`) | 1.4 | 0.01em |
| `h6` | 16px (`1rem`) | 16px (`1rem`) | 1.4 | 0.01em |
| `body` (p) | 16px (`1rem`) | 16px (`1rem`) | 1.6 | 0.01em |
| `small` | 14px (`0.875rem`) | 14px (`0.875rem`) | 1.4 | 0.02em |
| `ui-label` | 13px (`0.8125rem`) | 13px (`0.8125rem`) | 1.4 | 0.02em |

### Peso Tipográfico

```css
/* H1 */
font-weight: 700;

/* H2 - H3 */
font-weight: 600;

/* UI Labels, H4+ */
font-weight: 500;

/* Body, Captions */
font-weight: 400;
```

### Ajustes de Espaçamento

- **Linha entre headings**: `margin-top: 0` | `margin-bottom: 1.5rem` (desktop) / `1.25rem` (mobile)
- **Linha entre parágrafos**: `margin-bottom: 1rem`
- **Linha entre elementos de lista**: `margin-bottom: 0.75rem`

---

## 3. Componentes UI Documentados

### 3.1 Botões

#### Botão Primário (CTA)

```html
<button class="btn-primary">
  [Texto]
</button>
```

| Propriedade | Valor |
|-------------|-------|
| **Classes Tailwind** | `bg-[#0052FF] text-white font-medium rounded-xl px-6 py-3 transition-all duration-200 hover:bg-[#0042E6] hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(0,82,255,0.15)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.25)]` |
| **Altura** | 48px (desktop) / 44px (mobile) |
| **Padding X** | 24px |
| **Border Radius** | `rounded-xl` (32px) |
| **Transição** | 200ms ease-in-out |
| **States** | Default: Azul primário / Hover: Azul escuro + elevação / Focus: `outline-2 outline-[#0052FF] outline-offset-2` / Disabled: Opacidade 50% |

#### Botão Secundário (Outline)

| Propriedade | Valor |
|-------------|-------|
| **Classes Tailwind** | `border border-[#0052FF] text-[#0052FF] font-medium rounded-xl px-6 py-3 transition-all duration-200 hover:bg-[#0052FF] hover:text-white` |
| **Border Radius** | `rounded-xl` |
| **Hover** | Preenchimento completo |

#### Botão Terciário (Link)

| Propriedade | Valor |
|-------------|-------|
| **Classes Tailwind** | `text-[#0052FF] font-medium underline-offset-4 hover:underline transition-all duration-200` |
| **Padding** | `px-2 py-1` (interno) |

---

### 3.2 Cards

#### Card de Conteúdo

```html
<article class="card-content">
  <div class="card-header">
    <span class="card-category">[Categoria]</span>
    <h3 class="card-title">[Título]</h3>
    <p class="card-excerpt">[Resumo]</p>
  </div>
  <a href="#" class="card-link">Ler mais →</a>
</article>
```

| Propriedade | Valor |
|-------------|-------|
| **Background** | `#FFFFFF` |
| **Border** | `border border-[#E5E5EA]` |
| **Border Radius** | `rounded-2xl` (32px) |
| **Padding** | `p-6` (desktop) / `p-4` (mobile) |
| **Shadow** | `shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]` |
| **Transição** | 200ms ease-in-out, `hover:-translate-y-0.5` |
| **Hover State** | Elevação + leve movimento vertical |

#### Card de Serviço

| Propriedade | Valor |
|-------------|-------|
| **Icon Size** | 48px (desktop) / 40px (mobile) |
| **Icon Color** | `#0052FF` |
| **Title Size** | `text-xl font-semibold` |
| **Border Radius** | `rounded-xl` |
| **Background** | `#F2F2F7` para hover não-cta |

---

### 3.3 Forms

#### Input Base

```html
<input type="text" class="form-input" placeholder="[Placeholder]">
```

| Propriedade | Valor |
|-------------|-------|
| **Height** | 48px |
| **Padding X** | 16px |
| **Border** | `border border-[#E5E5EA] rounded-xl` |
| **Focus** | `border-[#0052FF] ring-2 ring-[#0052FF]/20` |
| **Background** | `#FFFFFF` |
| **Text** | `#1C1C1E` |
| **Placeholder** | `#636366` |
| **Error State** | Border `#FF3B30`, Focus `ring-[#FF3B30]/20` |

#### Botão de Submit

Usar `.btn-primary` dentro do formulário.

#### Validação

- **Success**: Checkmark verde `#34C759`
- **Error**: Mensagem em `#FF3B30` abaixo do campo
- **Hover**: `#FF9547` (tom mais claro)

---

### 3.4 Navegação

#### Header Desktop

```html
<header class="header">
  <div class="header-container">
    <a href="/" class="logo">Dinâmicos</a>
    <nav class="nav-desktop">
      <a href="/servicos">Serviços</a>
      <a href="/sobre">Sobre</a>
      <a href="/blog">Blog</a>
      <a href="/contato">Contato</a>
    </nav>
    <a href="/contato" class="btn-primary nav-cta">Contato</a>
  </div>
</header>
```

| Propriedade | Valor |
|-------------|-------|
| **Height** | 64px |
| **Logo** | Texto, peso 700, tamanho 20px |
| **Nav Links** | Peso 500, hover azul, transição 200ms |
| **Background** | Transparente no hero / Branco com shadow em página |
| **Container** | `max-w-7xl mx-auto px-6 lg:px-8` |

#### Mobile Menu

| Propriedade | Valor |
|-------------|-------|
| **Hamburger** | 32x32px ícone linear branco ou preto |
| **Menu Lateral** | Off-canvas, abre da esquerda, overlay escuro `rgba(0,0,0,0.4)` |
| **Links** | Stack vertical, padding 24px, tamanho 18px |
| **CTA Mobile** | Botão primário fixo no topo do menu |

#### Footer

| Propriedade | Valor |
|-------------|-------|
| **Background** | `#1C1C1E` |
| **Text** | `#636366` |
| **Links** | `#FFFFFF` hover `#0052FF` |
| **Border Top** | `border-t border-[#333333]` |
| **Columns** | 4 (desktop) / 2 (mobile) |

---

## 4. Guia de Estilo Minimalista Apple

### Princípios Fundamentais

#### 4.1 Pureza do Espaço (White Space)

- **Toda interface**: 50% do layout deve ser espaço em branco
- **Seções**: Margem horizontal de 24px (mobile) / 48px (desktop)
- **Cards**: 24px padding interno mínimo
- **Regra do Triplo**: Se um elemento tem 16px, seu redondo deve ser 48px

#### 4.2 Tipografia como Navegação

- **Jerarquia visual**: Nenhum elemento secundário deve competir com headings
- **Tamanho proporcional**: `clamp()` para escala fluida
- **Negrito seletivo**: Apenas o que importa para a ação

#### 4.3 Micro-Interações

| Ação | Duração | Easing | Efeito |
|------|---------|--------|--------|
| Hover | 200ms | ease-in-out | Elevação + cor de fundo |
| Clique | 100ms | cubic-bezier(0.4, 0, 0.2, 1) | Redução escala 0.98 |
| Scroll Reveal | 300ms | ease-out | Opacity 0 → 1, translateY 20px → 0 |
| Menu Toggle | 250ms | ease-out | Transform rotate/translate |

#### 4.4 Animações Permitidas

- **Transições de cor**: 150-200ms
- **Transformes 2D**: 200-300ms (não 3D)
- **Ocultar/Mostrar**: 200-250ms com easing out

**Proibido**: Animações de carregamento, borrões, boxes brancos animados.

### Tabela de Símbolos

| Símbolo | Significado | Uso |
|---------|-------------|-----|
| ▸ | Sub-nível | Accordion, menu dropdown |
| → | Navegação | Link externo, CTA |
| • | Item de lista | Lista simples |
| ★ | Destaque | Recursos, features premium |

### Diretrizes de Imagens

- **Formato preferido**: WebP otimizado
- **Aspect ratio**: 16:9 para hero / 4:3 para cards
- **Qualidade**: 85% para conteúdo, 70% para backgrounds
- **Decorativo**: `aria-hidden="true"` e `loading="lazy"`

### Acessibilidade Integrada

- **Contraste mínimo**: 4.5:1 (texto normal) | 3:1 (textos grandes)
- **Focus visible**: `outline-2 outline[#0052FF] outline-offset-2`
- **aria-label**: Sempre em botões de ação e ícones
- **Alt text**: Descritivo, não "imagem de..."

---

## 5. Tokens de Design (Tailwind)

```js
// tailwind.config.js (partial)
module.exports = {
  theme: {
    colors: {
      primary: '#0052FF',
      dark: '#1C1C1E',
      medium: '#636366',
      light: '#E5E5EA',
      white: '#FFFFFF',
      background: '#F2F2F7',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    borderRadius: {
      DEFAULT: '0.75rem', // 12px
      xl: '2rem', // 32px
    },
  },
}
```

---

## 6. Padrões de Comportamento

### Loading States

```html
<!-- Button loading -->
<button disabled class="btn-primary loading">
  <span class="spinner"></span> Processando...
</button>
```

### Error Messages

- Posicionar abaixo do campo, alinhado à esquerda
- Texto: 14px, cor `#FF3B30`
- Ícone: Exclamation triangle amarelo `#FF9500`

### Success States

- Texto: 14px, cor `#34C759`
- Ícone: Checkmark verde
- Duração: persistente até interação do usuário

---

## 7. Responsividade

| Breakpoint | Value | uso |
|------------|-------|-----|
| **XS** | < 640px | Mobile single column |
| **SM** | 640px | Mobile landscape |
| **MD** | 768px | Tablet portrait |
| **LG** | 1024px | Tablet landscape / Small desktop |
| **XL** | 1280px | Desktop padrão |
| **2XL** | 1536px | Wide desktop |

### Mobile-First Overrides

- Padding horizontal: `px-4` (XS) → `px-6` (LG)
- Grid cols: 1 (XS) → 2 (MD) → 3 (LG)
- Font size: clamp(1.25rem, 4vw, 3rem) para headings principais

---

## 8. Aplicado ao Contexto B2B Português

### Texto de Apresentação (Hero)

```
[HEADING] Transforme a presença digital da sua empresa
[SUBTITLE] Soluções web B2B especializadas para PMEs portuguesas, otimizadas para agentes de IA
[CTA] Começar projeto →
```

### Tom de Comunicação Visual

- **Prova social**: Logo de clientes em grid 3col → 2col (mobile)
- **Dado concreto**: "15+ empresas transformaram sua web"
- **Garantia**: Badge "SEO + IA compliant"

---

## 9. Checklist de Implementação

### Header/Footer
- [ ] Logo funcional com `alt="Dinâmicos - Início"`
- [ ] Mobile menu com focus trap
- [ ] CTA flutuante na rolagem

### Páginas
- [ ] Hero com H1 e CTA visível > 80vh
- [ ] Sekção de serviços com cards interativos
- [ ] FAQ com accordion (sem JS pesado)
- [ ] Formulário de contato com validação inline

### Performance
- [ ] Fontes pre-carregadas (`<link rel="preload">`)
- [ ] Imagens otimizadas com `srcset`
- [ ] Lighthouse score > 90 (Performance)

---

## 10. Próximos Passos

1. Implementar tokens no `tailwind.config.js`
2. Criar componentes base com HTML/CSS
3. Integrar fontes Inter via Google Fonts
4. Definir breakpoints e testar em dispositivos reais
5. Criar variações dark mode (opcional: `#1C1C1E` background, `#FFFFFF` texto)

---

*Documento atualizado: Novembro 2024*
*Versão: 1.0*
*Status: Referência técnica para desenvolvimento frontend*