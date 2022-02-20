export function mobileInit() {

    var toggle = document.querySelector('.header-toggle');
    var close = document.querySelector('.mobileMenu-header__toggle')
    var menu = document.querySelector('.mobileMenu');

    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.add('opened');
    });

    close.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.remove('opened');
    });

    var links = document.querySelectorAll('.mobileMenu-nav__links .link-hover');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            menu.classList.remove('opened');
        })
    }
}