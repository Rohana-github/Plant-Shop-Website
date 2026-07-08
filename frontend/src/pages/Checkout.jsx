import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import Navbar from "../components/Navbar";

function Checkout() {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const shippingCharge = cart.length > 0 ? 50 : 0;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal + shippingCharge;

  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const placeOrder = async (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  try {
    await API.post("/orders", {
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      phone: form.phone,
      address: form.address,

      items: cart.map((item) => ({
        productId: item._id || item.id,
        productName: item.name,
        quantity: item.quantity,
        price: item.price,
      })),

      totalAmount: total,
      status: "Pending",
    });

    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));

    alert("Order placed successfully");
    navigate("/order-history");
  } catch (error) {
    console.log(error.response?.data || error);
    alert(error.response?.data?.message || "Order failed");
  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#eefaf7] px-6 md:px-16 py-20">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-[#005746]">Checkout</h1>

          <Link
            to="/cart"
            className="border border-[#005746] text-[#005746] px-5 py-3 hover:bg-[#005746] hover:text-white duration-300"
          >
            Back to Cart
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Customer Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#005746] mb-6">
              Customer Information
            </h2>

            <form onSubmit={placeOrder} className="space-y-5">
              <input
                type="text"
                name="customerName"
                placeholder="Full Name"
                value={form.customerName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-[#005746]"
                required
              />

              <input
                type="email"
                name="customerEmail"
                placeholder="Email Address"
                value={form.customerEmail}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-[#005746]"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-[#005746]"
                required
              />

              <textarea
                name="address"
                placeholder="Delivery Address"
                value={form.address}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-[#005746]"
                required
              ></textarea>

              <div className="bg-[#eefaf7] p-4 rounded-lg">
                <p className="font-semibold text-[#005746]">
                  Payment Method
                </p>
                <p className="text-gray-600 mt-1">Cash on Delivery</p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#005746] text-white py-4 rounded-lg text-lg hover:bg-[#004638] duration-300"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="bg-white p-8 rounded-xl shadow-lg h-fit">
            <h2 className="text-2xl font-semibold text-[#005746] mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-5">
                  {cart.map((item) => (
                    <div
                      key={item._id}
                      className="flex gap-4 border-b pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-[#005746]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm text-gray-500">
                          Price: ৳{item.price}
                        </p>
                      </div>

                      <p className="font-semibold">
                        ৳{item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>৳{subtotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping Charge</span>
                    <span>৳{shippingCharge}</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between text-xl font-bold text-[#005746]">
                    <span>Total</span>
                    <span>৳{total}</span>
                  </div>
                </div>

                <div className="mt-6 bg-[#eefaf7] p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Estimated Delivery: 2–4 days
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;