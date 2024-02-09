//* Importaciones
const { getUserCase, deleteUserCase } = require('../use_cases');

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
 * @returns {Funtion} deleteUserService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { models, httpErrorHandler } = dependencies;

    //? Centralización de casos de uso
    const useCases = {
        deleteUser: deleteUserCase( models ),
        getUser: getUserCase( models ),
    };

    /**
     * Servicio que coordina el proceso de eliminar un usuario.
     * 
     * Un servicio se encarga de ejecutar los casos de uso. Un caso de uso,
     * es una pequeña caracteristica que interviene en medio del flujo
     * principal.
     * 
     * El servicio, retorna un resultado al controlador.
     * 
     * @name deleteUserService
     * @param {string} usersUUID - Código UUID.
     */
    const deleteUserService = async ( userUUID ) => {
        
        //? Condición para obtener usuario
        const userByUUID = { users_uuid: userUUID };

        //* Validar que el usuario exista
        const user = await useCases.getUser( userByUUID );

        if ( user === null || user.users_uuid !== userUUID ) {
            throw new httpErrorHandler.ExceptionError('NOT_USER_EXIST');
        }

        //* Eliminar usuario
        return await useCases.deleteUser( userUUID );

        return true

    };

    return deleteUserService;

};