document.addEventListener('DOMContentLoaded', function() {
    fetch('./includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.footer-container').innerHTML = data;
        });
});