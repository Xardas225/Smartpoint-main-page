let parent = document.querySelector('.main-content');
let title = document.querySelector('.main-content__title');
let image = document.querySelector('.main-image');
let text = document.querySelector('.main-content__text')

if (window.innerWidth < 770) {
    parent.insertBefore(image, title);
}


if (window.innerWidth < 500) {
    text.textContent = 'Протестируйте 10 дней и убедитесь лично в эффективности сервиса.';
}



// document.querySelector('.main-content__button-yellow').addEventListener('click', () => {
//     smp_active_205644();
// });
