// JavaScript for mobile navigation toggle
const mobileNavToggle = document.querySelector(".nav-menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
// JavaScript to toggle the class 'active' on menu-toggle click
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
});


// JavaScript for scroll-to-top button
const scrollBtn = document.querySelector(".scroll-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
