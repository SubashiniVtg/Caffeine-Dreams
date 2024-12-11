
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { Link } from 'react-router-dom';
// radix aa import panna thaan web page correct aa varum like andha flex box ku naduvula gap varum
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
// inga namma munnadi  irruntha coding aa  apdiey podurom
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);