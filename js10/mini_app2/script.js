const burgerBtn = document.querySelector('.burger-button');
const closeBtn = document.querySelector('.close-button');
const burgerMenu = document.querySelector('.burger-menu');
const main = document.querySelector('.main')

burgerBtn.addEventListener('click', () => {
    closeBtn.style.display = 'block';
    burgerMenu.style.width = '250px';
    burgerMenu.style.display = 'block';
    main.style.marginLeft = '250px';
    burgerBtn.style.display = 'none';  
})

closeBtn.addEventListener('click', () => {
    burgerMenu.style.width = '0px';
    burgerMenu.style.display = 'none';
    main.style.marginLeft = '0px';
    closeBtn.style.display = 'none';
    burgerBtn.style.display = 'block';  
})