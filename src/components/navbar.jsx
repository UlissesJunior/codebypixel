import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.svg";
import Language from "../img/Language.svg";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/codebypixel/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-center">
          <Link to="/projetos">
            <ul>Projetos</ul>
          </Link>
          <Link to="/contato">
            <ul>Contato</ul>
          </Link>
          <Link to="/sobre">
            <ul>Sobre</ul>
          </Link>
        </div>
        <div className="nav-right">
          <img src={Language} alt="Language" />
        </div>
      </div>
    </>
  );
}

export default Nav;
