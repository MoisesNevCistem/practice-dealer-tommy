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
     * @param {object} config - Condiciones para obtener usuarios.
     * @param {object} config.userconditions - Condiciones para obtener usuarios.
     * @param {object} config.excludeFields - Campos a excluid
     * @param {object} config.statusUserFields - Campus a mostrar en la tabla StatusUser.
     * @param {object} userCondition - Condiciones para obtener usuario.
     * @returns {object|null} Retorna una referencia del usuario o un valor nulo.
     */
    const getUserCase = async ( config ) => {

        //? Desestructuración
        const { excludeFields, statusUserFields, userCondition } = config;

        return await User.findOne({ 
            where: userCondition === undefined ? {} :userCondition,
            attributes: excludeFields === undefined ? {} :excludeFields,
            include: statusUserFields === undefined ? { model: models.StatusUsers } :statusUserFields,
        });
    };
    
    return getUserCase;
};