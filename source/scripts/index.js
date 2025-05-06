// removing no-js classes in one shot loop iteration
[".header", ".menu-nav", ".contacts__maps"].forEach((selector) =>
    document
        .querySelector(selector)
        ?.classList.remove(`${selector.split(".")[1]}--nojs`)
);

document.getElementById("burger")?.addEventListener("click", function () {
    const menuNav = document.querySelector(".menu-nav__list");
    if (menuNav) {
        menuNav.classList.toggle("active");
    }

    const toggleBtn = document.querySelector(".menu-nav__toggle");
    if (toggleBtn) {
        toggleBtn.classList.toggle("active");
    }
});

// Old method
// document.querySelector(".header").classList.remove("header--nojs");
// document.querySelector(".menu-nav").classList.remove("menu-nav--nojs");
// document
//     .querySelector(".contacts__maps")
//     .classList.remove("contacts__maps--nojs");

// document.getElementById("burger").addEventListener("click", () => {
//     document.querySelector(".menu-nav__list").classList.toggle("active");
//     document.querySelector(".menu-nav__toggle").classList.toggle("active");
// });
