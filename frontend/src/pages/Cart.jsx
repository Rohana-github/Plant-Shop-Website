import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultCart = [
  {
    id: 1,
    name: "Peperomia Ginny",
    price: 250,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600",
  },
  {
    id: 2,
    name: "Bird’s Nest Fern",
    price: 450,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800",
  },
  {
    id: 3,
    name: "Large Majesty Palm",
    price: 520,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600",
  },
];

const Cart = () => {
  const shippingCharge = 50;

  const [cart, setCart] = useState(defaultCart);

  useEffect(() => {
    localStorage.setItem("plantifyCart", JSON.stringify(cart));
  }, [cart]);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const shipping = cart.length > 0 ? shippingCharge : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-[#eefaf7] text-[#005746] min-h-screen">
      <section className="min-h-screen px-6 md:px-12 lg:px-24 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Shopping Cart
          </h1>

          <Link to="/" className="underline">
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 shadow-lg">
            <div className="space-y-6">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-10">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-5 border-b pb-6"
                  >
                    <img
                      src={item.image}
                      className="w-full md:w-32 h-32 object-cover"
                      alt={item.name}
                    />

                    <div className="flex-1">
                      <h3 className="text-xl font-medium">{item.name}</h3>

                      <p className="text-gray-500 mt-1">৳{item.price}</p>

                      <div className="flex items-center gap-3 mt-5">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-8 h-8 border border-[#005746]"
                        >
                          -
                        </button>

                        <span className="w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-8 h-8 border border-[#005746]"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex md:flex-col justify-between items-end">
                      <p className="font-semibold">
                        ৳{item.price * item.quantity}
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-white p-6 shadow-lg h-fit">
            <h2 className="text-2xl font-medium mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span>৳{shipping}</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span>৳{total}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block text-center mt-8 bg-[#005746] text-white py-4 hover:bg-[#004638] duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;