//importacao do tipo ecmascript modules
import express, { response } from 'express';
import { PrismaClient } from '@prisma/client'
import {convertHourStringToMinutes} from './utils/convert-hours-string-to-minutes'
import {convertMinutesStringToHour} from './utils/convert-minutes-string-to-hour'
import cors from 'cors'

const app = express()
const prisma = new PrismaClient()
app.use(express.json()) //permite entender json
app.use(cors())
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
app.post('/game/:id/ads', async (resquest, response) => {
  const gameId = resquest.params.id;
  const body: any = resquest.body;

  const ad = await prisma.ad.create({
    data : {
      gameId,
      name : body.name,
      yearsPlaying : body.yearsPlaying,
      discord : body.discord,
      weekDays : body.weekDays.join(','),
      hourStart : convertHourStringToMinutes(body.hourStart),
      hourEnd : convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel : body.useVoiceChannel,
    }
  })

  return response.status(201).json(ad);
})

//Listagem de anúncios por game / ads by game
//route params, : para identificar q é dinamico
app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select : {
      id : true,
      name : true,
      gameId : true,
      yearsPlaying : true,
      weekDays : true,
      hourStart : true,
      hourEnd : true,
      useVoiceChannel : true,
    },
    where : {
      gameId,
    },
    orderBy : {
      createdAt : 'desc'
    }
  })
  return response.json(ads.map(ad =>{
    return {
      ...ad, //spread operator, todos os dados de ads
      weekDays : ad.weekDays.split(','),
      hourStart : convertMinutesStringToHour(ad.hourStart),
      hourEnd : convertMinutesStringToHour(ad.hourEnd),
    }
  }));
})

//Buscar discord pelo ID do anúncio / discord by ad
app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select :{
      discord : true,
    },
    where : {
      id : adId,
    }
  })
  return response.json(ad)
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
//npm i cors protege o backend
//npm i @types/cors