import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApiProvider } from "./components/context/ApiContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/">
    <ApiProvider>
      <App />
    </ApiProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
