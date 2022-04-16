import React from "react";
import "../styles/app.css";
import Nav from "./navbar";

function Sobre() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="container-box">
          <div>
            <h1>
              <span>Sobre</span>
            </h1>
            <a>Desenvolvedor Front-End Júnior | Web Designer (UI/UX)</a>
            <br></br>
            <a>Em busca de novas tecnologias para explorar</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
