import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LegalPage, { legalPages } from "./Legal.jsx";
import "./index.css";

// vercel.json rewrites every path to index.html, so policy pages are picked by pathname here.
const path = window.location.pathname.replace(/\.html$|\/$/, "") || "/";
const legal = legalPages[path];
if (legal) document.title = `${legal[0]} | Pragma Novus Systems`;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {legal ? <LegalPage path={path} /> : <App path={path} />}
  </React.StrictMode>
);
