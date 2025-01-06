import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Helmet } from "react-helmet";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Helmet>
      <title>JiaG's Portfolio</title>
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
