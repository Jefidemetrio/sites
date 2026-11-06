# ARQUITETURA TÉCNICA - TinyHouses Portugal

## Visão Geral
Arquitetura leve e performática para landing page de captação de leads para tiny houses.

## Sitemap

tinyhouse.pt/
├── / (Home) - Landing page principal
│   ├── Hero Section
│   ├── Benefícios
│   ├── Modelos (4 modelos)
│   ├── Processo (6 passos)
│   ├── Sustentabilidade
│   ├── FAQ
│   └── Contato
├── #modelos (Âncora)
├── #beneficios (Âncora)
├── #sustentabilidade (Âncora)
└── #contato (Âncora)

## Estrutura de Arquivos Atual

/opt/data/sites/tinyhouse/
├── index.html         (Landing page principal)
├── style.css          (Estilos CSS)
├── content-structure.md (Conteúdo de referência)
├── Dockerfile         (Para deploy)
├── PROJECT.md         (Documentação do projeto)
├── STATE.md           (Estado do projeto)
└── DISCOVERY_BRIEFING.md (Briefing de Discovery)

## Stack Tecnológica

### Frontend
- HTML5 semântico
- CSS3 puro (sem frameworks)
- JavaScript vanilla (opcional para interações)
- Google Fonts (Montserrat, Open Sans)

### Tecnologias de Apoio
- Hospedagem: Dokploy (Docker)
- Domínio: tinyhouse.pt (ou subdomínio)
- Analytics: Google Analytics (opcional)

### Vantagens da stack
✓ Sem dependências de build
✓ Carregamento instantâneo
✓ Fácil manutenção
✓ Compatibilidade total
✓ SEO nativo

## Funcionalidades

### Implementadas
[✓] Hero section com CTAs
[✓] Grid de benefícios
[✓] Tabela de modelos
[✓] Processo em 6 passos
[✓] Seção de sustentabilidade
[✓] FAQ expansível
[✓] Formulário de contato
[✓] Footer com navegação
[✓] Menu sticky
[✓] Responsividade

### Melhorias Necessárias
[ ] Otimização de imagens
[ ] Schema markup (JSON-LD)
[ ] Open Graph tags
[ ] Form validation melhorado
[ ] Acessibilidade (ARIA)
[ ] Performance optimization
[ ] Analytics tracking

## Requisitos SEO

### On-Page SEO
- Title tag otimizado: "Tiny Houses Portugal | Casas Modulares Sustentáveis desde €45.000"
- Meta description com call-to-action
- Headings hierárquicos (H1, H2, H3)
- Alt tags para imagens
- Schema Organization + Product
- Sitemap XML (quando tiver múltiplas páginas)
- Robots.txt

### Palavras-chave Primárias
- tiny houses portugal
- casas modulares
- casas sustentabilidade
- casas a medida portugal

### Palavras-chave Secundárias
- construção rápida
- casas econômicas
- habitação sustentável
- casas móveis

## Requisitos Acessibilidade

### WCAG 2.1 Level AA
- Contraste de cores mínimo 4.5:1
- Navegação por teclado
- Labels para formulários
- Alt text para imagens
- Estrutura semântica
- Focus indicators

## Performance

### Objetivos
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Time to Interactive < 3s

### Otimizações
- CSS crítico inline
- Imagens otimizadas (WebP)
- Lazy loading
- Minificação CSS/HTML
- Cache headers
- CDN para assets

## Integrações

### Nenhuma integração crítica
- Formulário envia para email (server-side)
- WhatsApp link direto
- Sem dependência de API externa

## Modelo de Dados

### Conteúdo
- Modelos (nome, área, pessoas, preço, descrição)
- Benefícios (ícone, título, descrição)
- FAQs (pergunta, resposta)
- Informações de contato

### Sem banco de dados
- Conteúdo estático
- Atualizações manuais via HTML/CSS

## Hosting

### Dokploy Deployment
- Docker container
- Domínio configurável
- SSL automático
- Auto-deploy via Git

### Estrutura Dockerfile
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

## Segurança
- HTTPS obrigatório
- Headers de segurança básicos
- Sanitização de inputs do formulário
- Proteção contra XSS
- CSP headers básicos

## Cronograma Estimado
- Design/Arquitetura: 4h
- Desenvolvimento: 8h
- QA: 2h
- Deploy: 1h
