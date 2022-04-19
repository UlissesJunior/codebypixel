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
          <div className="home-img">
            <img src={Banner} alt="Banner" />
          </div>
          <div>
            <h1>
              Olá, <br />
              Sou o <span>Ulisses Junior</span>
            </h1>
            <h2>Desenvolvedor Front-End Júnior | Web Designer (UI/UX)</h2>
            <h2>Em busca de novas tecnologias para explorar</h2>
          </div>
        </div>
      </div>
    </>
  );
  
  
}

export default App;
