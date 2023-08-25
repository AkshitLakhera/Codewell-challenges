const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile_nav");

hamburgerMenu.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});
