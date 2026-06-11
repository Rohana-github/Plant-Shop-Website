import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminForgotPassword from "./pages/admin/AdminForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route
          path="/admin/forgot-password"
          element={<AdminForgotPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;