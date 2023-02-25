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
const callbackTrigger = document.querySelector('.callback__call-description');
const callbackTriggerBurger = document.querySelector('.callback__call-description--burger');
const modalCallback = document.querySelector('.modal-callback');
const modalCloseTrigger = document.querySelector(".modal-callback__box-trigger");
const modalSuccess = document.querySelector('.modal-success');
const body = document.querySelector('body');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault()
    if (formInputText.value.length === 16 && checkboxInput.checked ) {
        formInputTextRemove()
        modalCallbackRemove()
        formInputTextEmpty()
        modalSuccessAdd()
        timeoutSuccess()
        timeoutSubmit()
    } else {
        formInputTextAdd()
        removeInvalid()
    }
}

document.addEventListener('click', onCallbackClick);
function onCallbackClick(e) {
    e.stopPropagation()
    if (e.target === callbackTrigger || e.target === callbackTriggerBurger) {
        modalCallbackAdd()
        addOverflowHidden()
    }
    if (e.target === modalCallback || e.target === modalCloseTrigger) {
        formInputTextEmpty()
        modalCallbackRemove()
        removeOverflowHidden()
    }
}

function removeInvalid() {
    setTimeout(afterShake, 1000)
}

function afterShake() {
    formInputTextRemove()
}

function timeoutSuccess() {
    setTimeout(function () {
        modalSuccessRemove()
    }, 2000)
}

function timeoutSubmit() {
    setTimeout(function () {
        form.submit()
    }, 2000)
}

function modalCallbackRemove() {
    modalCallback.classList.remove('visible')
}

function modalCallbackAdd() {
    modalCallback.classList.add('visible')
}

function formInputTextRemove() {
    formInputText.classList.remove('invalid')
}

function formInputTextAdd() {
    formInputText.classList.add('invalid')
}

function formInputTextEmpty() {
    formInputText.value = '';
}

function modalSuccessRemove() {
    modalSuccess.classList.remove('visible')
}

function modalSuccessAdd() {
    modalSuccess.classList.add('visible')
}

function addOverflowHidden() {
    body.classList.add('overflow')
}

function removeOverflowHidden() {
    body.classList.remove('overflow')
}