import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.heroSlider', {
modules: [Navigation, Pagination],
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
loop: true,
autoplay: true,
autoplaySpeed: 3500,
});
