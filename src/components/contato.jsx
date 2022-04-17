import React from "react";
import "../styles/app.css";
import Nav from "./navbar";

function Contato() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="container-box">
          <div>
            <h1>
              <span>Contato</span>
            </h1>
            <h1><br /></h1>
            <h2><span>Currículo:</span> Download</h2><br />
            <h2><span>Email:</span> codebypixel@gmail.com</h2><br />
            <h2><span>Instagram:</span> @codebypixel</h2><br />
            <h2><span>Github:</span> UlissesJunior</h2><br />
            <h2><span>Linkedin:</span> Ulisses Junior</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;
