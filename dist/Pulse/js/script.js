const slider = tns({
    container: '.carousel__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    speed: 1000,
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

