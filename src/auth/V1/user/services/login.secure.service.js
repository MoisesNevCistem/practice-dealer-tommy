const { Op } = require('sequelize');

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
 * @returns {Funtion} loginSecureService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { helpers, models, httpErrorHandler, useCases } = dependencies;

    //? Centralización de casos de uso
    const cases = {
        getUserSecure: useCases.getUserCase( models ),
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
     * @name loginSecureService
     * @param {object} body - Credenciales de usuario.
     * @param {string} body.username - Correo electrónico.
     * @param {string} body.user_password - Contraseña.
     */
    const loginSecureService = async ( body ) => {
        //? Contraseña secreta
        const { PWD_SECRET } = process.env;

        //? Condición de búsqueda de usuario
        const usernameCondition = {
            [Op.or]: [
                { email:  body.username },
                { phone_number:  body.username }
            ]
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

        //? Obtener usuario por correo o número de teléfono
        const user = await cases.getUserSecure( {
            excludeFields,
            userCondition: usernameCondition
        } );

        if( user === null ) throw new httpErrorHandler.ExceptionError('LOGIN_FAILED');

        //? Concentración de contraseña
        const setPassword = body.password + PWD_SECRET;

        //? Evaluación de contraseña
        const isPassword = await helpers.encryptHandler.verifiedEncrypted( setPassword, user.user_password );

        //* Verificar que el usuario exista y credenciales de usuario
        if( !isPassword && (user.email !== body.username || user.phone_number !== body.username) ) throw new httpErrorHandler.ExceptionError('LOGIN_FAILED');

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

    return loginSecureService;

};