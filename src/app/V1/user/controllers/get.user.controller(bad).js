// //* Importaciones
// const { getUserService } = require('../services');

// /**
//  * Funcion de inyeccion de dependencias para controlador.
//  * 
//  * @typedef {object} Helpers
//  * @property {Function} generateUUID - Función que genera un código UUID.
//  * 
//  * @typedef {object} HttpStatusCode
//  * @property {string} OK - Codigo de respuesta HTTP.
//  * 
//  * @typedef {object} Models
//  * @property {string} User - Modelo de la entidad Usuario.
//  * 
//  * @param {object} dependencies - Lista de dependencias de la aplicacion.
//  * @param {Helpers} dependencies.helpers - Código de apoyo.
//  * @param {HttpErrorHandler} dependencies.httpErrorHandler - Manejador de errores
//  * @param {HttpStatusCode} dependencies.statusCode - Lista de códigos de respuesta HTTP.
//  * @param {Models} dependencies.models - Modelos
//  * @returns {Funtion} getAllUsersController
//  */
// module.exports = ( dependencies ) => {

//     //? Desestructuracion de dependencias
//     const { statusCode, models } = dependencies;
    
//     //? Centralización de servicios
//     const services = {
//         getUser: getUserService({ models }),
//     };

//     /**
//      * Controlador que coordina la busqueda de un usuario.
//      * 
//      * Un controlador se encarga de realizar 4 ***responsabilidades***:
//      * 1. Recibe la peticion entrante del cliente.
//      * 2. Normaliza la informacion recibida ( en caso de que se reciban datos ),
//      * 3. Enviar la informacion recibida a un ***servicio***.
//      * 4. Retornar una respuesta al cliente ( ya sea un error o un exito ).
//      * 
//      * @name welcomeController
//      * @param {*} req - Referencia de la peticion entrante.
//      * @param {*} res - Referencia para retornar una respuesta.
//      * @param {*} next - Funcion que continua el flujo de la aplicacion.
//      */
//     const getUserController = async ( req, res, next ) => {
//         try {
            
//             //? Servicio de obtener todos de usuarios
//             const response = await services.getUser(req.body);

//             if ( response ){
//                 res.status(statusCode.OK);
//                 res.json({
//                     success: true,
//                     status_code: statusCode.OK,
//                     response: {
//                         data: response,
//                     }
//                 });
//                 res.end();
//             }
            
//         } catch (errorController) {
//             console.log('❌ CREATE_USER_CONTROLLER_ERROR: ', errorController);
//             next(errorController);
//         }
//     };

//     return getUserController;

// };