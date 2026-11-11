import { useState } from "react";
import "./App.css";
import Cabecalho from "./Componentes/Cabecalho";
import Roteador from "./Roteador";
import Rodape from "./Componentes/Rodape";


function App() {
    return(
    <>
    <Cabecalho />
    <Roteador />
    <Rodape />
    </>
    )
}

export default App;
