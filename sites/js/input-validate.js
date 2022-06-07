
const form = document.getElementById('form');
const gender = document.getElementById('gender');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}
// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}
// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} muss mindestens ${min} Zeichen enthalten`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm(){
    if(!checkRequired([gender, name, surname, email, message])){
        //Aufgabe: Validierung der Länge für Vorname (2 bis 20) und Nachname (2 bis 50)
        checkLength(name, 3, 15);
        checkLength(surname, 3, 15);
        checkEmail(email);


    }
}
// Event listeners
form.addEventListener('submit', function(e) {
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();
    alert('Formular nicht vollständig')
    //First validate form
    validateForm();

});

