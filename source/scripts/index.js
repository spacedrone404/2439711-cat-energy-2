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
