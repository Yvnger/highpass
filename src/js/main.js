// Мобильное меню
const navToggleItems = document.querySelectorAll('.js-nav-toggle');
const nav = document.querySelector('.nav');

navToggleItems.forEach(e => {
    e.addEventListener('click', () => {
        nav.classList.toggle('nav_opened');
    })
})

// Поиск
const searchToggleItems = document.querySelectorAll('.js-search-toggle');
const search = document.querySelector('.search__wrap');

searchToggleItems.forEach(e => {
    e.addEventListener('click', () => {
        search.classList.toggle('search__wrap_opened')
    })
})

// Валидация форм
const subscribeForm = new JustValidate('#subscribe-form',
    {
        errorFieldCssClass: 'form__input_dark-invalid',
        errorFieldStyle: {},
        errorLabelCssClass: 'form__input_dark-alert form__input-alert',
        errorLabelStyle: {},
        focusInvalidField: true,
        lockForm: true,
    }
);

subscribeForm.addField('#email', [
    {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
    },
    {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
    },
]);

const contactsForm = new JustValidate('#contacts-form',
    {
        errorFieldCssClass: 'form__input_light-invalid',
        errorFieldStyle: {},
        errorLabelCssClass: 'form__input_light-alert form__input-alert',
        errorLabelStyle: {},
        focusInvalidField: true,
        lockForm: true,
    }
);

contactsForm
    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
        }
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
        },
        {
            rule: 'email',
            errorMessage: 'Недопустимый формат',
        },
    ]);