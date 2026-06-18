import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";

import Users from "./pages/admin/Users";
import Orders from "./pages/admin/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;