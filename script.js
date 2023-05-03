const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");
// const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
//   header.style=("box-shadow: 0 0 3px 0 rgb(60, 59, 59)");
});