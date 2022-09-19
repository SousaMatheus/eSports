//importacao do tipo ecmascript modules
import express, { response } from 'express';

import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
//HTTP methods / API RESTful / HTTP Codes
//2 - Sucesso 3- Redir 4 - Erro 5 - inesperados
//GET(buscar), POST(Criar), PUT(Editar por completo)
//PATCH (Editar simples), DELETE (Remover entidade)

/* Params
QUERY ... atraves de ?, usado para persistir estado, filtros, ordenacao,    paginacao, ficam disponiveis da URL, NUNCA ENVIAR SENHAS. Sempre sao nomeados
ROUTE ... são enviados na URL mas não são nomeados, usados para idetifacar um recurso na API
BODY ... para enviar varias informações, geralmente um formulário
*/

//- Listagem de games com contagem de anúncios
app.get('/games', async (resquest, response) => {
  const games = await prisma.game.findMany({
    include : {
      _count: {
        select:{
          ads:true,
        }
      }
    }
  })
  return response.json(games);
})

//- Criação de novo anúncio
app.post('/ads', (resquest, response) => {
  return response.json([]);
})

//Listagem de anúncios por game
//route params, : para identificar q é dinamico
app.get('/games/:id/ads', (request, response) => {
  const id = request.params.id;
  return response.send(id);
  return response.json([
    { id: 1, name: 'Anuncio 1' },
    { id: 2, name: 'Anuncio 2' },
    { id: 3, name: 'Anuncio 3' }
  ])
  //retornar objeto usando chaves,
})

//Buscar discord pelo ID do anúncio
app.get('/ads/:id/discord', (request, response) => {
  const adId = request.params.id;
  return response.json([])
})

//ouvir novas requisicoes ate solicitar parada(ctrl+c)
app.listen(3333)

//node nao entende typescript so javascript, por isso usar apenas no desenvolvimento npm i typescript -D
//criar um script um build de tsc no json
//criar arquivo de configuracao do ts npx tsc --init
//rodar aplicacao tsc npm run build(cria o arquivo js)
//instalar dependencia do express @types/express
//ferramenta para sincronizar o node com o ts npm i ts-node-dev -D

//npm run dev - roda o node com restart automatico 
//npm i prisma -D >> npx prisma init - h (documentacao)
//para acessar a bd npm i @prisma/client
//npx prisma generate cria os tipos das tabelas e metodos

