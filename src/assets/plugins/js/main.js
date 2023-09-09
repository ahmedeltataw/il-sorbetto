import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

var swiper = new Swiper('.heroSlider', {
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },

});
var swiper = new Swiper(".flavorsSlider", {
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },
    loop: true,
    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper(".wholesaleSlider", {
    effect: "cards",
    grabCursor: true,
});
var swiper = new Swiper(".reviewSlider", {
   
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,

    },
    loop: true,
    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
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
            spaceBetween: 30,
        },
    },
});