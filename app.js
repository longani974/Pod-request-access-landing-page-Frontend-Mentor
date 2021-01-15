const emailInput = document.querySelector('#email');
const buttonValidation = document.querySelector('#btnValidation');
const emailErrorMessage = document.querySelector('.emailError');

buttonValidation.addEventListener('click', () => {
    return checkValidEmail(emailInput.value)
        ? (emailErrorMessage.style.visibility = 'hidden')
        : (emailErrorMessage.style.visibility = 'visible');
});

function checkValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
