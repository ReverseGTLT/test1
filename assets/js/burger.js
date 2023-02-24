const burgerClose = document.querySelector('.burger--black');
const burgerOpen = document.querySelector('.burger');
const modalBurger = document.querySelector('.modal-burger');

burgerOpen.addEventListener('click', addBurgerVisible);
burgerClose.addEventListener('click', removeBurgerVisible)

function addBurgerVisible() {
    modalBurger.classList.add('visible')
}

function removeBurgerVisible() {
    modalBurger.classList.remove('visible')
}