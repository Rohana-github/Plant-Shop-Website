// navbar load
document.getElementById("navbar").innerHTML = navbar;


// mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
// Shop scroll
document.addEventListener("click", function (e) {

  if (e.target.id === "shopLink") {

    e.preventDefault();

    const section =
      document.getElementById("shop-now");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});
// Shop Now slider arrow
const shopArrow = document.getElementById("shopArrow");
const shopSlider = document.getElementById("shopSlider");
const viewAllBtn = document.getElementById("viewAllBtn");

if (shopArrow && shopSlider) {
  shopArrow.addEventListener("click", () => {
    shopSlider.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  });
}

// Get Direction button
const getDirectionBtn =
document.getElementById("getDirectionBtn");

const locationMap =
document.getElementById("locationMap");

if (getDirectionBtn && locationMap) {

  getDirectionBtn.addEventListener("click", (e) => {

    e.preventDefault();

    locationMap.src =
      "https://maps.google.com/maps?q=Nasirabad%2C%20Chattogram%2C%20Bangladesh&t=&z=17&ie=UTF8&iwloc=&output=embed";

    locationMap.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
}
// Contact scroll
document.addEventListener("click", function (e) {
  if (e.target.id === "contactLink" || e.target.id === "mobileContactLink") {
    e.preventDefault();

    const contactSection = document.getElementById("contact-section");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  }
});
// Products dropdown navigation
document.addEventListener("click", function (e) {

  // New Arrival
  if (
    e.target.id === "newArrivalLink" ||
    e.target.id === "mobileNewArrival"
  ) {

    e.preventDefault();

    document
      .getElementById("new-arrival-section")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  // Plant Stand
  if (
    e.target.id === "plantStandLink" ||
    e.target.id === "mobilePlantStand"
  ) {

    e.preventDefault();

    document
      .getElementById("plant-stand-section")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }
});
// Search icon scroll
document.addEventListener("click", function (e) {

  if (e.target.closest("#searchNavBtn")) {

    e.preventDefault();

    document
      .getElementById("search-section")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }
});
// User dropdown
const userMenuBtn =
document.getElementById("userMenuBtn");

const userDropdown =
document.getElementById("userDropdown");

if (userMenuBtn && userDropdown) {

  userMenuBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    userDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {

    userDropdown.classList.add("hidden");
  });
}