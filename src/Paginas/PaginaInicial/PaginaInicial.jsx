import { useState } from "react";
import BarraPesquisa from "../../Componentes/Barra/BarraPesquisa";
import Principal from "../../Componentes/Principal/Principal";
import "./PaginaInicial.css";
import BotaoCustomizado from "../../Componentes/BotaoCustomizado/BotaoCustomizado";

function PaginaInicial() {
  const [publiReview, setPublireview] = useState("")
  const [review, setReview] = useState([])
  
  const publicarReview = () => {
    if(publiReview.trim()) {
      const novaReview = {id: Date.now(), view: publiReview}
      const reviewsAtualizada = [...review, novaReview]
      setReview(reviewsAtualizada)
      setPublireview("")
      alert("Funcionando")
    }
    else{
      alert("Escreve algo ai")
    }
  }

  const apagarReview = () => {
    
  }

  return (
    <Principal titulo="Reviews">
      <input
      className="input_pagReview" 
      label="Review"
      type="text"
      value={publiReview}
      onChange={(e) => setPublireview(e.target.value)}
      />
      <BotaoCustomizado tipo="primario" aoClicar={publicarReview}>Publicar</BotaoCustomizado>
        
        {review.map((item) => {
          return <div key={item.id}>
            {item.view}
          </div>
        })}
    </Principal>
  );
}

export default PaginaInicial;
