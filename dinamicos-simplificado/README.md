# Dinâmicos Simplificado

> Presença digital inteligente para empresas portuguesas

## 🎯 Objetivo
Site institucional minimalista para PMEs tecnológicas em Portugal, otimizado para **SEO Google + descoberta por agentes IA**.

## 🚀 Tech Stack
- **Frontend:** Astro 4.x (HTML estático otimizado)
- **Styling:** Tailwind CSS
- **CMS:** Directus (headless)
- **Hosting:** Dokploy (Docker)
- **Analytics:** Plausible (GDPR compliant)

## 📁 Estrutura do Projeto
```
dinamicos-simplificado/
├── src/pages/
│   ├── index.astro              # Homepage ✓
│   ├── sobre.astro              # Sobre ✓
│   ├── contato.astro            # Contato ✓
│   └── blog/                    # Blog (3 posts)
│
├── src/components/
│   └── Hero.astro               # Hero Component ✓
│
├── src/layouts/
│   └── Layout.astro             # Layout principal ✓
│
├── src/content/blog/            # Blog posts (3 artigos)
├── src/lib/directus.js          # Directus API client
│
├── Core Files
│   ├── Dockerfile             # Build multi-stage
│   ├── docker-compose.yml     # Docker services
│   ├── astro.config.mjs       # Config Astro + Sitemap
│   ├── package.json           # Dependências
│   └── .nvmrc                 # Node version 18
│
└── Documentation (9 arquivos)
    ├── README.md              # Este arquivo
    ├── DOKPLOY.yml            # Config deploy Dokploy
    ├── GUIDA-DE-ESTILO.md     # Art Direction (11KB)
    ├── AEO-GUIDE.md           # AI Engine Optimization
    ├── DIRECTUS-INTEGRATION.md  # Guia Directus
    ├── SITEMAP.md             # Mapa navegação
    └── CHANGELOG.md           # Histórico
```

## 📊 Páginas Criadas ✓
1. **Homepage** - Hero + serviços + CTA
2. **Sobre** - Missão + equipa + valores
3. **Contato** - Formulário de captação
4. **Blog** - 3 posts com FAQ e schema
5. **Legal** - privacidade + termos

## 🚀 Deploy no Dokploy

### Passo 1: Preparação Git
```bash
# 1. Inicializar repositório
git init
git add .
git commit -m "Initial commit - Dinâmicos site ready for deploy"

# 2. Push para GitHub
git remote add origin https://github.com/Jefidemetrio/sites.git
git push -u origin main
```

### Passo 2: Configurar Dokploy

**Repositório GitHub:** `Jefidemetrio/sites`  
**Branch:** `main`  
**Build Command:** `docker build -t dinamicos .`  
**Start Command:** `docker run -p 3000:3000 dinamicos`

### Passo 3: Variáveis de Ambiente
```env
NODE_ENV=production
DIRECTUS_URL=http://localhost:8055
DIRECTUS_TOKEN=your-token-here
SITE_URL=https://dinamicos.jefi.com.br
```

### Passo 4: Domínio
Configure no Dokploy:
- **Domain:** `dinamicos.jefi.com.br`
- **Port:** `3000`
- **SSL:** Auto-provisioned (Let's Encrypt)

### Passo 5: Deploy Automático
Dokploy detecta mudanças por webhook GitHub → Build Docker → Deploy

## 🔧 Desenvolvimento Local
```bash
# 1. Usar Node 18
nvm use

# 2. Instalar dependências
npm install zod @astrojs/sitemap @directus/sdk

# 3. Iniciar servidor
npm run dev

# 4. Acessar em http://localhost:3000
```

### Build para Produção
```bash
npm run build
npm run preview  # Testar build local
```

## 🐳 Docker Commands
```bash
# Build
docker build -t dinamicos .

# Run local
docker run -p 3000:3000 dinamicos

# Docker Compose
docker-compose up -d
```

## 📈 Métricas Técnicas
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- SEO Score > 95 (Lighthouse)
- Taxa de citação em AI Overviews > 3x

## 📝 Progresso Atual
✅ Discovery, Architecture, Art Direction, UX/UI
✅ 3 páginas principais
✅ 3 posts de blog
✅ Sistema de conteúdo Astro
✅ Schema AEO implementado
✅ Dockerfile + Docker Compose
✅ Dokploy configuration

**Próximos:**
1. Deploy no Dokploy
2. Configurar Directus Cloud
3. Integrar newsletter
4. Configurar analytics