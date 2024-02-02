//* Importaciones
const { ExceptionError } = require('../helpers/exception.error');

/**
 * Centraliza los errores que se generán en la aplicación.
 * 
 * @name errorCaught
 * @param {*} error - Definición del error controlado.
 * @param {*} req - Referencia de la peticion entrante.
 * @param {*} res - Referencia para retornar una respuesta.
 * @param {*} next - Funcion que continua el flujo de la aplicacion.
 */
const errorCaught = ( error, req, res, next ) => {

    /**
     * @typedef {object} SchemeError Definicion del esquema de la propiedad error en catalogo de errores.
     * @property {object} code - Codigo de error.
     * @property {object} message - Descripcion del error.
     * @property {object} stack_error - Error mas detallado por parte de Node.
     * 
     * @typedef {object} ResponseRepositoryError Definicion de la respuesta del catalogo de errores.
     * @property {boolean} success - Define el estado de la peticion.
     * @property {number} status_code - Define el codigo de respuesta HTTP.
     * @property {object} error - Define el error obtenido.
     */

    /**
     * @type {*} Error capturado durante el flujo de la aplicación.
     */
    let errorCaught;

    console.log("ERROR_CATCH: ", error);

    if ( typeof error.setError === 'function' ) {
        //? Si es un error controlado, se obtiene y se asigna.
        errorCaught = error.setError();
    } else {
        //? Si es un error desconocido, se obtiene y se retorna como un error 500.
        errorCaught = new ExceptionError('INTERNAL_SERVER_ERROR', error.stack).setError();
    }

    //? Retorno de respuesta del error en JSON.
    res.status( errorCaught.status_code );
    res.json( errorCaught );
    res.end();

}   

module.exports = { errorCaught };