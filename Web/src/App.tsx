//JSX = javascript + HTML 
//npm run dev
//todas importacoes de css passam por js. o vite adiciona sozinho uma tag link no index.html
//adicionar tailwind. apos npx tailwind init -pd
//usar className no react

import './styles/main.css';
import logo from './assets/logo.svg';

function App() {
  return ( 
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo NLW" />
      <h1 className='font-black text-6xl text-white mt-20'>
        Seu <span className='text-transparent bg-duoGradient bg-clip-text'>duo</span> está aqui.</h1>
        <div className='grid grid-cols-6 gap-6 mt-16'>
          <a href="">
            <img src="/image 1.png" alt="" />
          </a>
          <a href="">
            <img src="/image 2.png" alt="" />
          </a>
          <a href="">
            <img src="/image 3.png" alt="" />
          </a>
          <a href="">
            <img src="/image 5.png" alt="" />
          </a>
          <a href="">
            <img src="/image 6.png" alt="" />
          </a>
          <a href="">
            <img src="/image 7.png" alt="" />
          </a>
        </div>
    </div>
  )
}

export default App
