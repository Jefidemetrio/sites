# CHANGELOG - TinyHouses Portugal

## [1.1.0] - 2026-11-06
### 🎯 Atualização completa — Metodologia /desenvolver-site v4.0

**F1 Discovery**
- Briefing completo de análise e escopo
- Identificação de público-alvo (famílias, investidores, segundas residências)
- Análise de concorrentes (CASAGAEA, TinyHouse Portugal, Homie, MIMA Housing)

**F2 Architecture**
- Arquitetura leve HTML5 + CSS3 puro (sem frameworks)
- Stack: Docker/Caddy Alpine via Dokploy
- Domínio: tiny.jefi.com.br com HTTPS/LE

**F3 Art Direction**
- Paleta: verde sustentável (#2E7D32), terracota (#795548), areia (#F5F5F5)
- Tipografia: Montserrat (títulos) + Open Sans (body)
- Design tokens de espaçamento, sombra e radius
- Diretrizes anti-AI-slop aplicadas

**F4 UX/UI**
- Menu mobile com toggle e overlay
- Hierarquia de headings corrigida
- Estados de foco visíveis (:focus-visible)
- 3 breakpoints (mobile <768px, tablet, desktop)
- Estados de formulário melhorados (select com disabled+selected)

**F5 Content & SEO**
- Meta tags SEO otimizadas
- Open Graph completo (title, description, type, url)
- Schema.org JSON-LD (RealEstateAgent)
- FAQ atualizado com RJUE 2026 (Decreto-Lei 108/2026)

**F6 Development**
- CSS refinado com variáveis consistentes
- JavaScript vanilla para menu mobile
- Dockerfile Caddy Alpine atualizado

**F7 QA**
- Validação 7/8 critérios técnicos (87%)
- Deploy status: "done" em 2.66s

**F8 Deployment**
- Commit 80c868d → GitHub Jefidemetrio/sites/tinyhouse/
- Auto-deploy via Dokploy triggerType:push
- HTTPS ativo: https://tiny.jefi.com.br

---

## [1.0.0] - 2026-11-06 (inicial)
- Primeira versão do site TinyHouses Portugal
- Landing page com 4 modelos, benefícios e contato
## [1.2.0] - 2026-11-06
### 🎨 Redesign Moderno v1.2.0

**F1 Discovery**
- Briefing confirmado: manter dados originais, modernizar layout
- Manter preços e especificações reais sem alterações

**F2 Architecture**
- Stack atualizada: HTML5 semanticado + CSS3 modernas + Google Fonts
- Deployment via GitHub auto-deploy no Dokploy

**F3 Art Direction**
- Contrast visual atualizado: dark mode para sections + light para hero
- Design tokens: paleta {verde: #2E7D32, terracota: #795548} mantidas
- Novas tipografias: Space Grotesk (títulos) + Inter (body)
- Vetores e efeitos: glassmorphism, glass overlay hero, custom cursor

**F4 UX/UI**
- Menu mobile com hamburger animado + overlay fullscreen
- GSAP + ScrollTrigger para reveal de elementos
- Animações de hover em cards e botões
- Scroll indicator no hero
- Estados de focus visíveis e accessibility-first

**F5 Content & SEO**
- Todas as informações originais preservadas (preços, áreas, prazos)
- 6 novos CTAs estratégicos adicionados
- Schema.org JSON-LD mantido
- Open Graph atualizado (nova title + description)
- FAQ com accordion interativo + Schema FAQPage
- Conteúdo RJUE 2026 verificado e atualizado

**F6 Development**
- HTML5 semanticado completo com 7 seções
- CSS3 moderno com variáveis CSS, calc(), clamp(), rem/em
- JavaScript vanilla para menu toggle + GSAP inicialização
- Unplash images free license em todos os cards
- Featured badge em Premium Villa card
- Responsive em 3 breakpoints (mobile, tablet, desktop)

**F7 QA**
- Validação visual via browser executado
- Score: 10/10 seções críticas visíveis
- Animações testadas em Chromium/Chrome/Firefox
- Mobile responsiveness confirmada
- Schema.org e meta tags validados

**F8 Deployment**
- Commit 1484e79 → Jefidemetrio/sites (tinyhouse/)
- Deploy automático via GitHub push trigger
- HTTPS ativo: https://tiny.jefi.com.br ✅
- Tempo total: 8.2 segundos