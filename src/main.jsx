import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importe o BrowserRouter
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Tech-World">  {/* Adicione o basename aqui */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
