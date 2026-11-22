import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import "./Principal.css";

function Principal(props) {
 return (
    <main className="Principal_root">
      <div className="Principal_titulo">
     
        <h2>{props.titulo}</h2>
      </div>

      {props.children}
    </main>
  );
}

export default Principal;
