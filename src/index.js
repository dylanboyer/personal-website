import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./pages/Main";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
  </React.StrictMode>
);
