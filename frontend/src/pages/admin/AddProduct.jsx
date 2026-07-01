import API from "../../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/products", product);

    alert("Product Added Successfully");

    console.log(res.data);

    navigate("/admin/products");
  } catch (error) {
    console.log(error);
    alert("Failed!");
  }
};

  return (
    <div className="min-h-screen bg-[#eefaf7] p-8">
      <div className="bg-white max-w-2xl mx-auto p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-[#005746] mb-6">
          Add Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#005746] text-white py-3 rounded hover:bg-[#004638]"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;