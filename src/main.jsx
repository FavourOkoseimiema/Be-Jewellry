import { Toaster } from "react-hot-toast";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "./Context/AuthContext";

AOS.init({ duration: 600 });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster/>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);