import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import App from "./components/Pages/App";
ReactDOM.render(
  <BrowserRouter>
    <Menu />
    <App />
  </BrowserRouter>,

  document.getElementById("reactapp")
);
