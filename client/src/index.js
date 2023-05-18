import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./screens/App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};
const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);
root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
