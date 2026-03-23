# Prisma 7 + Express 5 — MVC

Projeto de estudo com Prisma 7 e Express 5 seguindo arquitetura MVC.

## Stack

- Node.js
- Express 5
- Prisma 7
- SQLite (via `better-sqlite3`)

## Estrutura

```
prisma/
  schema.prisma       # definição das tabelas
  migrations/         # histórico de alterações do banco
  dev.db              # banco de dados local
src/
  lib/
    prisma.js         # instância única do PrismaClient
  repositories/
    userRepository.js # queries do banco
  controllers/
    userController.js # lógica HTTP
  routes/
    userRoutes.js     # mapeamento de endpoints
server.js
prisma.config.ts      # configuração do CLI do Prisma
```

## Instalação

```bash
npm install
npx prisma generate
```

## Rodando

```bash
node server.js
```

Servidor sobe em `http://localhost:3000`.

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | /users | Lista todos os usuários |
| GET | /users/:id | Busca usuário por id |
| POST | /users | Cria usuário |
| PUT | /users/:id | Atualiza usuário |
| DELETE | /users/:id | Deleta usuário |

## Migrations

```bash
# Criar nova migration após alterar o schema.prisma
npx prisma migrate dev --name descricao_da_mudanca

# Visualizar o banco graficamente
npx prisma studio
```

## Observações

- O Prisma 7 exige um driver adapter para SQLite — por isso o `better-sqlite3`
- O `prisma.config.ts` é lido apenas pelo CLI (`npx prisma ...`), não pelo servidor em execução
- O `src/lib/prisma.js` centraliza a conexão para evitar múltiplas instâncias do `PrismaClient`
