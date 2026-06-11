import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[50px] px-6 md:px-12 lg:px-24 flex items-center justify-between text-white bg-[#005746] z-[999] shadow-sm">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-light">
        <button
          onClick={() => scrollToSection("shop-now")}
          className="hover:text-white/70 duration-300"
        >
          Shop
        </button>

        {/* Products Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-white/70 duration-300">
            Products
            <svg
              className="w-3 h-3 mt-[2px] group-hover:rotate-180 duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.5 7.5L10 12l4.5-4.5H5.5z"></path>
            </svg>
          </button>

          <div className="absolute top-full left-0 mt-3 bg-white text-[#005746] shadow-xl rounded-md min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <button
              onClick={() => scrollToSection("new-arrival-section")}
              className="block w-full text-left px-5 py-3 hover:bg-[#eefaf7]"
            >
              New Arrival
            </button>

            <button
              onClick={() => scrollToSection("plant-stand-section")}
              className="block w-full text-left px-5 py-3 hover:bg-[#eefaf7]"
            >
              Plant Stands
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("contact-section")}
          className="hover:text-white/70 duration-300"
        >
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-1 z-50 w-10 h-10"
      >
        <span className="w-6 h-[2px] bg-white rounded-full duration-300"></span>
        <span className="w-6 h-[2px] bg-white rounded-full duration-300"></span>
        <span className="w-6 h-[2px] bg-white rounded-full duration-300"></span>
      </button>

      {/* Logo Center */}
      <Link
        to="/"
        className="absolute left-1/2 -translate-x-1/2 text-center leading-none"
      >
        <h1 className="text-xl md:text-2xl font-bold">Plantify</h1>
        <p className="text-[11px] italic font-light mt-0.2">Garden</p>
      </Link>

      {/* Icons */}
      <div className="flex items-center gap-4 md:gap-5 z-50">
        <button onClick={() => scrollToSection("search-section")}>
          <svg
            className="w-5 h-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7"></circle>
            <path d="M20 20L17 17"></path>
          </svg>
        </button>

        {/* User Dropdown */}
        <div className="relative hidden sm:flex items-center">
          <button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            className="flex items-center justify-center w-5 h-5"
          >
            <svg
              className="w-5 h-5 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
            </svg>
          </button>

          {userDropdownOpen && (
            <div className="absolute right-0 top-[45px] bg-white text-[#005746] min-w-[170px] rounded-md shadow-xl overflow-hidden z-50">
              <Link
                to="/admin/login"
                className="block px-5 py-3 hover:bg-[#eefaf7] text-sm"
                onClick={() => setUserDropdownOpen(false)}
              >
                Admin Login
              </Link>

              <Link
                to="/login"
                className="block px-5 py-3 hover:bg-[#eefaf7] text-sm"
                onClick={() => setUserDropdownOpen(false)}
              >
                User Login
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/cart"
          className="hidden sm:flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 5h2l2 10h8l2-7H8"></path>
          </svg>
        </Link>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[50px] left-0 w-full bg-[#004638] px-6 py-6 z-40 shadow-xl md:hidden">
          <div className="flex flex-col gap-5 text-sm font-light">
            <button
              onClick={() => scrollToSection("shop-now")}
              className="text-left"
            >
              Shop
            </button>

            <div className="flex flex-col gap-3">
              <p className="text-white/70 text-sm">Products</p>

              <button
                onClick={() => scrollToSection("new-arrival-section")}
                className="text-left pl-4"
              >
                → New Arrival
              </button>

              <button
                onClick={() => scrollToSection("plant-stand-section")}
                className="text-left pl-4"
              >
                → Plant Stands
              </button>
            </div>

            <button
              onClick={() => scrollToSection("contact-section")}
              className="text-left"
            >
              Contact
            </button>

            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              User Login
            </Link>

            <Link to="/admin/login" onClick={() => setMobileMenuOpen(false)}>
              Admin Login
            </Link>

            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;