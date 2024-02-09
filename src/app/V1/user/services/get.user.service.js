//* Importaciones
const { getUserCase } = require('../use_cases');

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
 * @returns {Funtion} getUsersService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpErrorHandler, models } = dependencies;

    //? Centralización de casos de uso
    const useCases = {
        getUser: getUserCase( models ),
    };

    /**
     * Servicio que coordina el proceso de obtener un usuario.
     * 
     * Un servicio se encarga de ejecutar los casos de uso. Un caso de uso,
     * es una pequeña caracteristica que interviene en medio del flujo
     * principal.
     * 
     * El servicio, retorna un resultado al controlador.
     * 
     * @name getUsersService
     * @return {object}
     */
    const getUsersService = async ( userUUID ) => {
        
        //? Condición para obtener usuario
        const userByUUID = { users_uuid: userUUID };

        //* Obtener usuario
        const user = await useCases.getUser( userByUUID );

        //* Verificar si el usuario existe
        if ( user === null || user.users_uuid !== userUUID ) {
            throw new httpErrorHandler.ExceptionError('NOT_USER_EXIST');
        }

        return user;
    }

    return getUsersService;

};
