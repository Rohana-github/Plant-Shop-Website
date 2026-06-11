import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminForgotPassword from "./pages/admin/AdminForgotPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default Page */}
        <Route path="/" element={<AdminLogin />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Admin Auth Pages */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/signup"
          element={<AdminSignup />}
        />

        <Route
          path="/admin/forgot-password"
          element={<AdminForgotPassword />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;