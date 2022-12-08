const validate = new JustValidate('.callback__form');

const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
});
validation
    .addField('#name', [
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'required',
            errorMessage: 'Вы не ввели имя',
        }
    ])
    .addField('input[type=email]', [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
        },
        {
            rule: 'email',
            errorMessage: 'E-mail не корректный',
        },
    ])
    .addField('input[type=tel]', [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели телефон',
        },
        {
            rule: 'number',
            errorMessage: 'Телефон не корректный',
        },
        {
            rule: 'minLength',
            value: 7,
            errorMessage: 'Минимально 7 цифр',
        },
        {
            rule: 'number',
            errorMessage: 'Телефон не корректный',
        },
    ])
    .addField('#agree', [
        {
            rule: 'required',
            errorMessage: 'Необходимо подтверждение',
        },
    ])
