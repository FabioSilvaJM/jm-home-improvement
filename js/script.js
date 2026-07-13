console.log("JM Home Improvement");
const menuButton = document.querySelector(".menu-toggle");
const navigationMenu = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
});

navigationMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigationMenu.classList.remove("active");
    });
});