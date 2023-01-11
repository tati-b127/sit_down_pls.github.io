const slideGallerySwiper = document.querySelectorAll('.product__modal .product__swiper-1 .swiper-slide');
const activeSlide = document.querySelectorAll('.product__block_1 .product__swiper-2 .swiper-slide');
const overlay = document.querySelector('.product__overlay');
const modalSwiper = document.querySelector('.product__modal_swiper');
const modalBye = document.querySelector('.product__modal_bye');
const btnModalCls = document.querySelectorAll('.product__modal-cls');
const btnBye = document.querySelectorAll('.product__btn-bye');
const modalCallback = document.querySelector('.product__modal_callback');
const btnCallbackSend = document.querySelector('.product__modal_bye .callback__form .callback__btn');
const callbackInput = document.querySelectorAll('.product__modal_bye .callback__input');
const callBackForm = document.getElementById('form-bye');

console.log(btnBye);

if (slideGallerySwiper) {
    slideGallerySwiper.forEach((i) => {
        i.style.cursor = 'pointer';
    })
    console.log(activeSlide)
    activeSlide.forEach((e) => {
        e.style.cursor = 'pointer';
        e.addEventListener('click', () => {
            overlay.classList.add('product__overlay_visible')
            modalSwiper.classList.add('product__modal_visible')
            document.body.style.overflowY = 'hidden';
        });
    });
    if (btnModalCls) {
        btnModalCls.forEach((e) => {
            e.addEventListener('click', () => {
                overlay.classList.remove('product__overlay_visible')
                modalSwiper.classList.remove('product__modal_visible')
                document.body.style.overflowY = 'inherit';
            })
        });
    };
};
if (btnBye) {
    console.log('hi btn');
    btnBye.forEach((e) => {
        e.addEventListener('click', () => {
            console.log('btn clicked');
            overlay.classList.add('product__overlay_visible');
            modalBye.classList.add('product__modal_visible');
            document.body.style.overflowY = 'hidden';   
        })
    })
    if (btnModalCls) {
        btnModalCls.forEach((e) => {
           e.addEventListener('click', () => {
                callbackInput.forEach((e) => {
                    e.value = "";
                    window.validation2.refresh();
                });
                overlay.classList.remove('product__overlay_visible')
                modalBye.classList.remove('product__modal_visible')
                document.body.style.overflowY = 'inherit';
            });
        });
    };
};
if (btnCallbackSend) {
    console.log(btnCallbackSend)
    btnCallbackSend.addEventListener('click', () => {
        const sendForm = function () {
            console.log("success");
            modalBye.classList.remove('product__modal_visible');
            modalCallback.classList.add('product__modal_visible');
            document.body.style.overflowY = 'hidden';
        };
        window.validation2.onSuccess(sendForm);
    });
    if (btnModalCls) {
        btnModalCls.forEach((e) => {
            e.addEventListener('click', () => {
                overlay.classList.remove('product__overlay_visible')
                modalCallback.classList.remove('product__modal_visible')
                document.body.style.overflowY = 'inherit';
            });
        })
    };
};

