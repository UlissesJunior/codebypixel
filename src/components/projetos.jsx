import React from "react";
import "../styles/app.css";
import Nav from "./navbar";

function Projetos() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="container-box">
          <div className="home-img">
            <div className="loading">Loading...</div>
          </div>
          <div>
            <h1>
              <span>Área de Projetos</span>
            </h1>
            {/* <h2>Desenvolvedor Front-End Júnior | Web Designer (UI/UX)</h2>
            <h2>Em busca de novas tecnologias para explorar</h2> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projetos;
