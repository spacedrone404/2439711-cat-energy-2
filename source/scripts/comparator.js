document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const before = document.querySelector(".image-before");
    const container = document.querySelector(".comparator-container");
    let isDragging = false;

    // initial width based on container size
    function updateImageSizes() {
        const containerWidth = container.offsetWidth;
        before.style.width = containerWidth / 2 + "px";
    }


    updateImageSizes();
    window.addEventListener("resize", updateImageSizes);

    // mouse events
    slider.addEventListener("mousedown", function (e) {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });

    document.addEventListener("mousemove", function (e) {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        let x = e.clientX - containerRect.left;

        // keep within bounds
        x = Math.max(0, Math.min(x, containerRect.width));

        const percent = (x / containerRect.width) * 100;
        before.style.width = percent + "%";
        slider.style.left = percent + "%";
    });

    // touch events for mobile
    slider.addEventListener("touchstart", function (e) {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener("touchend", function () {
        isDragging = false;
    });

    document.addEventListener("touchmove", function (e) {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        let x = e.touches[0].clientX - containerRect.left;


        x = Math.max(0, Math.min(x, containerRect.width));

        const percent = (x / containerRect.width) * 100;
        before.style.width = percent + "%";
        slider.style.left = percent + "%";
    });
});
