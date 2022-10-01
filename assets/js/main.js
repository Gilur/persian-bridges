import Swiper from "swiper";
import SwiperCore, { Navigation } from "swiper/core";
import ScrollAnimation from "./ScrollAnimation";

const $ = (e) => document.querySelector(e),
  $$ = (e) => document.querySelectorAll(e);

ScrollAnimation()

// swiper
const swiperOption = {
  loop: true,
  effect: "flip",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
SwiperCore.use([Navigation]);
const swiper = new Swiper(".swiper", swiperOption);
