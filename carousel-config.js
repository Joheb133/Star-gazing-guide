const locations = new Swiper(".locations", {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 80,
    mousewheel: true,
    navigation: {
        nextEl: "#nav-down",
        prevEl: "#nav-up"
    },
    breakpoints: {
        720: {
            direction: "vertical",
        }
    },
    speed: 800,
    loop: true,
    simulateTouch: false,
});

const telescope = new Swiper(".telescopes", {
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

const galleryTop = new Swiper(".gallery-top", {
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

const galleryBottom = new Swiper(".gallery-bottom", {
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
