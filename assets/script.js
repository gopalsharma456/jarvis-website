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

// Close the dropdown menu if the user clicks outside of it

window.onclick = function (event) {
  
  
};

function myFunction(){
  let menuItems = document.getElementById('navbar-items')
  menuItems.classList.toggle('show')
}