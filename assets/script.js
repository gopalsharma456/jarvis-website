// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let x = document.getElementById("product-content");
let y = document.getElementById("solution-content");

function productBtn(event) {
  x.classList.toggle("show");
  event.stopPropagation();
}

function solutionsBtn(event) {
  y.classList.toggle("show");
  event.stopPropagation();
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function (event) {
  
};

function myFunction() {
  let menuItems = document.getElementById("navbar-items");
  menuItems.classList.toggle("show");
}

var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
