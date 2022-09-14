import express from 'express'
//importacao do tipo ecmascript modules

const app = express()
//criando aplicacao com uma funcao

//rota e funcao q sera executada. req e res sao do express
app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anuncio 1' },
    { id: 2, name: 'Anuncio 2' }
  ])
  //retornar objeto usando chaves,
})

//ouvir novas requisicoes ate solicitar parada(ctrl+c)
app.listen(3333)

//node nao entende typescript so javascript, por isso usar apenas no desenvolvimento npm i typescript -D