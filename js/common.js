// Появление элементов
if (window.matchMedia("(max-width: 1200.9px) and (max-height: 1000.9px), (max-height: 600.9px)").matches) {
    var options = {threshold: 0.1};
}
else {
    options = {threshold: 0.2};
}
var callback = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_transform');
        }
    });
    if (document.querySelector('.home-section1 .container').classList.contains('_transform')) {
        observer.unobserve(document.querySelector('.home-section1 .container'));
    }
};
var observer = new IntersectionObserver(callback, options);
var animItems = document.querySelectorAll('.anim-item');
animItems.forEach(animItem => {
    observer.observe(animItem);
});

// Полоса прокрутки
let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
window.addEventListener("resize", function() {
    scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
});

// Бургер-меню
const burgerIcon = document.querySelector('.header__burger-icon');
const burgerContent = document.querySelector('.header__burger-content');
const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('header');
const consultationBtn = document.querySelector('.consultation-btn');
burgerIcon.addEventListener('click', function() {
    document.body.classList.toggle('_lock');
    burgerIcon.classList.toggle('_active');
	burgerContent.classList.toggle('_active');
    if (this.classList.contains('_active')) {
        wrapper.style.cssText = `padding-right: ${scrollbarWidth}px;`;
        header.style.cssText = `padding-right: ${scrollbarWidth}px;`;
        consultationBtn.style.cssText = `margin-right: ${scrollbarWidth}px;`;
    }
    else {
        wrapper.style.cssText = '';
        header.style.cssText = '';
        consultationBtn.style.cssText = '';
    }
});

// Контакты
const headerContacts = document.querySelector('.header__contacts');
document.querySelector('header button').addEventListener('click', function() {
    headerContacts.classList.toggle('_visible');
});
document.body.addEventListener("click", function(e){
    if (!e.target.closest('.header__contacts') && !e.target.closest('header button') && headerContacts.classList.contains('_visible')) {
        headerContacts.classList.remove('_visible');
    }
});

// Модальное окно
const modalWindow = document.querySelector('.modal-window');
consultationBtn.addEventListener('click', function() {
    document.body.classList.add('_lock');
    modalWindow.style.cssText = `padding-right: ${scrollbarWidth}px;`;
    wrapper.style.cssText = `padding-right: ${scrollbarWidth}px;`;
    header.style.cssText = `padding-right: ${scrollbarWidth}px;`;
    consultationBtn.style.cssText = `margin-right: ${scrollbarWidth}px;`;
    modalWindow.classList.add('_visible');
});
const modalWindowCross = document.querySelector('.form2-wrapper__cross');
modalWindowCross.addEventListener('click', function() {
    document.body.classList.remove('_lock');
    modalWindow.style.cssText = '';
    wrapper.style.cssText = '';
    header.style.cssText = '';
    consultationBtn.style.cssText = '';
    modalWindow.classList.remove('_visible');
});