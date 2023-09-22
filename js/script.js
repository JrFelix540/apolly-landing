const carouselItems = document.querySelectorAll(".customer__card");
function changeActiveItem(elementId) {
  carouselItems.forEach((item) => {
    item.classList.remove("active");
  });
  document.getElementById(elementId).classList.add("active");
}
const mobileNav = document.querySelector(".mobile__nav-list");
function toggleMenu(action) {
  if (action === "open") {
    mobileNav.classList.add("open");
  }
  if (action === "close") {
    mobileNav.classList.remove("open");
  }
}
