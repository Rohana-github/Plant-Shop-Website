import Navbar from "../components/Navbar";

const products = [
  {
    id: 1,
    name: "Peperomia Ginny",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=500",
  },
  {
    id: 2,
    name: "Bird’s Nest Fern",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800",
  },
  {
    id: 3,
    name: "Large Majesty Palm",
    price: 520,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600",
  },
  {
    id: 4,
    name: "Pet Friendly Plant",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=500",
  },
  {
    id: 5,
    name: "Duo Friendly Plant",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=500",
  },
  {
    id: 6,
    name: "Snake Plant",
    price: 400,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?q=80&w=800",
  },
];

function ShopAll() {
  const handleAddToCart = (product) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = oldCart.find((item) => item.id === product.id);

    const updatedCart = existing
      ? oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...oldCart, { ...product, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
            <div key={product.id}>
              <div className="h-[305px] bg-[#e8e8e8] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 duration-500"
                />
              </div>

              <div className="mt-4 min-h-[70px]">
                 <h3 className="text-[#005746] text-lg leading-6 line-clamp-2">
                    {product.name}
                 </h3>

               <p className="text-[#005746] text-lg mt-2">
                {product.price} BDT
               </p>
             </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-2 w-full border border-[#005746] text-[#005746] py-2 hover:bg-[#005746] hover:text-white duration-300"
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ShopAll;