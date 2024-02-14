//* Importaciones
const { ExceptionError } = require('../../http_error_handler');
const { jwt } = require('../../helpers');
/**
     * Middleware que autoriza peticiones si hay un token de acceso.
     * 
     * @function
     * @name authorizationUser
     * @param {*} req - Referencia de la peticion entrante.
     * @param {*} res - Referencia para retornar una respuesta.
     * @param {*} next - Funcion que continua el flujo de la aplicacion.
     */
const authorizationUser = async ( req, res, next ) => {

    try {
        
        //? Evaluar si existe un token
        if( req.headers.authorization === undefined ) throw new ExceptionError('MISSING_BEARAR_TOKEN')

        /**
         * @type {string} Obtención de bearer token.
         */
        const bearerToken = req.headers.authorization.split(" ")[1];
        
        //? Verificar la integridad del token ( que sea válido y vigentes)
        const payload = jwt.verifyJWT( bearerToken );

        //? Inyectamos el ID Usuario en lampetición
        req.id_user = payload.id_user;

        next();
    } catch ( AuthorizationError ) {
        console.log('❌ AUTHORIZATION_USER_ERROR', AuthorizationError);
        next( AuthorizationError );
    }

};

module.exports = { authorizationUser };