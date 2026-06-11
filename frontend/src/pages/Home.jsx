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
];

function Home() {
  const handleAddToCart = (product) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = oldCart.find((item) => item.id === product.id);

    let updatedCart;

    if (existing) {
      updatedCart = oldCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...oldCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart`);
  };

  const scrollShop = () => {
    const slider = document.getElementById("shopSlider");
    slider.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

    <section className="min-h-screen bg-[#005746] text-white overflow-x-hidden font-['Poppins']">
      {/* HERO */}
      <main className="min-h-screen pt-[70px] px-6 md:px-12 lg:px-24 py-8 lg:py-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
        <div className="text-center lg:text-left">
          <h1 className="font-light tracking-[5px] leading-[1.15] text-[38px] sm:text-[48px] md:text-[58px] lg:text-[62px] xl:text-[68px]">
            Happiness <br />
            blooms from <br />
            within
          </h1>

          <p className="mt-6 md:mt-8 text-white/75 text-sm md:text-[15px] leading-7 max-w-md mx-auto lg:mx-0">
            Our environment, the world in which we live and work, is a mirror of
            our attitudes and expectations.
          </p>

          <div className="mt-7 md:mt-9 flex items-center justify-center lg:justify-start gap-6 md:gap-10">
            <a
              href="#shop-now"
              className="bg-white text-[#005746] px-8 md:px-10 py-3.5 md:py-4 text-sm font-medium hover:scale-105 duration-300"
            >
              Shop now
            </a>

            <a
              href="#new-arrival-section"
              className="text-sm text-white/85 hover:translate-x-2 duration-300"
            >
              Explore plants →
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10 grid grid-cols-[145px_240px] sm:grid-cols-[180px_300px] md:grid-cols-[200px_340px] grid-rows-[180px_180px] sm:grid-rows-[210px_210px] md:grid-rows-[235px_235px] gap-1 max-w-full">
            <div className="relative bg-[#eef2ff] overflow-hidden">
              <span className="absolute top-3 left-3 bg-[#005746] px-4 py-1.5 text-[10px] z-10">
                New
              </span>
              <img
                src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600"
                className="w-full h-full object-cover"
                alt="Plant"
              />
            </div>

            <div className="relative row-span-2 bg-[#eef2ff] overflow-hidden">
              <span className="absolute top-3 left-4 bg-[#005746] px-5 py-1.5 text-[10px] z-20">
                Featured
              </span>
              <img
                src="https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=900"
                className="w-full h-full object-cover"
                alt="Flower"
              />

              <div className="absolute bottom-0 left-0 w-full px-5 md:px-7 pb-5 pt-24 bg-gradient-to-t from-black/60 to-transparent">
                <h2 className="text-xl md:text-3xl font-light">
                  Anthurium Flower
                </h2>

                <p className="text-[11px] md:text-sm text-white/75 mt-2 leading-5">
                  The flower of human being. It has meaningful of fact that the
                  plant always grow whatever season and weather.
                </p>

                <button className="mt-5 bg-white text-[#005746] w-full py-3 md:py-4 text-[10px] tracking-[5px] font-medium">
                  READ MORE
                </button>
              </div>
            </div>

            <div className="relative bg-[#eef2ff] overflow-hidden">
              <span className="absolute top-3 left-3 bg-[#005746] px-4 py-1.5 text-[10px] z-10">
                Popular
              </span>
              <img
                src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=600"
                className="w-full h-full object-cover"
                alt="Cactus"
              />
            </div>
          </div>
        </div>
      </main>

      {/* SHOP NOW */}
      <section
        id="shop-now"
        className="scroll-mt-[80px] bg-[#f8faf9] text-[#005746] px-6 md:px-12 lg:px-24 py-16 overflow-hidden"
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-medium tracking-wide">
            Shop Now
          </h2>

          <button className="text-[#005746] text-lg hover:underline">
            view all
          </button>
        </div>

        <div className="relative">
          <div
            id="shopSlider"
            className="flex gap-8 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[230px]">
                <div className="h-[305px] bg-[#e8e8e8] overflow-hidden">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover"
                    alt={product.name}
                  />
                </div>

                <div className="flex justify-between items-center mt-4">
                  <h3 className="text-lg">{product.name}</h3>
                  <p className="text-lg">{product.price} BDT</p>
                </div>

                <p className="text-gray-400 text-sm mt-4">Pot color</p>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 bg-[#2f2f2f] rounded-full"></span>
                    <span className="w-3 h-3 bg-[#e6b3a0] rounded-full"></span>
                    <span className="w-3 h-3 bg-[#c77f62] rounded-full"></span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="border border-[#005746] text-[#005746] px-6 py-2 text-sm hover:bg-[#005746] hover:text-white duration-300"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollShop}
            className="absolute right-0 top-[220px] translate-x-1/2 bg-white text-[#005746] w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-4xl hover:scale-105 duration-300"
          >
            →
          </button>
        </div>
      </section>

      {/* SEARCH */}
      <section
        id="search-section"
        className="scroll-mt-[110px] bg-[#eefaf7] px-6 md:px-12 lg:px-24 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center w-full h-[58px]">
            <button className="h-full w-[60px] border border-[#005746] text-[#005746] flex items-center justify-center hover:bg-[#005746] hover:text-white duration-300">
              ⚙
            </button>

            <input
              type="text"
              placeholder="Search flowers..."
              className="h-full flex-1 border-t border-b border-[#005746] bg-transparent px-5 text-[#005746] placeholder:text-[#005746]/60 outline-none text-sm md:text-base"
            />

            <button className="h-full w-[68px] bg-[#005746] text-white flex items-center justify-center hover:bg-[#004638] duration-300">
              🔍
            </button>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section
        id="new-arrival-section"
        className="scroll-mt-[110px] bg-[#fafafa] px-6 md:px-12 lg:px-24 py-20"
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[#005746] text-2xl md:text-4xl font-medium">
            Colorful New Arrivals
          </h2>

          <a href="#" className="text-[#005746] text-lg hover:underline">
            view all
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=800",
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800",
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800",
            "https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=800",
          ].map((image, index) => (
            <div
              key={index}
              className="relative h-[260px] md:h-[380px] overflow-hidden group"
            >
              <img
                src={image}
                alt="Flower"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              {index === 0 && (
                <div className="absolute inset-0 bg-[#003d35]/60 flex flex-col justify-center px-6">
                  <h3 className="text-white text-2xl md:text-4xl font-light">
                    Blue Lily
                  </h3>

                  <button className="text-white/80 mt-4 text-sm flex items-center gap-2 hover:translate-x-2 duration-300">
                    more information →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PLANT STANDS */}
      <section
        id="plant-stand-section"
        className="scroll-mt-[110px] bg-[#eefaf7] px-6 md:px-12 lg:px-24 py-20"
      >
        <h2 className="text-[#005746] text-3xl md:text-4xl font-medium mb-10">
          Plant stands
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-5">
          {[
            "https://images.unsplash.com/photo-1585264550248-1778be3b6368?q=80&w=800",
            "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?q=80&w=800",
            "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=800",
          ].map((image, index) => (
            <div
              key={index}
              className="w-full lg:w-[32%] h-[280px] md:h-[420px] overflow-hidden group"
            >
              <img
                src={image}
                alt="Plant Stand"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />
            </div>
          ))}

          <a
            href="#"
            className="text-[#005746] text-sm md:text-base whitespace-nowrap hover:translate-x-2 duration-300"
          >
            more →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact-section"
        className="scroll-mt-[100px] bg-[#fafafa] px-6 md:px-12 lg:px-24 py-20"
      >
        <div className="bg-[#e7c8bc] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="px-8 md:px-14 py-12 md:py-16 text-[#a7725d]">
              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Free Shipping Services
              </h2>

              <p className="mt-3 text-sm md:text-lg opacity-80">
                *only for the same region
              </p>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-base md:text-xl">
                    📞 +8801967421358
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-base md:text-xl">
                    ✉ order@platify.com
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[300px] md:h-[450px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=1200"
                alt="Flowers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section className="bg-[#fafafa] px-6 md:px-12 lg:px-24 py-14">
        <div className="relative h-[260px] md:h-[300px] overflow-hidden">
          <iframe
            title="Plantify Location"
            src="https://maps.google.com/maps?q=Nasirabad%2C%20Chattogram%2C%20Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <div className="absolute inset-0 bg-white/20"></div>

          <div className="absolute top-6 left-6 md:left-8 bg-white w-[85%] md:w-[520px] px-7 md:px-9 py-7 shadow-sm">
            <a
              href="https://maps.google.com/?q=Nasirabad, Chattogram, Bangladesh"
              target="_blank"
              rel="noreferrer"
              className="absolute top-0 right-0 bg-[#005746] text-white px-6 py-4 text-xs md:text-sm tracking-[2px] flex items-center gap-2 z-20"
            >
              ⊙ GET DIRECTIONS
            </a>

            <h2 className="text-[#1f3f39] text-2xl md:text-3xl font-light mb-4">
              Visit us
            </h2>

            <p className="text-gray-500 leading-7 text-sm md:text-base">
              Chattogram, Bangladesh <br />
              Road No:01, Block:L <br />
              Nasirabad <br />
            </p>

            <p className="mt-4 text-gray-500 text-sm md:text-base">
              <span className="underline text-[#1f3f39]">Open day</span> :
              11am–5:30pm everyday
            </p>
          </div>
        </div>
      </section>
    </section>
    </>
  );
}

export default Home;