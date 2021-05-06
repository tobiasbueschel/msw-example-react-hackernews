import React from "react";
import ReactDOM from "react-dom";
import { LoginForm } from "./LoginForm";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
`;

// Start the mocking conditionally.
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <LoginForm />
  </React.Fragment>,
  document.getElementById("root")
);
