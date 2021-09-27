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



// Скрипт для модального окна
let modal = new bootstrap.Modal(document.querySelector('.modal'));
let modalButton = document.querySelector('.main-content__button-yellow');

modalButton.addEventListener('click', () => {
    modal.show();
});









$('#form').validate({
    submitHandler: function (form) 
    {
        $.post(
            'sendmail.php', // адрес обработчика
            $("#form").serialize(), // отправляемые данные  		

            function (msg) { // получен ответ сервера                  
                $('#form').hide('slow');
                $('.modal-title').html(msg); 
                $('.modal-title').css('margin-bottom', '1em');                           
            }
        );
    },
    rules: 
    {
        // 'f[email]': {
        //     required: true,
        //     email: true,
        // },
        'f[name]': {
            required: true,
            minlength: 3
        },
        'f[phone]': {
            required: true
        },
        // 'f[checkbox]': {
        //     required: true
        // }
    },
    messages: 
    {
        'f[name]': "Пожалуйста, введите имя",
        'f[phone]': "Пожалуйста, введите телефон",
        // 'f[email]': {
        //     required: "Пожалуйста, введите email",
        //     email: "Вам email-адрес должен быть в формате name@domain.com"
        // },
    }

});


