import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Principal from "../../../Componentes/Principal/Principal";
import Rodape from "../../../Componentes/Rodape/Rodape";
import "./PaginaVerReview.css";

import {
  buscarNoLocalStorage,
  salvarNoLocalStorage,
} from "../../../Servicos/localstorage.servico";

import { MdEdit, MdDelete } from "react-icons/md";
import BarraPesquisa from "../../../Componentes/Barra/BarraPesquisa";

function PaginaVerReview() {
  const navigate = useNavigate();

  const [review, setReview] = useState(buscarNoLocalStorage("reviews") || []);

  const [termoPesquisa, setTermoPesquisa] = useState("");

  const excluirReview = (reviewParaExcluir) => {
    if (confirm("Deseja excluir a review?")) {
      const reviewsAtualizados = review.filter(
        (item) => item.id !== reviewParaExcluir.id,
      );

      setReview(reviewsAtualizados);
      salvarNoLocalStorage("reviews", reviewsAtualizados);
    }
  };

  const editarReview = (reviewParaEditar) => {
    navigate("//" + reviewParaEditar.id);
  };

  const reviewsFiltrados = review.filter((item) => {
    return item.view.toLowerCase().includes(termoPesquisa.toLowerCase());
  });

  return (
    <>
      <Principal titulo="Review Publicada">
        <BarraPesquisa
          type="search"
          placeholder="Pesquisar review"
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
        />

        {reviewsFiltrados.map((item) => (
          <div key={item.id} className="Review_item">
            <p>{item.view}</p>

            <div className="Review_acoes">
              <MdEdit size={24} onClick={() => editarReview(item)} />

              <MdDelete
                size={24}
                color="red"
                onClick={() => excluirReview(item)}
              />
            </div>
          </div>
        ))}
      </Principal>

      <Rodape />
    </>
  );
}

export default PaginaVerReview;
