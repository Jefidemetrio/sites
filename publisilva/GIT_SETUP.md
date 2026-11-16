# Configuração Git para Publisilva Website

Para inicializar o repositório local:

```bash
cd /opt/data/publisilva
git init
git add index.html README.md
git commit -m "Initial commit: Publisilva website"
```

Para adicionar repositório remoto:

```bash
git remote add origin <URL_DO_REPOSITORIO>
git branch -M main
git push -u origin main
```