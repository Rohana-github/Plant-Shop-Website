import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQty = (id) => {
    const newCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  };

  const decreaseQty = (id) => {
    const newCart = cart.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(newCart);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item._id !== id);
    updateCart(newCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#eefaf7] p-8">
      <h1 className="text-4xl font-bold text-[#005746] mb-8">My Cart</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        {cart.length === 0 && <p>Your cart is empty</p>}

        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>৳{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => decreaseQty(item._id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item._id)}>+</button>
            </div>

            <p>৳{item.price * item.quantity}</p>

            <button
              onClick={() => removeItem(item._id)}
              className="bg-red-500 text-white px-3 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="text-right mt-6">
          <h2 className="text-2xl font-bold">Total: ৳{total}</h2>

          {cart.length > 0 && (
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-[#005746] text-white px-6 py-3 rounded"
            >
              Checkout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;