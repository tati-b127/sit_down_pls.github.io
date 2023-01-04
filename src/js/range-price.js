const rangePrice = document.getElementById('range-price');

if (rangePrice) {

    noUiSlider.create(rangePrice, {
        start: [500, 299999],
        connect: true,
        step: 1,
        range: {
            'min': 500,
            'max': 299999
        }
    });
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    const arrPrice = [minPrice, maxPrice];

    rangePrice.noUiSlider.on('update', function (values, handle) {
        arrPrice[handle].value = Math.round(values[handle])
    })

    const setRangePrice = function (i, value) {
        let arr = [null, null];
        arr[i] = value;
        rangePrice.noUiSlider.set(arr)
    }

    arrPrice.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangePrice(index, e.currentTarget.value)
        })
    })

};