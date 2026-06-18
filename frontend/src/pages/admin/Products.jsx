function Products() {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500",
      name: "Snake Plant",
      category: "Indoor",
      price: 450,
      stock: 25,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500",
      name: "Money Plant",
      category: "Indoor",
      price: 350,
      stock: 40,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
      name: "Peace Lily",
      category: "Flowering",
      price: 550,
      stock: 18,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
      name: "Aloe Vera",
      category: "Medicinal",
      price: 300,
      stock: 30,
    },
  ];

  return (
    <div className="min-h-screen bg-[#eefaf7] p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-[#005746]">
          All Products
        </h1>

        <button className="bg-[#005746] text-white px-5 py-3">
          Add Product
        </button>
      </div>

      <div className="bg-white shadow-xl p-6 rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-[#005746]">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>

                <td className="p-4 font-medium">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4">
                  ৳{product.price}
                </td>

                <td className="p-4">
                  {product.stock}
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="bg-blue-500 text-white px-3 py-2 rounded">
                      Edit
                    </button>

                    <button className="bg-red-500 text-white px-3 py-2 rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;