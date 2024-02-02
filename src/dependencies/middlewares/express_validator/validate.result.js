//* Importaciones globales
const { validationResult } = require('express-validator');
const { ExceptionError } = require('../../http_error_handler');

/**
 * Middleware que generá errores de express-validator.
 * 
 * @name validateResult
 * @param {*} req - Referencia de la peticion entrante.
 * @param {*} res - Referencia para retornar una respuesta.
 * @param {*} next - Funcion que continua el flujo de la aplicacion.
 * @returns Error de validación.
 */
const validateResult = ( req, res, next ) => {

    const errors = validationResult( req );

    if ( !errors.isEmpty() ) {
        const firstErrors = errors.array()[0];
        return next( new ExceptionError('VALIDATE_ERROR', firstErrors.msg) );
    }

    next();

}

module.exports = { validateResult };