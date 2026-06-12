import { useState } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";

function App() {
  const [page, setPage] = useState("login");

  if (page === "signup") {
    return <Signup setPage={setPage} />;
  }

  if (page === "forgot") {
    return <ForgotPassword setPage={setPage} />;
  }

  if (page === "checkout") {
    return <Checkout />;
  }

  return <Login setPage={setPage} />;
}

export default App;