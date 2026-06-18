import Navbar from "../components/Navbar";

const arrivals = [
  {
    id: 1,
    name: "Blue Lily",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=800",
  },
  {
    id: 2,
    name: "Pink Flower",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800",
  },
  {
    id: 3,
    name: "Garden Daisy",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800",
  },
  {
    id: 4,
    name: "Yellow Bloom",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=800",
  },
  {
    id: 5,
    name: "Rose Collection",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800",
  },
  {
    id: 6,
    name: "Colorful Bouquet",
    image:
      "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?q=80&w=800",
  },
];

function NewArrivalsAll() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#fafafa] px-6 md:px-12 lg:px-24 pt-28 pb-16 font-['Poppins']">
        <h1 className="text-[#005746] text-4xl font-medium mb-10">
          All Colorful New Arrivals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {arrivals.map((item) => (
            <div key={item.id} className="group">
              <div className="h-[360px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <h3 className="text-[#005746] text-xl mt-4">{item.name}</h3>

              <button className="mt-3 text-[#005746] hover:translate-x-2 duration-300">
                more information →
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default NewArrivalsAll;