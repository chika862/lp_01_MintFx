new Swiper(".swiper", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
  },
});
