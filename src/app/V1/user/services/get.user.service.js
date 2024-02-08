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
 * @returns {Funtion} createUserService
 */
module.exports = ( dependencies ) => {
    //? Desestructuración de dependencias
    const { models } = dependencies;

    //? Centralización de casos de uso
    const useCases = {
        getUser: getUserCase( models ),
    };

    /**
     * Servicio que coordina la busqueda de un usuario por medio de correo electrónico.
     * 
     * Un servicio se encarga de ejecutar los casos de uso. Un caso de uso,
     * es una pequeña caracteristica que interviene en medio del flujo
     * principal.
     * 
     * El servicio, retorna un resultado al controlador.
     * 
     * @name createUserService
     * @param {object} body - cuerpo de busqueda.
     * @param {string} body.search - Busqueda.
     */
    const createUserService = async ( body ) => {
        
        //? Condición de búsqueda de usuario
        // const userSearch = {
        //     email: body.search,
        // };

        // const dbToSearch = await useCases.getUser( userSearch );

        // if( dbToSearch.email === body.search || dbToSearch.phone_number === body.search) return dbToSearch;

        const userByEmail = {
            email: body.search,
        };

        const userByPhoneNumber = {
            phone_number: body.search,
        };

        //? Obtener usuario por correo
        const userEmail = await useCases.getUser( userByEmail );
        const userPhoneNumber = await useCases.getUser( userByPhoneNumber );

        //* Verificar que el correo no este registrado
        if (userEmail !== null && userEmail.email === body.search) {
            return userEmail;
        }

        //* Verificar que el número telefonico no este registrado
        if (userPhoneNumber !== null && userPhoneNumber.phone_number === body.search) {
            return userPhoneNumber;
        }

        return null;
    };

    return createUserService;

};