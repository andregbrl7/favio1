import logo from './logo.svg';
import './App.css';
import Rodape from './componentes/componentes/Rodape';
import Cabecalho from './componentes/componentes/Cabecalho';
import Conteudo, { Olamundo } from './componentes/Conteudo';


function App() {

Olamundo();
  return (
    <div className="App">

   <Cabecalho logo="logo192.png" titulo="Favio.io" subtitulo="O melhor gerenciador de favoritos do Brasil"/>
   <Conteudo/> 
   <Rodape/>
    </div>
  );
}

export default App;
