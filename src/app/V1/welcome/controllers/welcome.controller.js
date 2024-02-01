/**
 * Funcion de inyeccion de dependencias para controlador.
 * 
 * @typedef {object} HttpStatusCode
 * @property {string} OK - Codigo de respuesta HTTP.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {object} dependencies.statusCode - Lista de dependencias de la aplicacion.
 * @returns {Funtion} welcomeController
 */
module.exports = ( dependencies ) => {

    //? Desestructuracion de dependencias
    const { statusCode } = dependencies;

    /**
     * Controlador que emite una prueba de conexion en el entorno APP.
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
    const welcomeController = async ( req, res, next ) => {
        res.status(statusCode.OK);
        res.json({
            message: 'Bienvenido a REST API Consecionaria Tommy!! :D',
            server: 'app'
        });
        res.end();
    };

    return welcomeController;

}