import { gsap, Power2 } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)

var windowScrollTime = 1.2;
var windowScrollEasing = Power2.easeInOut;

function setupMenuToggle() {
    var toggle = document.getElementById('menu-toggle');
    var target = document.getElementById('menu-target');
    toggle.addEventListener("click", function(event) {
        target.classList.toggle('open');
    });
}

function setupNavigation() {
    document.querySelectorAll('.nav-anchor').forEach((element, index) => {
        element.addEventListener("click", function(event) {
            event.preventDefault();

            var header = document.querySelector('header').offsetHeight;
            var href = event.target.getAttribute('href');

            if (document.querySelector(href) != null) {
                gsap.to(window, {duration:windowScrollTime, scrollTo: {y: href, offsetY: header}, ease: windowScrollEasing});
            } else {
                console.log('nope');
            }
        });
    });
}

// GO
window.addEventListener('load', function() {
    setupMenuToggle();
    setupNavigation();
});