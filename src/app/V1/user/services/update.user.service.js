//* Importaciones
const { getUserCase, updateUserCase } = require('../use_cases');

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
 * @returns {Funtion} updateUserService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { models, httpErrorHandler } = dependencies;

    //? Centralización de casos de uso
    const useCases = {
        updateUser: updateUserCase( models ),
        getUser: getUserCase( models ),
    };

    /**
     * Servicio que coordina el proceso de eidtar un usuario.
     * 
     * Un servicio se encarga de ejecutar los casos de uso. Un caso de uso,
     * es una pequeña caracteristica que interviene en medio del flujo
     * principal.
     * 
     * El servicio, retorna un resultado al controlador.
     * 
     * @name updateUserService
     * @param {object} body - Usuario a editar.
     * @param {string} body.users_uuid - Código UUID (opcional).
     * @param {string} body.first_name - Primer nombre (opcional).
     * @param {string} [body.middle_name] - Segundo nombre (opcional).
     * @param {string} body.last_name - Apellido paterno (opcional).
     * @param {string} [body.surename] - Apellido materno (opcional).
     * @param {string} body.email - Correo electrónico (opcional).
     * @param {string} body.phone_number - Número de teléfono (opcional).
     * @param {string} [body.user_address] - Dirección (opcional).
     * @param {string} [body.id_status_user] - Estatus (opcional).
     */
    const updateUserService = async ( userUUID, body ) => {
        //? Condición para obtener usuario
        const userByUUID = { users_uuid: userUUID };

        //* Validar que el usuario exista
        const user = await useCases.getUser( userByUUID );
        if ( user === null || user.users_uuid !== userUUID ) {
            throw new httpErrorHandler.ExceptionError('NOT_USER_EXIST');
        }

        //* Actualizar usuario
        return await useCases.updateUser( userUUID, body );

    };

    return updateUserService;

};