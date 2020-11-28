import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

// let revealOnScroll = new RevealOnScroll();
/* modulizaing */
new RevealOnScroll(document.querySelectorAll(".package-item"), 90); 
new RevealOnScroll(document.querySelectorAll(".testimonial-item"), 85);
let mobileMenu = new MobileMenu();


if (module.hot) {
    module.hot.accept();
}