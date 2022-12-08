const swiper = new Swiper('#swiper1', {
  // Optional parameters
  direction: 'horizontal',
  speed: 600,
  loop: true,
  slidesPerView: 1,
  effect: 'slide',
  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const swiper2 = new Swiper('#swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  effect: 'slide',
  // loop: true,
  spaceBetween: 32,
  slidesPerGroup: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,

    }
  }
}); const swiper3 = new Swiper('#swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  effect: 'slide',
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 32
    },
    // when window width is >= 480px
    580: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    986: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  }

});