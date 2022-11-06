import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MobileProvider } from "./Context/MobileContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MobileProvider>
      <App />
    </MobileProvider>
  </React.StrictMode>
);
