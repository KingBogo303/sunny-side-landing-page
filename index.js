const header = document.querySelector("header");

var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

hamburger.addEventListener("click", function () {
  this.classList.toggle("click");
  navbar.classList.toggle("open");
});

window.onscroll = () => {
  navbar.classList.remove("open");
};
