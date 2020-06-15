import { gsap, Power2 } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)

var windowScrollTime = 1.2;
var menuOpenTime = 0.5;
var windowScrollEasing = Power2.easeInOut;

function setupMenuToggle() {
    var toggle = document.getElementById('menu-toggle');
    var target = document.getElementById('menu-target');
    toggle.addEventListener("click", function(event) {
        event.preventDefault();
        // target.classList.toggle('open');

        if (!target.classList.contains("open")) {
            // Open the menu
            gsap.set(target, {height:"auto"});
            gsap.from(target, menuOpenTime, {height:0, ease: windowScrollEasing});
            target.classList.add("open");
        } else {
            // Close the menu
            gsap.to(target, menuOpenTime, {height:0, ease: windowScrollEasing, onComplete: function() {
                gsap.set(target, {clearProps: "height"});
            }});
            target.classList.remove("open");
        }
    });
}

function setupNavigation() {
    document.querySelectorAll('.nav-anchor').forEach((element, index) => {
        element.addEventListener("click", function(event) {
            event.preventDefault();

            var header = document.querySelector('header').offsetHeight;
            var href = event.target.getAttribute('href');
            document.querySelector('.menu').classList.remove('open');

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