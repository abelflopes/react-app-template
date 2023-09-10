// React
import React from "react";
import { createRoot } from "react-dom/client";
// Styles
import "./styles/index.scss";
// Router
import { DefaultRouter } from "@router/router/Default";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DefaultRouter />
  </React.StrictMode>
);
