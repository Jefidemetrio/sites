# Micro-tarefas - Fase 3: Art Direction

## 📋 Tarefas Separadas por Componente

**Executar uma de cada vez, validar, depois próxima.**

---

### **TAREFA 1: HeroSection.tsx**
**Tempo estimado:** 30 minutos

**Arquivo a criar:** `/opt/data/sites/dinamicos/components/HeroSection.tsx`

**Requisitos:**
- Hero full-width com gradiente sutil
- Título: "Solasões que fazem a sua empresa crescer"
- Subtítulo: texto da demo.html
- 2 botões: "Falar com um especialista" (CTA acento) + "Conhecer as empresas"
- Responsivo: mobile (stack) / desktop (2 colunas)

**Validação:** Deve renderizar em demo.html

---

### **TAREFA 2: ServiceCard.tsx**
**Tempo estimado:** 20 minutos

**Arquivo a criar:** `/opt/data/sites/dinamicos/components/ServiceCard.tsx`

**Requisitos:**
- Card com borda arredondada (0.375rem)
- Ícone (usar Lucide React)
- Título do serviço
- Descrição curta (≤ 2 linhas)
- Hover shadow md → shadow lg

**Validação:** Deve funcionar em index.tsx

---

### **TAREFA 3: CompanyCard.tsx**
**Tempo estimado:** 20 minutos

**Arquivo a criar:** `/opt/data/sites/dinamicos/components/CompanyCard.tsx`

**Requisitos:**
- Card com cor primária diferente por empresa
- 4 empresas: Tech (#1E40AF), Consultoria (#0F766E), Serviços, Marketing
- Badge de setor
- Link CTA

---

### **TAREFA 4: CaseStudy.tsx**
**Tempo estimado:** 25 minutos

**Arquivo a criar:** `/opt/data/sites/dinamicos/components/CaseStudy.tsx`

**Requisitos:**
- Layout before/after (grid 2 colunas)
- Imagem esquerda / texto direita
- Métricas em badge (ex: "96% de recomendação")
- Botões: "LER MAIS" + "VER PROJETO"

---

### **TAREFA 5: Navigation.tsx**
**Tempo estimado:** 15 minutos

**Arquivo a criar:** `/opt/data/sites/dinamicos/components/Navigation.tsx`

**Requisitos:**
- Logo + menu itens
- Mobile: hamburger menu
- Desktop: menu horizontal
- Links: Sobre, Empresas, Artigos, Contactos

---

### **TAREFA 6: ProcessSteps.tsx**
**Tempo estimado:** 25 minutos

**Arquivo a criar:** `/opt/data/sites/dinamicos/components/ProcessSteps.tsx`

**Requisitos:**
- 4 passos numerados (1, 2, 3, 4)
- Ícone + título + descrição
- Layout grid 2x2 (desktop) ou vertical (mobile)
- Cores: --primary, --accent, --success, --gray-600

---

### **TAREFA 7: index.tsx (Página Principal)**
**Tempo estimado:** 40 minutos

**Arquivo a criar:** `/opt/data/sites/dinamicos/pages/index.tsx`

**Requisitos:**
- Importar todos os componentes acima
- HeroSection no topo
- ProcessSteps logo abaixo
- CompanyCard grid (3-4 colunas)
- CaseStudy featured (2 itens)
- Footer no final

---

## ✅ Como Validar Cada Tarefa

Depois de criar cada componente:

```bash
# 1. Verificar sintaxe TypeScript
npx tsc --noEmit components/NomeComponente.tsx

# 2. Rodar validação parcial
./scripts/validate-phase-deliverables.sh 3
```

---

## 📌 Instruções para o Designer

Salve cada componente como `.tsx` em `/opt/data/sites/dinamicos/components/`.

Use importação do design system:
```tsx
import '../design-system/variables.css';
import '../design-system/typography.css';
```

**Não iniciar nova tarefa até validar a anterior!**

---

**Próxima ação:** Iniciar com **TAREFA 1: HeroSection.tsx**?