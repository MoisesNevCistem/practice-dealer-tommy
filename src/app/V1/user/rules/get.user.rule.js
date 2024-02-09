//* Importaciones
const { check } = require('express-validator');

/**
 * Funcion de inyeccion de dependencias para las reglas.
 * 
 * @typedef {object} SchemeExpressValidator - Esquema de funciones de Express Validator.
 * @property {Function} expressValidator - Middlewares relacionados a Espress Validator.
 * 
 * @typedef {object} SchemeMiddleware - Esquema de middlewares.
 * @property {SchemeExpressValidator} expressValidator - Middlewares relacionados a Express Validator.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {SchemeMiddleware} dependencies.middlewares - Middlewares de la aplicacion.
 * @returns {Funtion[]} Reglas de obtener un usuario.
 */
module.exports = ( dependencies ) => {
    //? Desestructuración de dependencias
    const { expressValidator } = dependencies.middlewares;

    return [
        check('users_uuid')
            .notEmpty().withMessage("El campo 'users_uuid' es requerido")
            .isString().withMessage("El campo 'users_uuid' no es valido")
            .isUUID('4').withMessage("El campo 'users_uuid' no cumple con el formato válido"),

        expressValidator.validateResult,
            
    ];
};