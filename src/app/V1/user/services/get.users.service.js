//* Importaciones
const { getUsersCase } = require('../use_cases');

/**
 * Funcion de inyeccion de dependencias para servicio.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {Models} dependencies.models - Modelos
 * @returns {Funtion} getUsersService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { models } = dependencies;

    //? Centralización de casos de uso
    const useCases = {
        getAllUsers: getUsersCase( models )
    };

    /**
     * Servicio que coordina el proceso de Obtener todos los usuarios..
     * 
     * Un servicio se encarga de ejecutar los casos de uso. Un caso de uso,
     * es una pequeña caracteristica que interviene en medio del flujo
     * principal.
     * 
     * El servicio, retorna un resultado al controlador.
     * 
     * @name getUsersService
     * @return {Array<object>}
     */
    const getUsersService = async ( body ) => await useCases.getAllUsers();

    return getUsersService;

};
