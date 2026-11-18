import { useState } from "react";
import "./App.css";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Roteador from "./Roteador";
import Rodape from "./Componentes/Rodape/Rodape";
import Barra from "./Componentes/Barra/BarraPesquisa";

function App() {
  return (
    <>
      <Cabecalho />
      <Roteador />
      <Rodape />
    </>
  );
}

export default App;
