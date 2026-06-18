const navbar = `
<nav id="navbar"
class="fixed top-0 left-0 w-full h-[90px]
px-6 md:px-12 lg:px-24
flex items-center justify-between
text-white z-[999]
transition-all duration-300">
<nav class="fixed top-0 left-0 w-full h-[50px] px-6 md:px-12 lg:px-24 flex items-center justify-between text-white bg-[#005746] z-[999] shadow-sm">
  <!-- Desktop Menu -->
  <div class="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-light">
    <a href="#"
id="shopLink"
class="hover:text-white/70 duration-300">

  Shop

</a>

    <!-- Products Dropdown -->
<div class="relative group">

  <button class="flex items-center gap-1 hover:text-white/70 duration-300">
    Products

    <svg class="w-3 h-3 mt-[2px] group-hover:rotate-180 duration-300"
      viewBox="0 0 20 20"
      fill="currentColor">

      <path d="M5.5 7.5L10 12l4.5-4.5H5.5z"></path>
    </svg>
  </button>

  <!-- Dropdown -->
  <div
    class="absolute top-full left-0 mt-3
    bg-white text-[#005746]
    shadow-xl rounded-md
    min-w-[180px]
    opacity-0 invisible
    group-hover:opacity-100
    group-hover:visible
    transition-all duration-300 z-50">

    <a href="#"
      id="newArrivalLink"
      class="block px-5 py-3 hover:bg-[#eefaf7]">
      New Arrival
    </a>

    <a href="#"
      id="plantStandLink"
      class="block px-5 py-3 hover:bg-[#eefaf7]">
      Plant Stands
    </a>

  </div>
</div>

   <a href="#"
   id="contactLink"
   class="hover:text-white/70 duration-300">
  Contact
</a>
  
  </div>

  <!-- Mobile Menu Button -->
<!-- Mobile Menu Button -->
<button id="menuBtn"
  class="md:hidden flex flex-col justify-center items-center gap-1 z-50 w-10 h-10">

  <span class="w-6 h-[2px] bg-white rounded-full duration-300"></span>
  <span class="w-6 h-[2px] bg-white rounded-full duration-300"></span>
  <span class="w-6 h-[2px] bg-white rounded-full duration-300"></span>

</button>

  <!-- Logo Center -->
  <div class="absolute left-1/2 -translate-x-1/2 text-center leading-none">
    <h1 class="text-xl md:text-2xl font-bold">
      Plantify
    </h1>

    <p class="text-[11px] italic font-light mt-0.2">
      Garden
    </p>
  </div>

  <!-- Icons -->
  
  <div class="flex items-center gap-4 md:gap-5 z-50">

    <svg id="searchNavBtn" class="w-5 h-5 cursor-pointer"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">

      <circle cx="11" cy="11" r="7"></circle>
      <path d="M20 20L17 17"></path>
    </svg>

   <!-- User Dropdown -->
<div class="relative hidden sm:flex items-center">

  <button id="userMenuBtn"
    class="flex items-center justify-center w-5 h-5">

    <svg
      class="w-5 h-5 cursor-pointer"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">

      <circle cx="12" cy="8" r="4"></circle>
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
    </svg>

  </button>

  <!-- Dropdown -->
  <div
    id="userDropdown"
    class="hidden absolute right-0 top-[45px]
    bg-white text-[#005746]
    min-w-[170px]
    rounded-md shadow-xl overflow-hidden z-50">

    <a href="admin-login.html"
      class="block px-5 py-3 hover:bg-[#eefaf7] text-sm">
      Admin Login
    </a>

    <a href="user-login.html"
      class="block px-5 py-3 hover:bg-[#eefaf7] text-sm">
      User Login
    </a>

  </div>

</div>

    <svg class="w-5 h-5 hidden sm:block cursor-pointer"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">

      <path d="M5 5h2l2 10h8l2-7H8"></path>
    </svg>
  </div>

  <!-- Mobile Dropdown -->
  <div id="mobileMenu"
    class="hidden absolute top-[90px] left-0 w-full bg-[#004638] px-6 py-6 z-40 shadow-xl md:hidden">

    <div class="flex flex-col gap-5 text-sm font-light">

      <a href="#">Shop</a>

     <div class="flex flex-col gap-3">

  <p class="text-white/70 text-sm">
    Products
  </p>

  <button id="mobileNewArrival"
    class="text-left pl-4">
    → New Arrival
  </button>

  <button id="mobilePlantStand"
    class="text-left pl-4">
    → Plant Stands
  </button>

</div>

     <a href="#" id="mobileContactLink">Contact</a>
    </div>
  </div>
</nav>
`;