// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("name", userObj.name);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("surname", userObj.surname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("name",userObj.name, 3, 15);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("surname",userObj.surname, 3, 25);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("password", userObj.password, 6, 25);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
