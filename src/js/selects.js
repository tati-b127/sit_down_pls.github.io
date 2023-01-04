const selectCity = document.getElementById('select-1')
const selectSearch = document.getElementById('select-2')
const selectCategory = document.getElementById('select-category')
const selectPrice = document.getElementById('select-price')
const selectSales = document.getElementById('select-sales')
const selectColor = document.getElementById('select-color')

if (selectCity) {
  const city = new ItcCustomSelect(selectCity, {
    name: 'city', // значение атрибута name у кнопки
    targetValue: 'Москва', // значение по умолчанию
    options: [['Москва', 'Москва'], ['Казань', 'Казань'], ['Уфа', 'Уфа'], ['Пермь', 'Пермь']], // опции
  });
};
if (selectSearch) {
  const search = new ItcCustomSelect(selectSearch);
};
// if (selectCategory) {
//   const category =  new Choices(selectCategory);
// };
// if (selectPrice) {
//   const price = new Choices(selectPrice);
// };
// if (selectSales) {
//   const sales = new Choices(selectSales);
// }; 
// if (selectColor) {
//   const color = new Choices(selectColor);
// };

const filterDropdown = document.querySelectorAll('.filter__dropdown');
const filterBtn = document.querySelectorAll('.filter__btn');
const filterSelect = document.querySelectorAll('.filter__select');

if (filterBtn) {
  filterBtn.forEach((e) => {
    // e.parentElement.classList.remove('selected')
    console.log(e);
    e.addEventListener('click', (ev) => {
      console.log(ev);
            ev.preventDefault();
            ev.stopPropagation();
      // ev.prevenDefault();
      let block = e.parentElement.parentElement;
      let select = e.parentElement;
      let dropdown = block.lastChild;
      console.log(block, select, dropdown);
      console.log(select.classList);
      if (select.classList.contains('selected')) {
        select.classList.remove('selected');
        dropdown.classList.remove('filter__dropdown_visible');
      } else {
        for (let i = 0; i < filterDropdown.length; i++) {
          filterSelect[i].classList.remove('selected');
          let openDropdown = filterDropdown[i];
          if (openDropdown.classList.contains('filter__dropdown_visible')) {
            openDropdown.classList.remove('filter__dropdown_visible');
          };
        };
        select.classList.add('selected');
        dropdown.classList.add('filter__dropdown_visible');
      };
      // select.classList.toggle('selected');
      // dropdown.classList.toggle('filter__dropdown_visible');
    });
  });
};