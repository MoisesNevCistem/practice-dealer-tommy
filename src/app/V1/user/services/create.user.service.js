/**
 * Funcion de inyeccion de dependencias para servicio.
 * 
 * @typedef {object} HttpErrorHandler
 * @property {object} ExceptionError - Clase que estándariza los errores de la apolicación.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * @property {string} StatusUser - Modelo de la entidad Estatus Usuario.
 * 
 * @typedef {object} UseCases
 * @property {Function} createUserCase - Caso de uso para Crear un usuario.
 * @property {Function} getUserCase - Caso de uso para  Obtenener un usuario.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {HttpErrorHandler} dependencies.httpErrorHandler - Manejador de errores
 * @param {Models} dependencies.models - Modelos
 * @param {UseCases} dependencies.useCases - Casos de Uso.
 * @returns {Funtion} createUserService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { models, httpErrorHandler, useCases } = dependencies;

    //? Centralización de casos de uso
    const cases = {
        createUser: useCases.createUserCase( models ),
        getUser: useCases.getUserCase( models ),
    };

    /**
     * Servicio qie coordina el proceso de crear un usuario.
     * 
     * Un servicio se encarga de ejecutar los casos de uso. Un caso de uso,
     * es una pequeña caracteristica que interviene en medio del flujo
     * principal.
     * 
     * El servicio, retorna un resultado al controlador.
     * 
     * @name createUserService
     * @param {object} body - Usuario a crear.
     * @param {string} body.users_uuid - Código UUID.
     * @param {string} body.first_name - Primer nombre.
     * @param {string} [body.middle_name] - Segundo nombre (opcional).
     * @param {string} body.last_name - Apellido paterno.
     * @param {string} [body.surename] - Apellido materno (opcional).
     * @param {string} body.email - Correo electrónico.
     * @param {string} body.user_password - Contraseña.
     * @param {string} body.phone_number - Número de teléfono.
     * @param {string} [body.user_address] - Dicrección (opcional).
     */
    const createUserService = async ( body ) => {

        //? Condición de búsqueda de usuario
        const userByEmail = {
            email: body.email,
        };

        const userByPhoneNumber = {
            phone_number: body.phone_number,
        };

        /**
         * @type {object} Configuración de campos a excluir.
         */
        const excludeFields = { 
            exclude:[
                'users_uuid',
                'first_name',
                'middle_name',
                'last_name',
                'surename',
                'user_password',
                'user_address',
                'created_at', 
                'updated_at',
                'id_status_user'
            ] 
        };

        //? Obtener usuario por correo
        const userEmail = await cases.getUser( {
            excludeField,
            userCondition: userByEmail
        } );
        const userPhoneNumber = await cases.getUser( {
            excludeField,
            userCondition: userByPhoneNumber
        } );

        //* Verificar que el correo no este registrado
        if ( userEmail !== null && userEmail.email === body.email ){
            throw new httpErrorHandler.ExceptionError('EMAIL_EXIST', body.email);
        }

        //* Verificar que el número telefonico no este registrado
        if ( userPhoneNumber !== null &&  userPhoneNumber.phone_number === body.phone_number ){
            throw new httpErrorHandler.ExceptionError('PHONE_NUMBER_EXIST', body.phone_number);
        }

        //* Crear usuario
        return await cases.createUser( body );

    };

    return createUserService;

};