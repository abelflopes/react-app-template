import "./styles/index.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { DefaultRouter } from "@router/Default";
import { Manager } from "@react-ck/manager";

const rootEl = document.querySelector("#root");

if (!rootEl) throw new Error("Missing root element");

createRoot(rootEl).render(
  <React.StrictMode>
    <Manager>
      <DefaultRouter />
    </Manager>
  </React.StrictMode>,
);
