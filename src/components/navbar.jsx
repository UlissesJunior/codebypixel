import React from "react";
import Logo from "../img/Logo.svg";
import Language from "../img/Language.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>
        <div className="nav-center">
          <Link to="/projetos"><ul>Projetos</ul></Link>
          <Link to="/contato"><ul>Contato</ul></Link>
          <Link to="/sobre"><ul>Sobre</ul></Link>
        </div>
        <div className="nav-right">
          <img src={Language} alt="Language" />
        </div>
      </div>
    </>
  );
}

export default Nav;
