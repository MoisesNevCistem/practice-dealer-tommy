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
    const { customRules } = dependencies.utils;


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
        check('last_name')
            .notEmpty().withMessage("El campo 'middle_name' es requerido")
            .isString().withMessage("El campo 'middle_name' no es valido")
            .isLength({ max: 50, mim: 1 }).withMessage("El campo 'middle_name' esta fuera de rango")
            .optional()
            .trim(),
        check('surename')
            .notEmpty().withMessage("El campo 'sure_name' es requerido")
            .isString().withMessage("El campo 'sure_name' no es valido")
            .isLength({ max: 50, mim: 1 }).withMessage("El campo 'sure_name' esta fuera de rango")
            .optional()
            .trim(),
        check('email')
            .notEmpty().withMessage("El campo 'email' es requerido")
            .isString().withMessage("El campo 'email' no es valido")
            .custom( customRules.isEmail  ).withMessage("El 'email' no cuenta con el formato correcto.")
            .trim(),
        check('user_password')
            .notEmpty().withMessage("El campo 'user_password' es requerido")
            .isString().withMessage("El campo 'user_password' no es valido")
            .custom( customRules.isPassword).withMessage("El 'user_password' no cumple con el formato correcto.") 
            .trim(),
        check('phone_number')
            .notEmpty().withMessage("El campo 'phone_number' es requerido")
            .isString().withMessage("El campo 'phone_number' no es valido")
            .isLength({ max: 50, mim: 1 }).withMessage("El campo 'phone_number' esta fuera de rango")
            .custom( customRules.isOnlyNumber ).withMessage("El 'phone_number' no cumple con el formato correcto.") 
            .trim(),
        check('user_address')
            .notEmpty().withMessage("El campo 'user_address' es requerido")
            .isString().withMessage("El campo 'user_address' no es valido")
            .isLength({ max: 150, min: 1 }).withMessage("El campo 'user_address' esta fuera de rango")
            .optional()
            .trim(),
        


        expressValidator.validateResult,
            
    ];
};