/**
 * Funcion de inyeccion de dependencias para servicio.
 * 
 * @typedef {object} Helpers
 * @property {object} encryptHandler - Clase que estándariza los errores de la apolicación.
 * @property {object} jwt - Clase que estándariza los errores de la aplicación.
 * 
 * @typedef {object} HttpErrorHandler
 * @property {object} ExceptionError - Clase que estándariza los errores de la apolicación.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * @property {string} StatusUser - Modelo de la entidad Estatus Usuario.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {Helpers} dependencies.helpers - Funciones de apoyo.
 * @param {HttpErrorHandler} dependencies.httpErrorHandler - Manejador de errores
 * @param {Models} dependencies.models - Modelos
 * @param {UseCases} dependencies.useCases - Casos de Uso.
 * @returns {Funtion} loginService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { helpers, models, httpErrorHandler, useCases } = dependencies;

    //? Centralización de casos de uso
    const cases = {
        getUser: useCases.getUserCase( models ),
    };

    /**
     * Servicio qie coordina el proceso de iniciar sesión.
     * 
     * Un servicio se encarga de ejecutar los casos de uso. Un caso de uso,
     * es una pequeña caracteristica que interviene en medio del flujo
     * principal.
     * 
     * El servicio, retorna un resultado al controlador.
     * 
     * @name loginService
     * @param {object} body - Credenciales de usuario.
     * @param {string} body.email - Correo electrónico.
     * @param {string} body.user_password - Contraseña.
     */
    const loginService = async ( body ) => {

        //?
        const { PWD_SECRET } = process.env;

        //? Condición de búsqueda de usuario
        const userByEmail = {
            email: body.email,
        };

        /**
         * @type {object} Configuración de campos a excluir.
         */
        const excludeFields = { 
            exclude:[
                'users_uuid',
                'middle_name',
                'surename',
                'user_address',
                'created_at', 
                'updated_at',
                'id_status_user'
            ] 
        };
    
        //? Obtener usuario por correo
        const user = await cases.getUser( {
            excludeFields,
            userCondition: userByEmail
        } );
        
        //? Concentración de contraseña
        const setPassword = body.password + PWD_SECRET;

        //? evaluación de contraseña
        const isPassword = await helpers.encryptHandler.verifiedEncrypted( setPassword, user.user_password);

        //* Verificar que el usuario exista y credenciales de usuario
        if( user === null || !isPassword || user.email !== body.email ) throw new httpErrorHandler.ExceptionError('LOGIN_FAILED');

        const { generateJWT } = helpers.jwt;

        //* Iniciar sesión
        return{
            user: {
                id_users: user.id_users,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone_number: user.phone_number,
                user_address: user.user_address,
                status_user: {
                    id_status_user: user.status_user.id_status_user,
                    status_name: user.status_user.status_name
                } 
            },
            token: generateJWT({
                id_user: user.id_users,
                email: user.email
            })
        };

    };

    return loginService;

};

//TODO: Realizar inicio de sesión que evalue el correo y el número y poder realizar el ingreso  