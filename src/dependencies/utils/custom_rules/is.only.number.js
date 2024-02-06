//* Importaciones
const { repositoryRegex } = require('./repository_regex');

//? Desestructuracion de repositositorio de reglas personalizadas
const { REGEX_INT } = repositoryRegex;

/**
 * Verifica si solamente contiene valores númerico.
 * 
 * @param {string} value - Define si el valor es solamente númerico.
 * @returns boolean
 */
const isOnlyNumber = ( value ) => REGEX_INT.test( value );

module.exports = { isOnlyNumber };