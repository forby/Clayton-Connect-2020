function setupMenuToggle() {
    var toggle = document.getElementById('menu-toggle');
    var target = document.getElementById('menu-target');
    toggle.addEventListener("click", function(el) {
        target.classList.toggle('open');
    });
}

// GO
window.addEventListener('load', function() {
    setupMenuToggle();
});