//* Importaciones 
const { ExceptionError } = require('../helpers/exception.error');

/**
 * Controla las peticiones entrantes de servicios no encontrados en la aplicación.
 * 
 * @name serviceNotFound
 * @param {*} req - Referencia de la peticion entrante.
 * @param {*} res - Referencia para retornar una respuesta.
 * @param {*} next - Funcion que continua el flujo de la aplicacion.
 */
const serviceNotFound = ( req, res, next ) => {
    return next( new ExceptionError('SERVICE_NOT_FOUND', req.url) )
};

module.exports = { serviceNotFound }