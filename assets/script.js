// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let x = document.getElementById("product-content");
let y = document.getElementById("solution-content");

function productBtn() {
  x.classList.toggle("show");
}

function solutionsBtn() {
  y.classList.toggle("show");
}

function activeClass(id){
  let element = document.getElementById(`${id}`)
  element.classList.toggle('active')

}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function (event) {
  // x.classList.remove('show')
  // y.classList.remove('show')
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


function enquiryInput(id){
  let selectedInput = document.getElementById(`${id}`)
  selectedInput.classList.toggle('selected')
}