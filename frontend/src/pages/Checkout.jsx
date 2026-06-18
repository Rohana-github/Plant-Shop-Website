import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="bg-[#eefaf7] text-[#005746] min-h-screen font-['Poppins']">
      <section className="min-h-screen px-6 md:px-12 lg:px-24 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 md:p-8 shadow-2xl rounded-lg">
            <h2 className="text-2xl font-medium mb-6">Shipping Information</h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" className="h-12 px-4 border border-[#005746]/30 outline-none" />
                <input type="tel" placeholder="Phone Number" className="h-12 px-4 border border-[#005746]/30 outline-none" />
              </div>

              <input type="email" placeholder="Email Address" className="w-full h-12 px-4 border border-[#005746]/30 outline-none" />

              <textarea placeholder="Full Address" className="w-full h-28 px-4 py-3 border border-[#005746]/30 outline-none"></textarea>

              <h2 className="text-2xl font-medium pt-5">Payment Method</h2>

              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="radio" name="payment" defaultChecked className="accent-[#005746]" />
                  Cash on Delivery
                </label>

                <label className="flex items-center gap-3">
                  <input type="radio" name="payment" className="accent-[#005746]" />
                  Mobile Banking
                </label>

                <label className="flex items-center gap-3">
                  <input type="radio" name="payment" className="accent-[#005746]" />
                  Card Payment
                </label>
              </div>

              <button className="w-full bg-[#005746] text-white py-4 mt-6 hover:bg-[#004638] duration-300 rounded-md">
                Confirm Order
              </button>
            </form>
          </div>

          <div className="bg-white p-6 shadow-2xl rounded-lg h-fit">
            <h2 className="text-2xl font-medium mb-6">Order Summary</h2>

            <p className="text-gray-500 mb-6">No items found.</p>

            <div className="space-y-4 text-sm border-t pt-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳0</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>৳0</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span>৳0</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;