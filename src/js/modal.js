const slideGallerySwiper = document.querySelectorAll('.product__modal .product__swiper-1 .swiper-slide');
const activeSlide = document.querySelectorAll('.product__block_1 .product__swiper-2 .swiper-slide');
const overlay = document.querySelector('.product__overlay');
const modalSwiper = document.querySelector('.product__modal_swiper');
const modalBye = document.querySelector('.product__modal_bye');
const btnModalCls = document.querySelectorAll('.product__modal-cls');
const btnBye = document.querySelector('.product__btn-bye');
const modalCallback = document.querySelector('.product__modal_callback');
const btnCallbackSend = document.querySelector('.product__modal_bye .callback__form .callback__btn');
const callbackInput = document.querySelectorAll('.product__modal_bye .callback__input');
const callBackForm = document.getElementById('form-bye');

console.log(callbackInput);

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
        });
    });
};
if (btnModalCls) {
    btnModalCls.forEach((e) => {
        e.addEventListener('click', () => {
            overlay.classList.remove('product__overlay_visible')
            modalSwiper.classList.remove('product__modal_visible')
        })
    });
};
if (btnBye) {
    btnBye.addEventListener('click', () => {
        overlay.classList.add('product__overlay_visible')
        modalBye.classList.add('product__modal_visible')
    });
    if (btnModalCls) {
        btnModalCls.forEach((e) => {
           e.addEventListener('click', () => {
                callbackInput.forEach((e) => {
                    e.value = "";
                    window.validation2.refresh();
                });
                overlay.classList.remove('product__overlay_visible')
                modalBye.classList.remove('product__modal_visible')
            });
        })
    };
    if (btnCallbackSend) {
        console.log(btnCallbackSend)
        btnCallbackSend.addEventListener('click', (e) => {
            const sendForm = function () {
                console.log("success");
                modalBye.classList.remove('product__modal_visible');
                modalCallback.classList.add('product__modal_visible');
            }; 
            window.validation2.onSuccess(sendForm)
            // sendForm()  
            // callBackForm.onSuccess(sendForm);
            
            // return;
            // if (callbackInput.forEach((e) => {
            //     e.classList.contains('is-invalid')
            //     console.log(e.classList)
            // })) {
            //     e.preventDefault();
            //     return;
            // } else {
            //     modalBye.classList.remove('product__modal_visible')
            //     modalCallback.classList.add('product__modal_visible')
            // };
        });
        if (btnModalCls) {
            btnModalCls.forEach((e) => {
               e.addEventListener('click', () => {
                    overlay.classList.remove('product__overlay_visible')
                    modalCallback.classList.remove('product__modal_visible')
                });
            })
        };
    
    };
};

