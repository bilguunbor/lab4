import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";

import Example from "./components/example/Example";
import MenuItem from "./components/MenuItem/Index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Example />,

  document.getElementById("reactapp")
);
