import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import CadastroUsuario from "./componentes/CadastroUsuario";
import Conteudo from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";
import TelaLogin from "./componentes/TelaLogin";

function App() {
  return (
    <div className="App">
      <Cabecalho title="Favio" />
      <main>
        <h2>O melhor gerenciador de favoritos do Brasil.</h2>
      </main>
      {/* <Conteudo /> */}
      <TelaLogin />
      <CadastroUsuario />

      <Rodape />
    </div>
  );
}

export default App;
