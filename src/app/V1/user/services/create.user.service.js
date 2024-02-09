//* Importaciones
const { createUserCase, getUserCase } = require('../use_cases');

/**
 * Funcion de inyeccion de dependencias para servicio.
 * 
 * @typedef {object} HttpErrorHandler
 * @property {object} ExceptionError - Clase que estándariza los errores de la apolicación.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {HttpErrorHandler} dependencies.httpErrorHandler - Manejador de errores
 * @param {Models} dependencies.models - Modelos
 * @returns {Funtion} createUserService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { models, httpErrorHandler } = dependencies;

    //? Centralización de casos de uso
    const useCases = {
        createUser: createUserCase( models ),
        getUser: getUserCase( models ),
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

        //? Obtener usuario por correo
        const userEmail = await useCases.getUser( userByEmail );
        const userPhoneNumber = await useCases.getUser( userByPhoneNumber );

        //* Verificar que el correo no este registrado
        if ( userEmail !== null && userEmail.email === body.email ){
            throw new httpErrorHandler.ExceptionError('EMAIL_EXIST', body.email);
        }

        //* Verificar que el número telefonico no este registrado
        if ( userPhoneNumber !== null &&  userPhoneNumber.phone_number === body.phone_number ){
            throw new httpErrorHandler.ExceptionError('PHONE_NUMBER_EXIST', body.phone_number);
        }

        //* Crear usuario
        return await useCases.createUser( body );

    };

    return createUserService;

};