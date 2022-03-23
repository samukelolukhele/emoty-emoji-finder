import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApiProvider } from "./components/context/ApiContext";

ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>
,
  document.getElementById("root")
);
