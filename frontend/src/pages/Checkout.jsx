import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Checkout() {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    try {
      for (const item of cart) {
        await API.post("/orders", {
          customerName: form.customerName,
          customerEmail: form.customerEmail,
          productName: item.name,
          quantity: item.quantity,
          totalAmount: item.price * item.quantity,
          status: "Pending",
        });
      }

      localStorage.removeItem("cart");
      alert("Order placed successfully");
      navigate("/order-history");
    } catch (error) {
      console.log(error);
      alert("Order failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#eefaf7] p-8">
      <h1 className="text-4xl font-bold text-[#005746] mb-8">Checkout</h1>

      <form onSubmit={placeOrder} className="bg-white p-8 rounded-xl shadow max-w-2xl">
        <input
          name="customerName"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          name="customerEmail"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <h2 className="text-2xl font-bold mb-4">Total: ৳{total}</h2>

        <button className="w-full bg-[#005746] text-white py-3 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;