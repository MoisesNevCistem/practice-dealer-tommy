//* Importaciones
const { v4: UUIDV4 } = require('uuid');

/**
 * Genera un nuevo código UUID aleatorio.
 * 
 * @name generateUUID
 * @returns {string} Código UUID versión 4
 */
const generateUUID = () => UUIDV4();

module.exports = { generateUUID };