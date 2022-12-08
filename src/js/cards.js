// const goods = [
//     {
//         "title": "Диван кожаный",
//         "partNumber": "R-94",
//         "price": "94 990",
//         "rating": "5,0",
//     },
//     {
//         "title": "Диван апартековый",
//         "partNumber": "T-75",
//         "price": "69 999",
//         "rating": "4,9",
//     },
//     {
//         "title": "Диван тканевый",
//         "partNumber": "D-31",
//         "price": "28 490",
//         "rating": "4,8",
//     },
//     {
//         "title": "Диван велюровый",
//         "partNumber": "Y-68",
//         "price": "22 990",
//         "rating": "4,8",
//     },
//     {
//         "title": "Диван из шинила",
//         "partNumber": "W-95",
//         "price": "22 990",
//         "rating": "4,8",
//     },
//     {
//         "title": "Диван флоковый",
//         "partNumber": "G-41",
//         "price": "17 990",
//         "rating": "4,8",
//     },
//     {
//         "title": "Диван шиниловый",
//         "partNumber": "V-43",
//         "price": "19 990",
//         "rating": "4,8",
//     },
//     {
//         "title": "Диван велюровый",
//         "partNumber": "S-99",
//         "price": "19 990",
//         "rating": "4,7",
//     },
//     {
//         "title": "Диван из кожзама",
//         "partNumber": "F-85",
//         "price": "26 990",
//         "rating": "4,7",
//     },
//     {
//         "title": "Диван флоковый",
//         "partNumber": "H-64",
//         "price": "25 990",
//         "rating": "4,6",
//     },
//     {
//         "title": "Диван флоковый",
//         "partNumber": "H-58",
//         "price": "23 990",
//         "rating": "4,6",
//     },
//     {
//         "title": "Диван из кожзама",
//         "partNumber": "R-43",
//         "price": "33 990",
//         "rating": "4,6",
//     },
//     {
//         "title": "Диван из шинила",
//         "partNumber": "C-42",
//         "price": "18 990",
//         "rating": "4,6",
//     },
//     {
//         "title": "Диван велюровый",
//         "partNumber": "U-58",
//         "price": "21 990",
//         "rating": "4,6",
//     },
//     {
//         "title": "Диван флоковый",
//         "partNumber": "F-41",
//         "price": "17 990",
//         "rating": "4,5",
//     },
//     {
//         "title": "Диван велюровый",
//         "partNumber": "R-85",
//         "price": "34 990",
//         "rating": "4,5",
//     },
//     {
//         "title": "Диван велюровый",
//         "partNumber": "S-44",
//         "price": "19 990",
//         "rating": "4,5",
//     },    {
//         "title": "Диван из шинила",
//         "partNumber": "C-80",
//         "price": "20 990",
//         "rating": "4,4",
//     },
// ]

// const sales = [
//     {
//         "title": "Кресло велюровое",
//         "partNumber": "X-24",
//         "price": "24 990",
//         "sale": "-9 000",
//         "newPrice": "15 990",
//     },
//     {
//         "title": "Диван тканевый",
//         "partNumber": "Z-44",
//         "price": "32 990",
//         "sale": "-10 000",
//         "newPrice": "22 990",
//     },
//     {
//         "title": "Будильник",
//         "partNumber": "Quartz-23",
//         "price": "1 890",
//         "sale": "-600",
//         "newPrice": "1 290",
//     },
//     {
//         "title": "Мини-скульптура",
//         "partNumber": "Oh my deer",
//         "price": "990",
//         "sale": "-300",
//         "newPrice": "690",
//     },
//     {
//         "title": "Диван вел-флок",
//         "partNumber": "Z-85",
//         "price": "32 990",
//         "sale": "-10 000",
//         "newPrice": "22 990",
//     },
//     {
//         "title": "Термометр + гидрометр",
//         "partNumber": "H-18",
//         "price": "2 090",
//         "sale": "-700",
//         "newPrice": "1 390",
//     },
                        
