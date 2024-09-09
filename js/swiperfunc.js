// função de carrossel, com o swiper

var swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination : {
        el: ".swiper-pagination",
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    slidesPerView: 3,
    spaceBetween: 5,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5,
        }
    }
});