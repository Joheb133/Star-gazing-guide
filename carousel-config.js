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
    slidesPerView: "auto",
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

new Swiper(".gallery-top", {
    direction: "horizontal",
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        disableOnInteraction: false
    },
    simulateTouch: false,
    speed: 800,
})

new Swiper(".gallery-bottom", {
    direction: "horizontal",
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        reverseDirection: true,
        disableOnInteraction: false
    },
    simulateTouch: false,
    speed: 800,
})