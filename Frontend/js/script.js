const contactButton = document.querySelector("#contact-button");
const contactModal = document.querySelector("#contact-modal");
const closeButton = document.querySelector("#close-button");
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const aboutButton = document.querySelector("#about-button");
const aboutModal = document.querySelector("#about-modal");
const aboutCloseButton = document.querySelector("#about-close-button");


contactButton.addEventListener("click", function () {
    contactModal.classList.add("active");
});

closeButton.addEventListener("click", function () {
    contactModal.classList.remove("active");
});

contactModal.addEventListener("click", function (event) {
    if (event.target === contactModal) {
        contactModal.classList.remove("active");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        contactModal.classList.remove("active");
    }
});

menuButton.addEventListener("click", function () {
    console.log("MENÚ PRESIONADO");
    menu.classList.toggle("active");
    console.log(menu.classList);
});

document.addEventListener("click", function (event) {

    if (
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        menu.classList.remove("active");
    }

});

aboutButton.addEventListener("click", function () {
    aboutModal.classList.add("active");
});

aboutCloseButton.addEventListener("click", function () {
    aboutModal.classList.remove("active");
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        aboutModal.classList.remove("active");
    }
});

aboutModal.addEventListener("click", function (event) {
    if (event.target === aboutModal) {
        aboutModal.classList.remove("active");
    }
});