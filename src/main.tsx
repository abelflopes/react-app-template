// React
import React from "react";
import { createRoot } from "react-dom/client";
// Styles
import "./styles/index.scss";
// Store
import { Store } from "@store/index.ts";
// Router
import { DefaultRouter } from "@router/router/Default";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Store.Provider>
      <DefaultRouter />
    </Store.Provider>
  </React.StrictMode>
);
