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