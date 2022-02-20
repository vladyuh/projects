window.onload = function () {
    //Remove animations on load
    document.querySelector('body').classList.remove('perf-no-animation');
}
window.onscroll = function () {
    //fixed header
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});
//Mobile menu init
function mobileInit() {
    var toggle = document.querySelector('.header-toggle');
    var close = document.querySelector('.mobileMenu-header__toggle')
    var menu = document.querySelector('.mobileMenu');
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.add('opened');
    });
    close.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.remove('opened');
    });
    var links = document.querySelectorAll('.mobileMenu-nav__links .link-hover');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            menu.classList.remove('opened');
        })
    }
}
mobileInit();

let html = document.getElementsByTagName('html')[0];
/* popup open */
var popupLinks = document.querySelectorAll('button[data-popup]');
for (var i = 0; i < popupLinks.length; i++) {
    popupLinks[i].addEventListener('click', function () {
        var id = this.getAttribute('data-popup');
        if (document.querySelectorAll('.mobileMenu')[0].classList.contains('opened')) {
            document.querySelectorAll('.mobileMenu')[0].classList.remove('opened');
        }
        document.getElementById(id).classList.add('is-active');
        html.classList.add('fixed');
    });
}
/* popup close   */
var popupClose = document.querySelectorAll('.popup-content__close');
for (var i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener('click', function () {
        this.closest('.popup').classList.remove('is-active');
        html.classList.remove('fixed');
    });
}
var popup = document.querySelectorAll('.popup');
for (var i = 0; i < popup.length; i++) {
    popup[i].addEventListener('click', function (e) {
        if (e.target !== e.currentTarget) {} else {
            this.classList.remove('is-active');
            html.classList.remove('fixed');
        }

    });
}
/* form input invalid on submit   */
var submit = document.querySelectorAll('input[type=submit]');
for (var i = 0; i < submit.length; i++) {
    submit[i].addEventListener('click', function () {
        this.closest('form').classList.add('submitted');
    });
}
//smooth scroll to view
function scrollToTargetAdjusted(elem) {
    var element = document.getElementById(elem);
    var headerOffset = 85;
    var elementPosition = element.offsetTop;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
const anchors = document.querySelectorAll(
    '.header-nav__ul li a[href*="#"],' +
    '.footer-nav__ul li a[href*="#"],' +
    '.mobileMenu-nav a,' +
    '.mainpageBanner-content__btns a.button[href*="#"]'
)
anchors.forEach(function (anchor, item) {
    anchor.addEventListener('click', function (e) {
        if (window.location.pathname == '/') {
            e.preventDefault();
        }
        const blockID = this.getAttribute('href').substr(1);
        scrollToTargetAdjusted(blockID);

    })
})