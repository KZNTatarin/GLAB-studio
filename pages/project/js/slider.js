var swiper = new Swiper(".mySwiper", {

    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    speed: 800,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    breakpoints: {

        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            speed: 500,
        },

        767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            speed: 800,
        },

        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }
});
