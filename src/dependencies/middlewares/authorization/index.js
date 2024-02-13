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

        
        const bearerToken = req.headers.authorization .split(" ")[1];
        console.log('✨ setToken: ', bearerToken);

        //TODO: Evaluar si existe un token
        //TODO: Verificar la integridad del token ( que sea valido y vigentes)

        next();
    } catch ( AuthorizationError ) {
        console.log('❌ AUTHORIZATION_USER_ERROR', AuthorizationError);
        next( AuthorizationError );
    }

};

module.exports = { authorizationUser };