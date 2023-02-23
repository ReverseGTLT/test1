const modal = document.querySelector('.modal-google');
const underlineDots = document.querySelector('.underline__dots');
const itemDescVector = document.querySelector('.item-description--vector');

document.addEventListener('click', onWindowClick);
function onWindowClick(e) {
    e.stopPropagation()
    if (e.target === underlineDots || e.target === itemDescVector) {
        modal.classList.add('visible')
    } else {
        modal.classList.remove('visible')
    }
}