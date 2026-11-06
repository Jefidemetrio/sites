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