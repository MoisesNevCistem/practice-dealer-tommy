//* Importaciones
const { repositoryRegex } = require('./repository_regex');

//? Desestructuracion de repositositorio de reglas personalizadas
const { REGEX_EMAIL } = repositoryRegex;

/**
 * Verifica la estructura de un correos electrónicos.
 * 
 * @param {string} email - Define el correo electrónico a evalúar.
 * @returns boolean
 */
const isEmail = ( email ) => REGEX_EMAIL.test( email );

module.exports = { isEmail };