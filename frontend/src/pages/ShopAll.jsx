import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";

function ShopAll() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);
const handleAddToCart = (product) => {
  if (product.stock <= 0) {
    alert("This product is out of stock");
    return;
  }

  const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = oldCart.find((item) => item._id === product._id);

  let updatedCart;

  if (existing) {
    if (existing.quantity >= product.stock) {
      alert(`Only ${product.stock} items available in stock`);
      return;
    }

    updatedCart = oldCart.map((item) =>
      item._id === product._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    updatedCart = [...oldCart, { ...product, quantity: 1 }];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));

  alert(`${product.name} added to cart`);
};

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8faf9] px-6 md:px-12 lg:px-24 pt-28 pb-16 font-['Poppins']">
        <h1 className="text-[#005746] text-4xl font-medium mb-10">
          All Shop Items
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id}>
              <div className="h-[305px]bg-[#e8e8e8] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 duration-500"
                />
              </div>

              <div className="mt-4 flex justify-between items-center">
  <h3 className="text-[#005746] text-lg font-medium">
    {product.name}
  </h3>

  <p className="text-[#005746] text-lg font-semibold">
    ৳{product.price}
  </p>
</div>

{product.stock <= 0 ? (
  <button
    disabled
    className="mt-4 w-full bg-gray-300 text-gray-600 py-2 cursor-not-allowed"
  >
    Stock Out
  </button>
) : (
  <button
    onClick={() => handleAddToCart(product)}
    className="mt-4 w-full border border-[#005746] text-[#005746] py-2 hover:bg-[#005746] hover:text-white duration-300"
  >
    Buy
  </button>
)}



          </div>
          ))}

          {products.length === 0 && (
            <p className="text-[#005746]">No products found.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default ShopAll;