import { useEffect, useState } from "react";
import BarraPesquisa from "../../Componentes/Barra/BarraPesquisa";
import Principal from "../../Componentes/Principal/Principal";
import "./PaginaInicial.css";
import BotaoCustomizado from "../../Componentes/BotaoCustomizado/BotaoCustomizado";
import {
  buscarNoLocalStorage,
  salvarNoLocalStorage,
} from "../../Servicos/localstorage.servico";
import Rodape from "../../Componentes/Rodape/Rodape";
import { useNavigate, useParams } from "react-router-dom";

function PaginaInicial() {
  const navigate = useNavigate();
  const [publiReview, setPublireview] = useState("");
  const [review, setReview] = useState(buscarNoLocalStorage("reviews") || []);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const reviewParaEditar = review.find((item) => item.id === +params.id);

      if (reviewParaEditar) {
        setPublireview(reviewParaEditar.view);
      }
    }
  }, [params.id]);

  const publicarReview = () => {
    if (publiReview.trim()) {
      let reviewsAtualizadas;

      if (params.id) {
        reviewsAtualizadas = review.map((item) =>
          item.id === +params.id ? { ...item, view: publiReview } : item,
        );
      } else {
        const novaReview = {
          id: Date.now(),
          view: publiReview,
        };

        reviewsAtualizadas = [...review, novaReview];
      }

      setReview(reviewsAtualizadas);
      salvarNoLocalStorage("reviews", reviewsAtualizadas);

      setPublireview("");
      alert("Funcionando");
      navigate("/ver-review")
    } else {
      alert("Escreve algo ai");
    }
  };

  return (
    <>
      <Principal titulo="Reviews">
        <textarea
          className="input_pagReview"
          label="Review"
          type="text"
          value={publiReview}
          onChange={(e) => setPublireview(e.target.value)}
        />

        <BotaoCustomizado
          tipo="primario"
          aoClicar={publicarReview}
        >
          Publicar
        </BotaoCustomizado>
      </Principal>

      <Rodape />
    </>
  );
}

export default PaginaInicial;
