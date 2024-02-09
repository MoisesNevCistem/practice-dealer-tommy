/**
 * Funcion de inyeccion de dependencias para servicio.
 * 
 * @typedef {object} Helpers
 * @property {object} encryptHandler - Clase que estándariza los errores de la apolicación.
 * @property {object} JWT - Clase que estándariza los errores de la apolicación.
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
 * @param {HttpErrorHandler} dependencies.helpers - Funciones de apoyo.
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
        const userEmail = await cases.getUser( {
            excludeFields,
            userCondition: userByEmail
        } );
        
        console.log('✨ Credential: ', body);
        console.log('userEmail: ', userEmail);

        //* Iniciar sesión
        return{};

    };

    return loginService;

};