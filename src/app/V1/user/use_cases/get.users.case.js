/**
 * Funcion de inyeccion de dependencias para el caso de uso de obtener un usuario.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {Models} models - Modelos
 * @returns {Funtion} getUsersCase
 */
module.exports = ( models ) => {

    //? Desestructuración de dependencias
    const { User } = models;

    /**
     * Caso de uso que obtiene todos los usuarios.
     * 
     * @name getAllUsersCase
     * @returns {object|null} Retorna todos los usuarios o null.
     */
    const getUsersCase = async () => {
        return await User.findAll();
        return true;
    };
    
    return getUsersCase;
};