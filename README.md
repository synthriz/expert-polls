# Expert Polls
Este projeto oferece uma plataforma onde os usuários podem criar enquetes, votar nas opções e acompanhar os resultados em tempo real. Utilizando Node.js para gerenciar as requisições e a lógica do servidor, os dados das enquetes são armazenados em um banco de dados PostgreSQL, com a inserção e manipulação dos dados sendo feitas através do Prisma ORM. Para garantir performance e escalabilidade, o número de votos é gerido pelo Redis, que facilita o armazenamento rápido e eficiente das contagens. A atualização dos resultados é feita em tempo real via WebSockets, permitindo que os usuários visualizem instantaneamente as mudanças nas classificações das enquetes.

## ⚙️ Funcionalidades
- Criação de Enquetes: Usuários podem criar enquetes com várias opções de resposta por <code>POST /polls.</code>
- Votação: Permite que os usuários votem em uma das opções de uma enquete por <code>POST /polls/:pollId/votes.</code>
- Resultados em Tempo Real: As classificações das enquetes são atualizadas instantaneamente via WebSockets.
- Armazenamento Persistente: Enquetes e votos são salvos no banco de dados PostgreSQL.
- Desempenho: A contagem de votos é gerida de forma eficiente com Redis.
- Consulta de Enquetes: Resultados e detalhes das enquetes podem ser acessados por <code>GET /polls/:pollId.</code>

## 🛠️ Tecnologias Utilizadas:
- Node.js
- Typescript
- Redis
- PostgreSQL
- Prisma
- WebSockets
- Fastify

## Preview
![Untitled](https://github.com/user-attachments/assets/4bfe5d1c-b320-4c10-9e4c-09437d68b17f)
