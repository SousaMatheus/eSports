//JSX = javascript + HTML 
//npm run dev
//todas importacoes de css passam por js. o vite adiciona sozinho uma tag link no index.html
//adicionar tailwind. apos npx tailwind init -pd
//usar className no react

import './styles/main.css';
import logo from './assets/logo.svg';
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return ( 
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo NLW" />
      <h1 className='font-black text-6xl text-white mt-20'>
        Seu <span className='text-transparent bg-duoGradient bg-clip-text'>duo</span> está aqui.</h1>

        <div className='grid grid-cols-6 gap-6 mt-16'>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/image 1.png" alt=""/>
            <div className='w-full pt-16 pl-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white'>League of Legends</strong>
              <span className='text-zinc-300  text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/image 2.png" alt="" className='relative' />
            <div className='w-full pt-16 pl-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white'>Dota</strong>
              <span className='text-zinc-300  text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/image 3.png" alt="" className='relative' />
            <div className='w-full pt-16 pl-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white'>Counter-Strike</strong>
              <span className='text-zinc-300  text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/image 5.png" alt="" className='relative' />
            <div className='w-full pt-16 pl-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white'>Apex Legends</strong>
              <span className='text-zinc-300  text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/image 6.png" alt="" className='relative' />
            <div className='w-full pt-16 pl-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white'>Fortnite</strong>
              <span className='text-zinc-300  text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/image 7.png" alt="" className='relative' />
            <div className='w-full pt-16 pl-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white'>World of Warcraft</strong>
              <span className='text-zinc-300  text-sm block'>4 anúncios</span>
            </div>
          </a>
        </div>
        <div className='bg-duoGradient self-stretch mt-8 pt-1 overflow-hidden rounded-lg'>
          <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
            <div className='inline'>
              <strong className='text-white block text-2xl font-black'>Não encontrou seu duo?</strong>
              <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
            </div>
            <div>
              
              <button className='flex items-center gap-3 text-white bg-violet-500 hover:bg-violet-600 px-4 py-3 rounded-md justify-between'>
                 <MagnifyingGlassPlus size={24}/>
                 Publicar anúncio
                 </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
