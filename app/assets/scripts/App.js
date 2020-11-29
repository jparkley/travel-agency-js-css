import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

// let stickyHeader = new StickyHeader();

new RevealOnScroll(document.querySelectorAll(".package-item"), 90); 
new RevealOnScroll(document.querySelectorAll(".testimonial-item"), 85);

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept();
}