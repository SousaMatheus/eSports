//JSX = javascript + HTML 
//npm run dev
//componentes|Propriedades
interface BotaoProps{
  title : string;
}

function Botao(props : BotaoProps){
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Botao title="botao 1" />
      <Botao title="botao 2" />
      <Botao title="botao 3" />
      <Botao title="botao 4" />
    </div>
  )
}

export default App
