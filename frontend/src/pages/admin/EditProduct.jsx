import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/axios";
import toast from "react-hot-toast";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "",
    price: "",
    stock: "",
  });

  const getProduct = async () => {
    try {
      const res = await API.get(`/products/${id}`);
      setProduct({
        name: res.data.name,
        image: res.data.image,
        category: res.data.category,
        price: res.data.price,
        stock: res.data.stock,
      });
    } catch (error) {
      console.log(error);
      toast.success("Product load failed");
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/products/${id}`, product);
      toast.success("Product updated successfully");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      toast.success("Product update failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#eefaf7] p-8">
      <div className="bg-white max-w-2xl mx-auto p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-[#005746] mb-6">
          Edit Product
        </h1>

        <form onSubmit={handleUpdate} className="space-y-5">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#005746] text-white py-3 rounded hover:bg-[#004638]"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;