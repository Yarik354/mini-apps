// Задание 1
const buttonOpen = document.querySelector('.popup-btn');
const windowWithBackground = document.querySelector('.popup');
const windowWithoutBackground = document.querySelector('.popup-content');
const buttonClose = document.querySelector('.popup_close');
buttonOpen.addEventListener('click', () => {
    windowWithBackground.classList.add('opened');
})
buttonClose.addEventListener('click', () => {
    windowWithBackground.classList.remove('opened');
})
windowWithBackground.addEventListener('click',function(event) {
if (event.target === windowWithBackground) {
    windowWithBackground.classList.remove('opened');
}})