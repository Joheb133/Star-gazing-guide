new Swiper(".locations", {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 80,
    mousewheel: true,
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
    navigation: {
        nextEl: "#telescopes-next",
        prevEl: "#telescopes-prev"
    },
    loop: true,
    speed: 500,
    simulateTouch: false,
});

new Swiper(".gallery-top", {
    direction: "vertical",
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        disableOnInteraction: false
    },
    simulateTouch: false,
    speed: 800,
    breakpoints: {
        896: {
            direction: "horizontal"
        }
    }
})

new Swiper(".gallery-bottom", {
    direction: "vertical",
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        reverseDirection: true,
        disableOnInteraction: false
    },
    simulateTouch: false,
    speed: 800,
    breakpoints: {
        896: {
            direction: "horizontal"
        }
    }
})