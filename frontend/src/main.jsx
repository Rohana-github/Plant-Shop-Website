import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1047508535378-73j5rshgrtfsu85hlfj4c4u9dantg5oi.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);