# Sitemap - Dinâmicos Simplificado

## Páginas Principais

### `/` - Home
- Hero section com headline + CTA principal
- Serviços preview (3 cards)
- Social proof (logos clientes)
- Seção "Sobre" resumida
- Artigos recentes do blog
- Footer completo

### `/servicos/` - Listagem de Serviços
- Grid de serviços oferecidos
- Links para páginas individuais (se houver)

### `/servicos/{slug}/` - Página Individual de Serviço
- Detalhamento do serviço
- Benefícios
- Caso de sucesso/proof
- CTA contextual

### `/sobre/` - Sobre a Empresa
- Missão, visão, valores
- História da empresa
- Equipe (fotos + funções)
- Diferenciais competitivos

### `/blog/` - Lista de Artigos
- Grid de posts recentes
- Filtros por categoria/seletor
- Paginação ou infinite scroll

### `/blog/{slug}/` - Artigo Individual
- Título, meta descrição, autor, data
- Conteúdo formatado
- Posts relacionados
- CTA newsletter
- JSON-LD Article schema

### `/contato/` - Formulário de Contato
- Formulario: nome, email, empresa, mensagem
- Informações de contato (telefone, email, endereço)
- Mapa embedado (opcional)
- Horarios de atendimento

### `/privacidade/` - Política de Privacidade
- Texto legal obrigatório (GDPR)

### `/termos/` - Termos de Uso
- Termos legais do site

---

## Estrutura de Navegação
```
Home
├── Serviços
│   ├── Serviço 1
│   ├── Serviço 2
│   └── Serviço 3
├── Sobre
├── Blog
│   └── Post 1, Post 2, Post 3...
└── Contato
```

## SEO URLs
- Limpas, em português
- Sem parâmetros desnecessários
- Hierarquia lógica (max 3 níveis)

Exemplos:
- `/servicos/criacao-de-sites-para-pmes`
- `/blog/como-selecionar-uma-agencia-web`

## Meta Pages (Header/Footer)
- Não aparecem no menu principal
- `/privacidade`, `/termos`, `/sitemap.xml`, `/robots.txt`