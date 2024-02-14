/**
 * Funcion de inyeccion de dependencias para servicio.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @typedef {object} UseCases
 * @property {Function} getUsersCase - Caso de uso para  Obtenener todos usuario.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {Models} dependencies.models - Modelos
 * @param {UseCases} dependencies.useCases - Casos de Uso.
 * @returns {Funtion} getUsersService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { models, useCases } = dependencies;

    //? Centralización de casos de uso
    const cases = {
        getAllUsers: useCases.getUsersCase( models )
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
    const getUsersService = async ( body ) => await cases.getAllUsers();

    return getUsersService;

};
