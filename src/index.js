import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Sobre from "./components/sobre.jsx";
import Projetos from "./components/projetos.jsx";
import Contato from "./components/contato.jsx";

render(
  <BrowserRouter>
    <Routes>
        <Route path="codebypixel" element={<App />}></Route>
        <Route path="sobre" element={<Sobre />}></Route>
        <Route path="projetos" element={<Projetos />}></Route>
        <Route path="contato" element={<Contato />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
