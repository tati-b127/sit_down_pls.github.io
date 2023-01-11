const swiper = new Swiper('#swiper1', {
  direction: 'horizontal',
  speed: 600,
  loop: true,
  slidesPerView: 1,
  effect: 'slide',
  autoplay: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const swiper2 = new Swiper('#swiper2', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  effect: 'slide',
  spaceBetween: 32,
  slidesPerGroup: 3,

  navigation: {
    nextEl: '.sales .swiper-button-next',
    prevEl: '.sales .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
});
const swiper3 = new Swiper('#swiper3', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  effect: 'slide',
  spaceBetween: 32,

  navigation: {
    nextEl: '.articles .swiper-button-next',
    prevEl: '.articles .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    986: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  }
});
const swiperProduct = new Swiper(".product__block_1 .product__swiper-1", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    580: {
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
  spaceBetween: 52,
  // slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".product__swiper-1 .swiper-button-next",
    prevEl: ".product__swiper-1 .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 52
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    986: {
      slidesPerView: 3,
      spaceBetween: 78
    },
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
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  effect: 'slide',
  spaceBetween: 32,

  navigation: {
    nextEl: '.similar .swiper-button-next',
    prevEl: '.similar .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  },
}); 