# Guia de Entrega - Fase 3: Art Direction

## 📋 O QUE ENTREGAR (REQUIRED DELIVERABLES)

### 1. Componentes React/HTML (OBRIGATÓRIO)
**Pelo menos 8 arquivos:**

```
/components/
├── HeroSection.tsx          # Hero com segment selection
├── ServiceCard.tsx          # Card de serviço individual
├── CompanyCard.tsx          # Card de empresa da holding
├── CaseStudy.tsx            # Estudo de caso antes/depois
├── ProcessSteps.tsx         # 4 passos do processo
├── Navigation.tsx           # Menu multicanal
├── CTAButton.tsx            # Botão CTA contextualizado
└── Footer.tsx               # Rodapé responsivo
```

### 2. Páginas Principais
**Pelo menos 5 páginas HTML/TSX:**

```
/pages/
├── index.tsx           # Página inicial (home)
├── services.tsx        # Lista de serviços
├── companies.tsx       # Todas as empresas
├── cases.tsx           # Casos de sucesso
└── contact.tsx         # Contato
```

### 3. Integração com Design System
Todos os componentes devem usar:
- Cores de `variables.css`
- Tipografia de `typography.css`
- Espaçamento do sistema 8pt
- Raadios padrão: 0.375rem

---

## 🖼️ REFERÊNCIAS VISUAIS

### Wireframes Documentados
- `/phase4-wireframes/home-wireframe.md` - Layout home
- `/phase4-wireframes/front-page-wireframe.md` - Páginas de front
- `/phase4-wireframes/services-wireframe.md` - Serviços
- `/phase4-wireframes/cases-wireframe.md` - Casos
- `/phase4-wireframes/contact-wireframe.md` - Contato

### Demo de Referência
`/design-system/demo.html` - Exemplo completo de implementação

---

## ✅ CRITÉRIOS DE ACEITAÇÃO

Para validar a fase, execute:
```bash
./scripts/validate-phase-deliverables.sh 3
```

**Score mínimo: 90/100**

Critérios:
- [x] files existentes (já criados)
- [ ] **Componentes React/TSX ≥ 8**
- [ ] **Páginas implementadas ≥ 5**
- [ ] Integração com design system
- [ ] HTML válido sem errors
- [ ] Responsividade implementada

---

## 🔗 CONEXÃO COM FASE 4

**Fase 4 (UX/UI) só pode começar quando:**
- [ ] Phase 3 score ≥ 90
- [ ] .phase3-validated file criado
- [ ] index.html atualizado com designs finais

---

## ⏰ PRAZO

**Entrega esperada:** Até o final do dia útil
**Validação:** Automática via script
**Aprovação:** Gerente-web verifica e atualiza STATE.md

---

**Instruções:** Salvar este guia em `deliverables-instructions.md` e entregar junto com os arquivos.