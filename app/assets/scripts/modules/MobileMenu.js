import { times } from "lodash";

class MobileMenu {
    constructor() {
        // document.querySelector(".part-header__menu-icon").addEventListener('click', function() {
        //     console.log("clicked");
        // });
        this.menuIcon = document.querySelector(".part-header__menu-icon");
        this.menuContent = document.querySelector(".part-header__menu-content");
        this.btnHolder = document.querySelector('.part-header__btn-holder');
        this.partHeader = document.querySelector('.part-header');
        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        console.log("yes clicked");
        this.menuContent.classList.toggle('part-header__menu-content--visible');
        this.btnHolder.classList.toggle('part-header__btn-holder--invisible');
        this.partHeader.classList.toggle('part-header--expanded');
        this.menuIcon.classList.toggle('part-header__menu-icon--close-x');
        // this.menuIcon.classList.toggle('part-header__menu-icon--close-x');
    }
}

export default MobileMenu;