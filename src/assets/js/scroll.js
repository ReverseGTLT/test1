const scrollBtn = document.querySelector('.scroll__btn');
const scrollDotAfter = document.querySelector('.scroll__btn-after');

scrollBtn.addEventListener('click', goTop);
document.addEventListener('scroll', changeStyleScrollDot)

function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75)
        setTimeout(goTop, 0)
    }
}

function changeStyleScrollDot() {
    window.pageYOffset > 150 ? scrollDotAfterAdd() : scrollDotAfterRemove();
}

function scrollDotAfterAdd() {
    scrollDotAfter.classList.add('scroll-down')
}

function scrollDotAfterRemove() {
    scrollDotAfter.classList.remove('scroll-down')
}