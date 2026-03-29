import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { User } from "lucide-react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
