/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let x = document.getElementById("product-content");
let y = document.getElementById("solution-content");

function productBtn() {
  x.classList.toggle("dropdown-content");
}

function solutionsBtn() {
  y.classList.toggle("solutions-dropdown-content");
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }

// }
