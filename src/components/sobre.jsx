import React from "react";
import "../styles/app.css";
import Nav from "./navbar";
import User from "../img/user.png";
import Timeline from "../img/timeline.png";
import moment from 'moment';

function Sobre() {

  let now = moment().format("DD/MM/YYYY");
  console.log(now);
  let birthday = moment().subtract(2005, 'years').subtract(7, 'months').add(17, 'days').format("YY")
  console.log(birthday)

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
            <div className="sobre-inline">
              <img src={User} alt="Ulisses Junior" />
            </div>
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
                07/2021 - Momento • 10 meses
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
