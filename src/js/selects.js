const select2 = new ItcCustomSelect('#select-2');
const select1 = new ItcCustomSelect('#select-1', {
    name: 'city', // значение атрибута name у кнопки
    targetValue: 'Москва', // значение по умолчанию
    options: [['Москва', 'Москва'], ['Казань', 'Казань'], ['Уфа', 'Уфа'], ['Пермь', 'Пермь']], // опции
  });