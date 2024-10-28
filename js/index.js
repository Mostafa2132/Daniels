let nav = document.querySelector("nav");
let navImg = document.getElementById("nav-img");
let links = document.querySelectorAll(" .nav-link   ");



window.addEventListener("scroll", function () {
  if (scrollY >= 400) {
    nav.style.background = "#fff";
    // nav.querySelectorAll('a').color="red !important";

    nav.style.boxShadow = "0px 30px 50px rgba(0, 0, 0, 0.05)";
    navImg.src = "../imgs/logo-dark.png";
  } else {
    nav.style.background = "transparent";
    navImg.src = "../imgs/logo.png";
  }
});
