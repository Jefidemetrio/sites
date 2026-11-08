# Protocolo de Validação de Entregas - Dinamicos

## 📋 Checklist de Validação por Fase

### **REGRESAO OBRIGATÓRIA**
**Nenhuma fase pode ser marcada como CONCLUÍDA sem passar por este checklist.**

---

### **Fase 3: Art Direction - Critérios de Aceitação**

#### Entregas Esperadas:
- [ ] **Design System Completo** 
  - `variables.css` - tokens de cores, espaçamento, tipografia
  - `colors.css` - paleta de cores corporativas
  - `typography.css` - hierarquia tipográfica
- [ ] **Arte Direcional (Brand Direction)**
  - `brand-direction.md` - diretrizes de marca
  - Imagens de referência/estilo
- [ ] **Componentes HTML/CSS Implementados**
  - **NÃO BASTA wireframes (.md)**
  - Precisa de arquivos reais: `components/*.html` ou `components/*.tsx`
  - Demo funcional: `demo.html` ou página de teste

#### Validação:
```bash
# Comando para verificar entregas da Fase 3
ls -la /opt/data/sites/dinamicos/design-system/ | grep -E "\.(css|md|html)$"
ls -la /opt/data/sites/dinamicos/components/ | grep -E "\.(html|tsx|jsx)$"
```

**STATUS ATUAL:** ❌ **INVALIDO** - Falta implementação real de componentes

---

### **Fase 4: UX/UI - Critérios de Aceitação**

#### Entregas Esperadas:
- [ ] **Wireframes de alta fidelidade**
  - `phase4-wireframes/*.md` - com especificações completas
- [ ] **Componentes UI Implementados**
  - **HTML/CSS ou React Components reais**
  - Pelo menos: Home, Front Pages, Serviços, Casos, Contato
- [ ] **Integração com Design System**
  - Componentes usam classes CSS do design system
  - Layout responsivo implementado
- [ ] **Arquivo de construção**
  - `index.html` atualizado (não pode ser placeholder)

#### Validação:
```bash
# Verificar componentes implementados
find /opt/data/sites/dinamicos -name "*.html" -o -name "*.tsx" -o -name "*.jsx" | head -20
# Verificar se index.html é mais que um placeholder
wc -l /opt/data/sites/dinamicos/index.html
```

---

### **Fase 5: Content & SEO - Critérios de Aceitação**

#### Entregas Esperadas (DEPENDE FASE 4):
- [ ] **Conteúdo principal validado**
  - Hero text finalizado
  - Serviços descritos
  - Casos de estudo
  - CTAs definidos
- [ ] **Arquivos de SEO**
  - Meta tags dinâmicas
  - Schema.org markup
  - Sitemap.xml
  - robots.txt

#### **IMPOSSÍVEL INICIAR SEM FASE 4 VALIDADA**

---

## ⚠️ Regras de Validação

### **REGRA 1: Arquivos .md são documentação, NÃO entregas de fase**
- Wireframes em markdown = em andamento
- Componentes em HTML/JSX/React = entregue

### **REGRA 2: Verificar existência de arquivos reais**
Antes de marcar qualquer fase como concluída:
```bash
# Script de validação automática
./scripts/validate-phase-deliverables.sh
```

### **REGRA 3: Check-git-status**
```bash
# Verificar commits de entrega por perfil
git log --oneline --since="24h" --author="Designer"
git log --oneline --since="24h" --author="Editor"
```

---

## 📊 Score de Validação

| Critério | Pontos | Status Atual |
|----------|--------|--------------|
| Design System (CSS) | 5 | ✅ |
| Brand Direction | 5 | ✅ |
| Componentes HTML/TSX | 15 | ❌ |
| Wireframes validados | 10 | ✅ |
| Index.html funcional | 10 | ❌ |
| SEO básico | 5 | ⚠️ |
| **Total Fase 3** | **50** | **REPROVADO** |

---

## 🔄 Correção Imediata

### Ações tomadas:
1. ✅ **STATE.md corrigido** - Status atualizado com realidade
2. ✅ **Protocolo criado** - VALIDAÇÃO OBRIGATÓRIA antes de avançar
3. 🔄 **Fase 4 reiniciada** - Designer deve entregar componentes realistas

### Próximos passos:
1. Designer entrega componentes React/HTML
2. Validação automática passa no script
3. Estado atualizado com evidências
4. Fase 4 marcada como concluída
5. Fase 5 iniciada com Editor
6. Fase 6 (Development) pode começar

---

**Assinatura:** Protocolo implementado 2026-11-08
**Validação futura:** Obrigatória para todas as fases