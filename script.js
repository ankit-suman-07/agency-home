document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle mobile menu and hamburger icon
    hamburgerMenu.addEventListener("click", function () {
        hamburgerMenu.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    // Hide mobile menu and reset hamburger icon on menu item click
    const mobileLinks = document.querySelectorAll(".mobile-menu a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", function () {
            hamburgerMenu.classList.remove("active");
            mobileMenu.classList.remove("active");
        });
    });
});