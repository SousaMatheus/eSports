//JSX = javascript + HTML
//npm run dev
//todas importacoes de css passam por js. o vite adiciona sozinho uma tag link no index.html
//adicionar tailwind. apos npx tailwind init -pd
//usar className no react
//map percorre um array e retorna algo

import './styles/main.css'
import logo from './assets/logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/Input'

function App() {
  interface Game {
    bannerUrl: string
    id: string
    title: string
    _count: {
      ads: number
    }
  }
  //retorna o nome da variavel e uma funcao pra atualizar o valor da variavel(renderiza novamente o componente)
  const [games, setGames] = useState<Game[]>([]) //do tipo vetor de GameProps

  //funcao q recebe dois parametros, primeiro qual funcao vai executar, segundo um array indica quando quer executar
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json()) //retorna uma promise
      .then(data => {
        setGames(data)
      })
  }, [])
  //caso o array de dependencias fique vazio, o codigo sera executado apenas uma vez, idependente de o estado mudar

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo NLW" />
      <h1 className="font-black text-6xl text-white mt-20">
        Seu{' '}
        <span className="text-transparent bg-duoGradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id} //key para evitar renderizar caso haja modificacao
              image={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='fixed bg-black/60 inset-0' />

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25 shadow-lg'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                  <Input placeholder='Selecione o game que deseja jogar '/>
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="">Seu nome (ou nickname) </label>
                  <Input id='name' placeholder='Como te chamam dentro do game?'/>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlayng">Joga há quantos anos?</label>
                    <Input id='yearsPlayng' type="number" placeholder='Tudo bem ser ZERO'/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord">Qual seu discord?</label>
                    <Input id='discord' type="text" placeholder='Usuario#0000'/>
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label id='weekDays' htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className='grid grid-cols-4 gap-1'>
                      <button 
                      title='Domingo'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >D
                      </button>
                      <button 
                      title='Segunda'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >S
                      </button>
                      <button 
                      title='Terca'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >T
                      </button>
                      <button 
                      title='Quarta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >Q
                      </button>
                      <button 
                      title='Quinta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >Q
                      </button>
                      <button 
                      title='Sexta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >S
                      </button>
                      <button 
                      title='Sabado'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >S
                      </button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart">Qual horário do dia? </label>
                    <div className='grid grid-cols-2 gap-2'>
                    <Input id='hourStart' type="time" placeholder='De'/>
                    <Input id='hourEnd' type="time" placeholder='Até'/>
                    </div>
                  </div>                  
                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <Input type="checkbox" />
                  <label id='useVoiceChannel' htmlFor="useVoiceChannel">Costumo me conectar ao chat de voz</label>
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close 
                  className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                  >Cancelar
                  </Dialog.Close>
                  <button 
                  type='submit' 
                  className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'> 
                    <GameController className='w-6 h-6'/>
                    Encontrar duo
                  </button>
                </footer>

              </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
