import { useEffect, useState } from "react";
import API from "../api/axios";

function UserProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item._id === product._id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div className="min-h-screen bg-[#eefaf7] p-8">
      <h1 className="text-4xl font-bold text-[#005746] mb-8">
        Shop Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-5 rounded-xl shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-[#005746] font-bold mt-2">৳{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="w-full mt-4 bg-[#005746] text-white py-3 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProducts;