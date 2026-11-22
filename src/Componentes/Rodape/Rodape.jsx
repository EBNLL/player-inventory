import "./Rodape.css";
import { GrGamepad } from "react-icons/gr";
import { FaHouse } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
function Rodape() {
  const navigate = useNavigate();

  return <footer className="Rodape_root">
    <div className="icons">
      <FaHouse onClick={() => navigate("/ver-review")}/>
      <IoIosSearch />
      <GrGamepad  onClick={() => navigate("/")}/>
      <IoIosFlash />
      <CgProfile />
    </div>
  </footer>
}

export default Rodape;
