import React from "react";
import "../styles/app.css";
import moment from "moment";
import Nav from "./navbar";
import User from "../img/user.png";
import Timeline from "../img/timeline.png";
import html_badge from "../img/badge_html.png";
import css_badge from "../img/badge_css.png";
import js_badge from "../img/badge_js.png";
import c_badge from "../img/badge_c.png";

function Sobre() {
  //Birthday
  let birthday = moment()
    .subtract(2005, "years")
    .subtract(7, "months")
    .add(17, "days")
    .format("YY");

  let work = moment().subtract(2021, "years").add(5, "months").format("MM");
  console.log(work);

  return (
    <>
      <div className="container">
        <Nav />
        <div className="container">
          <div className="container-sobre">
            <h1>
              <span>Sobre Mim</span>
            </h1>
            <div className="sobre-inline">
              <img src={User} alt="Ulisses Junior" />
              <h2>
                Olá Dev! <br />
                Meu nome é Ulisses Junior, eu tenho {birthday} anos.
                <br />
                <br /> Sou um desenvolvedor Front-End em constante evolução,
                descobri que gostava da área no meu curso atual - Técnico em
                Automação Industrial - que faço no CTIG-UNESP.
                <br />
                <br /> Depois que me interessei pela área, eu “revirei” tudo o
                que eu achei em busca de conhecimento. Tive a base do Front-End
                na disciplina de Informática no meu curso técnico, depois disso,
                fiz o curso “HTML, CSS, e Javascript para desenvolvedores web”
                da University John Hopkins através da plataforma Coursera e
                busquei o restante por conteúdos no Youtube e no Instagram.
                <br />
                <br /> Atualmente eu faço estágio como desenvolvedor Front-End
                na Alumni Unesp Guaratinguetá. Estou no 3º ano do ensino médio
                integrado ao técnico, ano que vem eu pretendo entrar na
                faculdade, para cursar Engenharia de Computação.
              </h2>
            </div>
          </div>
          <div className="container-sobre">
            <h1>
              <span>Skills e Tecnologias</span>
            </h1>
            {/* <div className="sobre-inline">
              <div className="badge">
                <img src={html_badge} alt="badge"/>
              </div>
              <div className="badge">
                <img src={css_badge} alt="badge"/>
              </div>
              <div className="badge">
                <img src={js_badge} alt="badge"/>
              </div>
              <div className="badge">
                <img src={c_badge} alt="badge"/>
              </div>
            </div>
            <div className="sobre-inline">
              <div className="badge"></div>
              <div className="badge"></div>
              <div className="badge"></div>
              <div className="badge"></div>
            </div> */}
          </div>
          <div className="container-sobre">
            <h1>
              <span>Experiência</span>
            </h1>
            <div className="sobre-inline">
              <img src={Timeline} alt="Ulisses Junior" />
              <h2>
                <b>Desenvolvedor Front-End</b>
                <br />
                Alumni Unesp Guaratinguetá - Home Office
                <br />
                07/2021 - Momento • {work} meses
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
