const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElement = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    counter = document.querySelectorAll('.skills__rating-item-counter'),
    line = document.querySelectorAll('.skills__rating-item-line span');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

counter.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
});