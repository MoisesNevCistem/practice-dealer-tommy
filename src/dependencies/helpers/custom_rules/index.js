//* Importaciones
const { repositoryRegex } = require('../../utils');

/**
 * Verifica la estructura de un correos electrónicos.
 * 
 * @name checkEmail
 * @param {string} email - Define el correo electrónico a evalúar.
 * @returns boolean
 */
const checkEmail = ( email ) => {
    return  repositoryRegex.REGEX_EMAIL.test( email);
};

/**
 * Verifica si solamente contiene valores númerico.
 * 
 * @name checkNumber
 * @param {string|number} value - Define si el valor es solamente númerico.
 * @returns boolean
 */
const checkNumber = ( value ) => {
    return repositoryRegex.REGEX_INT.test( value );
};

/**
 * Verifica la estructura necesaria para una contraseña.
 * 
 * @name checkNumber
 * @param {string} value - Define si el valor cumple con el formato correcto
 * @returns boolean
 */
const checkPassword = ( value ) => {
    return repositoryRegex.REGEX_PASSWORD.test( value );
};

module.exports = { 
    checkEmail,
    checkNumber,
    checkPassword,
};