let parent = document.querySelector('.main-content');
let title = document.querySelector('.main-content__title');
let image = document.querySelector('.main-image');
let text = document.querySelector('.main-content__text');
let selector = document.querySelectorAll('input[type="tel"]');

if (window.innerWidth < 770) {
    parent.insertBefore(image, title);
}


if (window.innerWidth < 500) {
    text.textContent = 'Протестируйте 10 дней и убедитесь лично в эффективности сервиса.';
}


// Маска для телефона

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);


$('#form').validate({
    rules: {
        'f[email]': {
            required: true,
            email: true,
        },
        'f[name]': {
            required: true,
            minlength: 3
        },
        'f[tel]': {
            required: true
        }   
    }
}); 

