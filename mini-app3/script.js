const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.close')
const menu = document.querySelector('.content');


burgerBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    burgerBtn.style.display = 'none';
    closeBtn.style.display = 'block';
})


closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    burgerBtn.style.display = 'block';
    closeBtn.style.display = 'none';
})