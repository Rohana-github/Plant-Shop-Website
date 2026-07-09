import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const getItemId = (item) => item._id || item.id;

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQty = (id) => {
  const newCart = cart.map((item) => {
    if (getItemId(item) === id) {
      if (item.quantity >= item.stock) {
        alert(`Only ${item.stock} items available in stock`);
        return item;
      }

      return { ...item, quantity: item.quantity + 1 };
    }

    return item;
  });

  updateCart(newCart);
};

  const decreaseQty = (id) => {
    const newCart = cart.map((item) =>
      getItemId(item) === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    updateCart(newCart);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => getItemId(item) !== id);
    updateCart(newCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#eefaf7] p-8 pt-24">
        <h1 className="text-4xl font-bold text-[#005746] mb-8">My Cart</h1>

        <div className="bg-white p-6 rounded-xl shadow">
          {cart.length === 0 && <p>Your cart is empty</p>}

          {cart.map((item) => (
            <div
              key={getItemId(item)}
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
                <button onClick={() => decreaseQty(getItemId(item))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(getItemId(item))}>+</button>
              </div>

              <p>৳{item.price * item.quantity}</p>

              <button
                onClick={() => removeItem(getItemId(item))}
                className="bg-red-500 text-white px-3 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-2xl font-bold">Total: ৳{total}</h2>

          <div className="flex justify-end gap-4 mt-4">
  <Link
    to="/order-history"
    className="border border-[#005746] text-[#005746] px-6 py-3 rounded hover:bg-[#005746] hover:text-white duration-300"
  >
    Order History
  </Link>

  {cart.length > 0 && (
    <Link
      to="/checkout"
      className="bg-[#005746] text-white px-6 py-3 rounded hover:bg-[#004638] duration-300"
    >
      Checkout
    </Link>
  )}
</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;