// React
import React from "react";
import { createRoot } from "react-dom/client";
// Styles
import "./styles/index.scss";
// Router
import { DefaultRouter } from "@router/router/Default";

const rootEl = document.querySelector("#root");

if (!rootEl) throw new Error("Missing root element");

createRoot(rootEl).render(
  <React.StrictMode>
    <DefaultRouter />
  </React.StrictMode>,
);