// ]
// class Good {
//     constructor(props) {
//         this.title = props.title;
//         this.partNumber = props.partNumber;
//         this.price = props.price;
//         this.rating = props.rating;
//         this.sale = props.sale;
//         this.newPrice = props.newPrice;
//     }
//     createCard() {
//         const card = document.createElement('div'),
//             cardTitle = document.createElement('h4'),
//             cardImg = document.createElement('div'),
//             cardPartNumber = document.createElement('h4'),
//             cardRating = document.createElement('span'),
//             cardPrice = document.createElement('div'),
//             cardBtn = document.createElement('button'),
//             cardSale = document.createElement('div'),
//             cardNewPrice = document.createElement('div')

//         card.classList.add('goods__item')
//         card.setAttribute("id", this.partNumber) 
//         cardTitle.classList.add('goods__title')
//         cardPartNumber.classList.add('goods__title')
//         cardRating.classList.add('goods__rating')
//         cardPrice.classList.add('goods__price')
//         cardBtn.classList.add('goods__btn')
//         cardImg.classList.add('goods__img')
//         cardSale.classList.add('goods__sale')
//         cardNewPrice.classList.add('goods__new-price')

//         cardSale.textContent = this.sale
//         cardNewPrice.textContent = this.newPrice
//         cardTitle.textContent = this.title
//         cardPartNumber.textContent = `“${this.partNumber}”`
//         cardRating.textContent = this.rating
//         cardPrice.textContent = this.price
//         cardBtn.textContent = "Купить"

//         if (this.sale !== "") {
//             card.append(cardSale, cardImg, cardTitle, cardPartNumber, cardNewPrice, cardPrice, cardBtn)
//         } else {
//             card.append(cardRating, cardImg, cardTitle, cardPartNumber, cardPrice, cardBtn)
//         }
//         return card
//     }
// }

// const blockOfGoods = document.querySelector('.goods')
// const blockOfSales = document.querySelector('.sales')
// const btnOfGoods = document.createElement('button')
// btnOfGoods.classList.add('goods__btn-more')
// btnOfGoods.textContent = "Смотреть больше товаров"
// console.log(blockOfGoods)
// for (item of goods) {
//     console.log(item)
//     let cards = new Good({
//         title: item.title,
//         partNumber: item.partNumber,
//         price: item.price,
//         rating: item.rating,
//     }
//     )
//     let card = cards.createCard()
//     // blockOfGoods.append(card)
//     // blockOfGoods.append(btnOfGoods)
// }
// for (item of sales) {
//     console.log(item)
//     let saleCards = new Good({
//         title: item.title,
//         partNumber: item.partNumber,
//         price: item.price,
//         sale: item.sale,
//         newPrice: item.newPrice,
//     })
//     let saleCard = saleCards.createCard()
//     // blockOfSales.append(saleCard)
// }
document.addEventListener('DOMContentLoaded', () => {
    const goodsItems = document.querySelectorAll('.goods__item')
    console.log(goodsItems)
    const btnMore = document.querySelector('.goods__btn-more')
    let width = document.body.clientWidth
    console.log(width)
    let itemsToShow = 8;
    let itemsNextToShow = 4;
    if (width < 1200) {
        itemsToShow = 6
        itemsNextToShow = 3
    }
    if (width < 968) {
        itemsToShow  = 6
        itemsNextToShow = 4
    }
    const itemslength = goodsItems.length;

    for (i = itemsToShow; i < itemslength; i++) {
        goodsItems[i].classList.add('hidden')
        console.log(i)
    }
    btnMore.addEventListener('click', () => {
        itemsToShow += itemsNextToShow;
        const arrGoods = Array.from(goodsItems)
        const visitTems = arrGoods.slice(0, itemsToShow)
        console.log(arrGoods)
        visitTems.forEach(el => el.classList.remove('hidden'))
        if (itemslength === visitTems.length) {
            btnMore.classList.add('hidden')
        }
    })

    const burger = document.querySelector('.header__burger')
    const burgerCls = document.querySelector('.header__burger-cls')
    const menu = document.querySelector('.header__burger-menu')

    burger.addEventListener('click', () => {
        menu.classList.toggle('burger-active')
        console.log(menu)
    })
    burgerCls.addEventListener('click', () => {
        menu.classList.toggle('burger-active')
    })
    
    })
