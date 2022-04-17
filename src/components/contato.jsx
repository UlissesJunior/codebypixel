import React from "react";
import "../styles/app.css";
import { Link } from "react-router-dom";
import Nav from "./navbar";
import Atalho from "../img/atalho.png"
import Earth from "../img/Earth.png"

function Contato() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="container-box container-contato">
          <div><div className="contato-img">
           <img src={Earth} alt="" srcset="" /> </div>
            <h1>
              <span>Contato</span>
            </h1>
            <h1><br /></h1>
            <h2><span>Currículo:</span> <span>Download</span> </h2><br />
            <h2><span>Email:</span> codebypixel@gmail.com<img src={Atalho} alt="" srcset="" /></h2><br />
            <h2><span>Instagram:</span> @codebypixel<img src={Atalho} alt="" srcset="" /></h2><br />
            <h2><span>Github:</span> UlissesJunior<img src={Atalho} alt="" srcset="" /></h2><br />
            <h2><span>Linkedin:</span> Ulisses Junior<img src={Atalho} alt="" srcset="" /></h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;
