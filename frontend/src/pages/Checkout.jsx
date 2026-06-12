import { useEffect, useState } from "react";

function Checkout({ setPage }) {
  const [cart, setCart] = useState([]);
  const shippingCharge = 5;

  useEffect(() => {
    try {
      const savedCart =
        JSON.parse(localStorage.getItem("cart")) ||
        JSON.parse(localStorage.getItem("plantifyCart")) ||
        [];

      setCart(Array.isArray(savedCart) ? savedCart : []);
    } catch (error) {
      setCart([]);
    }
  }, []);

  const subtotal = cart.reduce((sum, item) => {
    return sum + Number(item.price || 0) * Number(item.quantity || 1);
  }, 0);

  const shipping = cart.length > 0 ? shippingCharge : 0;
  const total = subtotal + shipping;

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("No items found in cart.");
      return;
    }

    alert("Order confirmed successfully!");
    localStorage.removeItem("cart");
    localStorage.removeItem("plantifyCart");
    setCart([]);
  };

  return (
    <div className="bg-[#eefaf7] text-[#005746] min-h-screen font-['Poppins']">
      <section className="min-h-screen px-6 md:px-12 lg:px-24 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">Checkout</h1>

          <button
            type="button"
            onClick={() => setPage && setPage("login")}
            className="underline text-[#005746]"
          >
            Back
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 md:p-8 shadow-2xl rounded-lg">
            <h2 className="text-2xl font-medium mb-6">
              Shipping Information
            </h2>

            <form className="space-y-5" onSubmit={handleConfirmOrder}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="h-12 px-4 border border-[#005746]/30 outline-none focus:border-[#005746]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="h-12 px-4 border border-[#005746]/30 outline-none focus:border-[#005746]"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full h-12 px-4 border border-[#005746]/30 outline-none focus:border-[#005746]"
              />

              <textarea
                placeholder="Full Address"
                required
                className="w-full h-28 px-4 py-3 border border-[#005746]/30 outline-none focus:border-[#005746]"
              ></textarea>

              <h2 className="text-2xl font-medium pt-5">Payment Method</h2>

              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="accent-[#005746]"
                  />
                  Cash on Delivery
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-[#005746]"
                  />
                  Mobile Banking
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-[#005746]"
                  />
                  Card Payment
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#005746] text-white py-4 mt-6 hover:bg-[#004638] duration-300 rounded-md"
              >
                Confirm Order
              </button>
            </form>
          </div>

          <div className="bg-white p-6 shadow-2xl rounded-lg h-fit">
            <h2 className="text-2xl font-medium mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cart.length === 0 ? (
                <p className="text-gray-500">No items found.</p>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="flex justify-between gap-4 border-b pb-3"
                  >
                    <div>
                      <h3 className="font-medium">{item.name}</h3>

                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity || 1}
                      </p>
                    </div>

                    <p className="font-medium">
                      ${Number(item.price || 0) * Number(item.quantity || 1)}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-4 text-sm border-t pt-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;