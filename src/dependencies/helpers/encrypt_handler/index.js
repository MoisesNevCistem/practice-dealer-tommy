//* Importaciones
const { compare, hash } = require('bcryptjs');

/**
 * Función para encriptar y codificar un valor.
 * 
 * @name encrypt
 * @param {string} value - Valor a encriptar 
 * @returns {string} Valor encriptado.
 */
const encrypt = async ( value ) => await hash( value, 8 );

/**
 * Función para comparar un valor encrptado.
 * 
 * @name verifiedEncrypted
 * @param {string} value - Valor a verificar.
 * @param {string} encryptedValue - Valor encriptado a comprar.
 * @returns {string} Valor encriptado.
 */
const verifiedEncrypted = async ( value, encryptedValue ) => await compare( value, encryptedValue );


module.exports = { encrypt, verifiedEncrypted };