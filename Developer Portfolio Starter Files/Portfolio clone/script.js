const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile_nav");

hamburgerMenu.addEventListener("click", () => {
    console.log("ham clicked")
    mobileNav.classList.toggle("active");
});
