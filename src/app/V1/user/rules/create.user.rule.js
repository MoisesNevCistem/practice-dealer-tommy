//* Importaciones
const { check } = require('express-validator');

/**
 * Funcion de inyeccion de dependencias para controlador.
 * 
 *  @typedef {object} SchemeExpressValidator - Esquema de funciones de Express Validator.
 * @property {Function} expressValidator - Middlewares relacionados a Espress Validaotor.
 * 
 * @typedef {object} SchemeMiddleware - Esquema de middlewares.
 * @property {SchemeExpressValidator} expressValidator - Middlewares relacionados a Express Validator.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {SchemeMiddleware} dependencies.middlewares - Middlewares de la aplicacion.
 * @returns {Funtion[]} Reglas para Crear Usuario
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { expressValidator } = dependencies.middlewares;

    return [
        check('first_name')
            .notEmpty().withMessage("El campo 'first_name' es requerido")
            .isString().withMessage("El campo 'first_name' no es valido")
            .isLength({ max: 50, mim: 1 }).withMessage("El campo 'first_name' esta fuera de rango")
            .trim(),
        check('middle_name')
            .notEmpty().withMessage("El campo 'middle_name' es requerido")
            .isString().withMessage("El campo 'middle_name' no es valido")
            .isLength({ max: 50, mim: 1 }).withMessage("El campo 'middle_name' esta fuera de rango")
            .optional()
            .trim(),


        expressValidator.validateResult,
            
    ];
};