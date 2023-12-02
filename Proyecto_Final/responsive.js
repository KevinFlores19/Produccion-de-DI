document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.header .nav-links');
    navLinks.classList.toggle('show');
}
