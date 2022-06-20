let ALL_INPUT_VALID

const form = document.getElementById('form');
const gender = document.getElementById('gender');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const message = document.getElementById('message');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
        ALL_INPUT_VALID = false;
    }
}
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
            ALL_INPUT_VALID = false;
        } else {
            showSuccess(input);
        }
    });
    return isRequired;
}
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
        ALL_INPUT_VALID = false;
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
        ALL_INPUT_VALID = false;
    } else {
        showSuccess(input);
    }
}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function validateForm(){
    if(!checkRequired([gender, name, surname, email, message])){
        checkLength(name, 3, 15);
        checkLength(surname, 3, 15);
        checkEmail(email);
    }
}
form.addEventListener('submit', function(e) {
    ALL_INPUT_VALID = true;
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();

    //First validate form
    validateForm();
    if (ALL_INPUT_VALID){
        alert('Your message was send.')
    }
});
