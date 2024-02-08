//* Importaciones
const { getUsersCase } = require('../use_cases');

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
 * @returns {Funtion} getAllUserService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { models } = dependencies;

    //? Centralización de casos de uso
    const useCases = {
        getAllUser: getUsersCase( models )
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
     * @name getAllUserService
     */
    const getUsersService = async ( body ) => {

        //* Obtener todos los usuarios
        return await useCases.getAllUser();
    };

    return getUsersService;

};
