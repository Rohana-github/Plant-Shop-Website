import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import NewArrivalsAll from "./pages/NewArrivalsAll";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";

import Cart from "./pages/Cart";

import AdminLayout from "./components/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminForgotPassword from "./pages/admin/AdminForgotPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Products from "./pages/admin/Products";
import Users from "./pages/admin/Users";
import Orders from "./pages/admin/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/new-arrivals" element={<NewArrivalsAll />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;