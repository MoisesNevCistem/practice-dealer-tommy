//* Importaciones
const { repositoryRegex } = require('./repository_regex');

//? Desestructuracion de repositositorio de reglas personalizadas
const { REGEX_PASSWORD } = repositoryRegex;

/**
 * Verifica la estructura necesaria para una contraseña.
 * 
 * @param {string} value - Define si el valor cumple con el formato correcto
 * @returns boolean
 */
const isPassword = ( value ) => REGEX_PASSWORD.test( value );

module.exports = { isPassword };