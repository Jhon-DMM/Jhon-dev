const contactButton = document.querySelector("#contact-button");
const contactModal = document.querySelector("#contact-modal");
const closeButton = document.querySelector("#close-button");
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");



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
    menu.classList.toggle("active");
});