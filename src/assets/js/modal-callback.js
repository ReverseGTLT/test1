document.addEventListener('DOMContentLoaded', () => {

    const inputElement = document.querySelector('#phone')
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    }
    IMask(inputElement, maskOptions)

})

const form = document.querySelector('.form');
const checkboxInput = document.querySelector('.checkbox-input');
const formInputText = document.querySelector('.form-control');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault()
    if (formInputText.value.length === 16 && checkboxInput.checked ) {
        form.submit()
        formInputText.value = '';
    }
}

const callbackTrigger = document.querySelector('.callback__call-description');
const modalCallback = document.querySelector('.modal-callback');
const modalCloseTrihgger = document.querySelector(".modal-callback__box-trigger");


document.addEventListener('click', onCallbackClick);
function onCallbackClick(e) {
    e.stopPropagation()
    if (e.target === callbackTrigger) {
        modalCallback.classList.add('visible')
    }
    if (e.target === modalCallback || e.target === modalCloseTrihgger) {
        formInputText.value = '';
        modalCallback.classList.remove('visible')

    }
}
