// Validate form input elements
const validateLib = require('./ValidationLib');

function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("name", userObj.name);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("surname", userObj.surname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("message", userObj.message);
    if (result.isNotValid) { return result; }

	
    //check length
    result = validateLib.checkLength("name",userObj.name, 3, 15);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("surname",userObj.surname, 3, 25);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("message",userObj.message, 8, 280);
    if (result.isNotValid) { return result; }

	
    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/*Export validation functions for further usage.*/
module.exports = {
    validateUser
}
