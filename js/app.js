const menu = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

function toggle() {
  menu.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

menu.addEventListener("click", toggle);
