import "./BarraPesquisa.css";

function BarraPesquisa(props) {
  return (
    <div className="Barra_root">
      <span>{props.label}</span>
      <input {...props} className="Barra_input" />
    </div>
  );
}

export default BarraPesquisa
