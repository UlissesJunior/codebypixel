import React from "react";
import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Banner from "./img/banner.svg";

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="container-box">
          <img src={Banner} alt="Banner" srcset="" />
          <div>
            <h1>
              Olá, <br></br>
              Sou o <span>Ulisses Junior</span>
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

export default App;