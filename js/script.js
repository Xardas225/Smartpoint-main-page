let parent = document.querySelector('.main-content');
let buttons = document.querySelector('.main-content__buttons');
let image = document.querySelector('.main-image');

if (window.innerWidth < 770) {
    parent.insertBefore(image, buttons);
}


if (window.innerWidth < 420 && window.innerHeight > 700) {
    document.querySelector('.main-image').style.display = 'block';
}



document.querySelector('.main-content__button-yellow').addEventListener('click', () => {
    smp_active_205644();
});
