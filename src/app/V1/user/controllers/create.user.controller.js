//* Importaciones
const { createUserService } = require('../services');

/**
 * Funcion de inyeccion de dependencias para controlador.
 * 
 * @typedef {object} Helpers
 * @property {Function} generateUUID - Función que genera un código UUID.
 * 
 * @typedef {object} HttpErrorHandler
 * @property {object} ExeptionError - Clase que estándariza los errores de la apolicación.
 * 
 * @typedef {object} HttpStatusCode
 * @property {string} CREATED - Codigo de respuesta HTTP.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {Helpers} dependencies.helpers - Código de apoyo.
 * @param {HttpErrorHandler} dependencies.httpErrorHandler - Manejador de errores
 * @param {HttpStatusCode} dependencies.statusCode - Lista de códigos de respuesta HTTP.
 * @param {Models} dependencies.models - Modelos
 * @returns {Funtion} createUserController
 */
module.exports = ( dependencies ) => {

    //? Desestructuracion de dependencias
    const { helpers, httpErrorHandler, statusCode, models } = dependencies;
    
    //? Centralización de servicios
    const services = {
        createUser: createUserService({ httpErrorHandler, models }),
    };

    /**
     * Controlador que coordiba el proceso para crear un usuario.
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
    const createUserController = async ( req, res, next ) => {
        try {

            //? Servicio de creación de usuario
            const response = await services.createUser({
                users_uuid: helpers.generateUUID(),
                first_name: req.body.first_name,
                middle_name: req.body.middle_name === undefined ? null : req.body.middle_name,
                last_name: req.body.last_name,
                surename: req.body.surename === undefined ? null : req.body.surename,
                email: req.body.email,
                user_password: req.body.user_password,
                phone_number: req.body.phone_number,
                user_address: req.body.user_address === undefined ? null : req.body.user_address,
            });

            if ( response ){
                res.status(statusCode.CREATED);
                res.json({
                    success: true,
                    status_code: statusCode.CREATED,
                    response: {
                        message: "Usuario ha sido creado éxitosamente"
                    }
                });
                res.end();
            }
            
        } catch (errorController) {
            console.log('❌ CREATE_USER_CONTROLLER_ERROR: ', errorController);
            next(errorController);
        }
    };

    return createUserController;

}