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
    submitHandler: function (form) 
    {
        $.post(
            'sendmail.php', // адрес обработчика
            $("#form").serialize(), // отправляемые данные  		

            function (msg) { // получен ответ сервера                  
                $('#form').hide('slow');
                $('#my_message').html(msg);
                // modal.hide();
            }
        );
    },
    rules: 
    {
        'f[email]': {
            required: true,
            email: true,
        },
        'f[name]': {
            required: true,
            minlength: 3
        },
        'f[phone]': {
            required: true
        },
    },
    messages: 
    {
        'f[name]': "Пожалуйста, введите имя",
        'f[phone]': "Пожалуйста, введите телефон",
        'f[email]': {
            required: "Пожалуйста, введите email",
            email: "Вам email-адрес должен быть в формате name@domain.com"
        }
    }

});



// Счетчик лидов

(function leadCounter(leads, leadCountElement) {
    const time = 60000;
    const step = 1; 

    let element = document.querySelector('#'+leadCountElement);
    numLead = 2500;
    let t = Math.round(time/(leads/step));
    let interval = setInterval(() => {
        numLead = numLead + step;
        if(numLead == leads) {
            clearInterval(interval);
        }
        element.innerHTML = numLead;
    },
    t);
})(2548, 'leadCount');


// Счетчик клиентов

(function clientCounter(num, elem) {
    const time = 60000;
    const step = 1;

    let el = document.querySelector('#'+elem);
    n = 530;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n == num) {
            clearInterval(interval);
        }
        el.innerHTML = n;
    },
    t);
})(539, 'clientCount');