/**
 * Funcion de inyeccion de dependencias para controlador.
 * 
 * @typedef {object} HttpStatusCode
 * @property {string} CREATED - Codigo de respuesta HTTP.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {object} dependencies.statusCode - Lista de dependencias de la aplicacion.
 * @returns {Funtion} createUserController
 */
module.exports = ( dependencies ) => {

    //? Desestructuracion de dependencias
    const { statusCode } = dependencies;

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
            console.log("✨ Body_Create_User:", req.body);
            res.status(statusCode.CREATED);
            res.json({
                success: true,
                status_code: statusCode.CREATED,
                response: {
                    message: "Usuario ha sido creado éxitosamente"
                }
            });
            res.end();
        } catch (errorController) {
            console.log('❌ CREATE_USER_CONTROLLER_ERROR: ', errorController);
            next(errorController);
        }
    };

    return createUserController;

}