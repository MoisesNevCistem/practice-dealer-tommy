/**
 * Funcion de inyeccion de dependencias para controlador.
 * 
 * @typedef {object} HttpStatusCode
 * @property {string} OK - Codigo de respuesta HTTP.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @return {Function} welcomeController
 */
module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const { statusCode } = dependencies;

    /**
     * Controlador que emite una prueba de conexion en el entorno AUTH
     * 
     * @name welcomeController
     * @param {*} req - Referencia de la peticion entrante.
     * @param {*} res - Referencia para retornar una respuesta.
     * @param {*} next - Funcion que continua el flujo de la aplicacion.
     */
    const welcomeController = async ( req, res, next ) => {
        try {
            res.status(statusCode.OK);
            res.json({
                message: 'Bienvenido a REST API Consecionaria Tommy!! :D',
                server: 'auth'
            });
            res.end();
        } catch (errorController) {
            // console.log('❌ WELCOME_CONTROLLER_ERROR: ', errorController);
            next(errorController);
        }
    };

    return welcomeController;
}