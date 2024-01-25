const form = document.querySelector('form');
const formCard = document.querySelector('#formCard');
const email = document.querySelector('input');
const invalid = document.querySelector('#invalid')
const success = document.querySelector('#success')
const dismissBtn = document.querySelector('#dismiss')
const sendBtnText = document.querySelector('#send-btn-text')
const loader = document.querySelector('#loader')

let sentEmail;

const invalidEmail = () => {
    invalid.classList.remove('hidden')
    email.classList.add('invalid-input')
}

const loaderFunc = () => {
    sendBtnText.classList.add('hidden')
    loader.classList.remove('hidden')
}

const showSuccessPage = () => {
    formCard.classList.add('hidden')
    success.classList.remove('hidden')
}

const showFormPage = () => {
    formCard.classList.remove('hidden')
    success.classList.add('hidden')
    reset()
}

const reset = () => {
    sendBtnText.classList.remove('hidden')
    loader.classList.add('hidden')
    invalid.classList.add('hidden')
    email.classList.remove('invalid-input')
    email.value = ''
}
 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = email.value.match(/.+\@.+\..+/);

    if (!result) {
        invalidEmail();
        return
    }

    sentEmail = email.value;
    loaderFunc();
    setTimeout(showSuccessPage, 1000);
})

dismissBtn.addEventListener('click' , showFormPage)