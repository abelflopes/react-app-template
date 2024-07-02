import "./styles/index.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { DefaultRouter } from "@router/Default";
import { Manager, Snackbar } from "react-ck";

const rootEl = document.querySelector("#root");

if (!rootEl) throw new Error("Missing root element");

createRoot(rootEl).render(
  <React.StrictMode>
    <Manager>
      <Snackbar>
        <DefaultRouter />
      </Snackbar>
    </Manager>
  </React.StrictMode>,
);
