import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./components/App";

import "./reset.css";
import "./styles.css";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <App />;
  </StrictMode>
);
