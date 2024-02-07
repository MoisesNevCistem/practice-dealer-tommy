/**
 * Funcion de inyeccion de dependencias para el caso de uso de obtener un usuario.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {Models} models - Modelos
 * @returns {Funtion} getUserCase
 */
module.exports = ( models ) => {

    //? Desestructuración de dependencias
    const { User } = models;

    /**
     * Caso de uso que obtiene un solo usuaurio.
     * 
     * @name getUserCase
     * @param {object} userCondition - Condiciones para obtener usuario.
     * @returns {object|null} Retorna una referencia del usuario o un valor nulo.
     */
    const getUserCase = async ( userCondition ) => {
        return await User.findOne({ where: userCondition });
    };
    
    return getUserCase;
};