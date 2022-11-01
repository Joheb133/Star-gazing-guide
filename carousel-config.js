new Swiper(".locations", {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 80,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: "#nav-down",
        prevEl: "#nav-up"
    },
    speed: 800,
    loop: true,
    simulateTouch: false,
});

new Swiper(".telescopes", {
    direction: 'horizontal',
    slidesPerView: 3.05,
    spaceBetween: 44,
    centeredSlides: true,
    navigation: {
        nextEl: "#telescopes-next",
        prevEl: "#telescopes-prev"
    },
    loop: true,
    speed: 500,
    simulateTouch: false,
});