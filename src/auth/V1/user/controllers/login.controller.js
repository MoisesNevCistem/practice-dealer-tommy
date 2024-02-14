//* Importaciones
const { loginService } = require('../services');

/**
 * Funcion de inyeccion de dependencias para controlador.
 * 
 * @typedef {object} SchemeEncryptHandler
 * @property {Function} encrypt - Función para encriptar
 * 
 * @typedef {object} Helpers
 * @property {SchemeEncryptHandler} encryptHandler - Función de encriptación.
 * 
 * @typedef {object} HttpErrorHandler
 * @property {object} ExeptionError - Clase que estándariza los errores de la apolicación.
 * 
 * @typedef {object} HttpStatusCode
 * @property {string} OK - Código de respuesta HTTP.
 * 
 * @typedef {object} Models
 * @property {object} User - Modelo de la entidad Usuario.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {Helpers} dependencies.helpers - Código de apoyo.
 * @param {HttpErrorHandler} dependencies.httpErrorHandler - Manejador de errores
 * @param {HttpStatusCode} dependencies.statusCode - Lista de códigos de respuesta HTTP.
 * @param {Models} dependencies.models - Modelos
 * @param {object} dependencies.useCases - Casos de Uso.
 * @returns {Funtion} loginController
 */
module.exports = ( dependencies ) => {

    //? Desestructuracion de dependencias
    const { helpers, httpErrorHandler, statusCode, models, useCases } = dependencies;
    
    //? Centralización de servicios
    const services = {
        login: loginService({ helpers, httpErrorHandler, models, useCases }),
    };

    /**
     * Controlador que coordiba el proceso para iniciar sesión.
     * 
     * Un controlador se encarga de realizar 4 ***responsabilidades***:
     * 1. Recibe la peticion entrante del cliente.
     * 2. Normaliza la informacion recibida ( en caso de que se reciban datos ),
     * 3. Enviar la informacion recibida a un ***servicio***.
     * 4. Retornar una respuesta al cliente ( ya sea un error o un exito ).
     * 
     * @name welcomeController
     * @param {*} req - Referencia de la peticion entrante.
     * @param {*} res - Referencia para retornar una respuesta.
     * @param {*} next - Funcion que continua el flujo de la aplicacion.
     */
    const loginController = async ( req, res, next ) => {
        try {
            res.status(statusCode.OK);
                res.json({
                    success: true,
                    status_code: statusCode.OK,
                    response: await services.login( req.body )
                });
            res.end();
            
        } catch (errorController) {
            console.log('❌ LOGIN_CONTROLLER_ERROR: ', errorController);
            next(errorController);
        }
    };

    return loginController;

}