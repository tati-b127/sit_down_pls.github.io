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
    nextEl: '.sales .swiper-button-next',
    prevEl: '.sales .swiper-button-prev',
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
});
const swiper3 = new Swiper('#swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  effect: 'slide',
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: '.articles .swiper-button-next',
    prevEl: '.articles .swiper-button-prev',
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
const swiperProduct = new Swiper(".product__block_1 .product__swiper-1", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    580: {
      // direction: 'vertical',
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
const swiperProduct2 = new Swiper(".product__block_1 .product__swiper-2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiperProduct,
  },
});
const swiperProductModal = new Swiper(".product__modal .product__swiper-1", {
  loop: true,
  spaceBetween: 50,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".product__swiper-1 .swiper-button-next",
    prevEl: ".product__swiper-1 .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    // when window width is >= 480px
    580: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    986: {
      slidesPerView: 3,
      spaceBetween: 78
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 78
    }
  },
});
const swiperProduct2Modal = new Swiper(".product__modal .product__swiper-2", {
  loop: true,
  spaceBetween: 50,
  thumbs: {
    swiper: swiperProductModal,
  },
});
const swiper4 = new Swiper('#swiper4', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  effect: 'slide',
  // loop: true,
  spaceBetween: 32,
  // slidesPerGroup: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.product__similar .swiper-button-next',
    prevEl: '.product__similar .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    920: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  },
}); 