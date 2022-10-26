new Swiper(".locations", {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 80,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    speed: 800,
    loop: true,
    simulateTouch: false,
});