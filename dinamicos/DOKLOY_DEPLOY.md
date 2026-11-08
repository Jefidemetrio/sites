# 🚀 Deploy no Dokploy - Dinamicos.pt

## 📋 Pré-requisitos

1. Dokploy instalado e rodando
2. Docker e Docker Compose
3. Domínio apontando para o servidor Dokploy (opcional)

## 🔧 Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
# PostgreSQL
POSTGRES_USER=dinamicos
POSTGRES_PASSWORD=sua senha segura aqui
POSTGRES_DB=dinamicos

# Directus
DIRECTUS_KEY=sua-chave-aleatoria-32-caracteres-aqui
DIRECTUS_SECRET=seu-secret-aleatorio-32-caracteres-aqui
ADMIN_EMAIL=admin@dinamicos.pt
ADMIN_PASSWORD=senha-do-admin

# Next.js
NEXT_PUBLIC_SITE_URL=https://dinamicos.pt
NEXT_PUBLIC_DIRECTUS_URL=http://directus:8055
DIRECTUS_TOKEN=seu-token-de-acesso-directus
```

### 2. Deploy no Dokploy

1. Acesse o painel do Dokploy
2. Clique em **"New Project"**
3. Selecione **"Docker Compose"**
4. Conecte via Git ou faça upload manual
5. Cole o conteúdo do `.env`

### 3. Serviços Criados

| Serviço | Porta | Descrição |
|---------|-------|-------------|
| `postgres` | 5432 | Banco de dados PostgreSQL |
| `directus` | 8055 | CMS Headless |
| `web` | 3000 | Frontend Next.js |

### 4. Pós-Deploy

1. Acesse `http://localhost:8055/admin` para configurar o Directus
2. Importe os collections via `directus/migrations/001_initial_schema.sql`
3. Configure o admin user
4. Adicione conteúdo inicial

## 🌐 Configuração de Domínio

Para usar domínio customizado:

1. Ajuste as variáveis:
```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.pt
```

2. Configure o nginx no Dokploy (se aplicável)

## 🔄 Atualizações

```bash
git pull origin main
# Recriar containers no Dokploy
```

## 📊 URLs Úteis

- **Frontend:** `http://localhost:3000`
- **Admin Directus:** `http://localhost:8055`
- **Healthcheck:** `http://localhost:3000`

## 🛠️ Troubleshooting

**Problem: Directus não inicia**
- Verifique as variáveis de ambiente
- Execute `docker compose logs directus`

**Problem: Frontend não carrega**
- Verifique `DIRECTUS_TOKEN`
- Execute `docker compose logs web`

**Problem: Banco de dados vazio**
- Acesse PostgreSQL e execute o script de migração