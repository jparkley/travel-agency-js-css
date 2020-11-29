import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class StickyHeader {
    constructor() {
        this.partSections = document.querySelectorAll('.part-section');        
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    events() {
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
        window.addEventListener('resize', debounce(() => {            
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    runOnScroll() {
        this.determineScrollDirection();
        this.partSections.forEach(element => this.calcSection(element));
    }

    determineScrollDirection() {
        if ( window.scrollY > this.previousScrollY) {
            this.scrollDirection = 'down';
        } else {
            this.scrollDirection = 'up'
        }
        this.previousScrollY = window.scrollY;
    }

    calcSection(element) {
        if (window.scrollY + this.browserHeight > element.offsetTop 
            && window.scrollY < element.offsetTop + element.offsetHeight) {
            let scrollPercent = element.getBoundingClientRect().y / this.browserHeight * 100;
            if (scrollPercent < 10 && scrollPercent > -0.1 && this.scrollDirection == 'down' 
            || scrollPercent < 33  && this.scrollDirection == 'up') {
                let matchingLink = element.getAttribute('data-matching-link');
                document.querySelectorAll(`.nav-main a:not(${matchingLink})`).forEach(element => element.classList.remove('current-link'));
                document.querySelector(matchingLink).classList.add('current-link');
            }
        }
    }
}

export default StickyHeader;