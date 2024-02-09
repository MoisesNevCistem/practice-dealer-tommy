//* Importaciones
const { check } = require('express-validator');

/**
 * Funcion de inyeccion de dependencias para reglas.
 * 
 * @typedef {object} SchemeCustomRules - Esquema de reglas personalizadas
 * @property {Function} checkEmail - Regla personalizada para evalúar correo electrónico.
 * 
 * @typedef {object} SchemeExpressValidator - Esquema de funciones de Express Validator.
 * @property {Function} expressValidator - Middlewares relacionados a Espress Validator.
 * 
 * @typedef {object} SchemeHelpers - Esquema de helpers.
 * @property {SchemeExpressValidator} customRules - Reglas Personalizadas.
 * 
 * @typedef {object} SchemeMiddleware - Esquema de middlewares.
 * @property {SchemeExpressValidator} expressValidator - Middlewares relacionados a Express Validator.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {SchemeCustomRules} dependencies.helpers - Middlewares de la aplicacion.
 * @param {SchemeMiddleware} dependencies.middlewares - Middlewares de la aplicacion.
 * @returns {Funtion[]} Reglas para Crear Usuario
 */
module.exports = ( dependencies ) => {
    //? Desestructuración de dependencias
    const { customRules }  = dependencies.helpers;
    const { expressValidator } = dependencies.middlewares;

    return [
        check('email')
            .notEmpty().withMessage("El campo 'email' es requerido")
            .isString().withMessage("El campo 'email' no es valido")
            .custom( customRules.checkEmail ).withMessage("El 'email' no cuenta con el formato correcto.")
            .trim(),
        check('password')
            .notEmpty().withMessage("El campo 'password' es requerido")
            .isString().withMessage("El campo 'password' no es valido")
            .trim(),

        expressValidator.validateResult,
            
    ];
};