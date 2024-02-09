//* Importaciones
const { getUsersService } = require('../services');

/**
 * Funcion de inyeccion de dependencias para controlador.
 * 
 * @typedef {object} HttpStatusCode
 * @property {string} OK - Codigo de respuesta HTTP.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {HttpStatusCode} dependencies.statusCode - Lista de códigos de respuesta HTTP.
 * @param {Models} dependencies.models - Modelos
 * @returns {Funtion} getAllUsersController
 */
module.exports = ( dependencies ) => {

    //? Desestructuracion de dependencias
    const { statusCode, models } = dependencies;
    
    //? Centralización de servicios
    const services = {
        getUsers: getUsersService({ models }),
    };

    /**
     * Controlador que coordina el obtener todos los usuarios.
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
    const getUsersController = async ( req, res, next ) => {
        try {
            res.status(statusCode.OK);
            res.json({
                success: true,
                status_code: statusCode.OK,
                response:  await services.getUsers()
            });
            res.end();
        } catch (errorController) {
            console.log('❌ GET_USERS_CONTROLLER_ERROR: ', errorController);
            next(errorController);
        }
    };

    return getUsersController;

};