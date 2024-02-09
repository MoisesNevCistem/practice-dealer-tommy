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
    const { StatusUsers, User } = models;

    /**
     * Caso de uso que obtiene un solo usuaurio.
     * 
     * @name getUserCase
     * @param {object} userCondition - Condiciones para obtener usuario.
     * @returns {object|null} Retorna una referencia del usuario o un valor nulo.
     */
    const getUserCase = async ( userCondition ) => {

        /**
         * @type {object} Configuración de campos a excluir.
         */
        const excludeFields = { exclude:['user_password', 'created_at', 'updated_at', 'id_status_user'] };

        /**
         * @type {object} Configuración de campos de estado de usuario.
         */
        const statusUserFields = { 
            model: StatusUsers,
            attributes: ['id_status_user', 'status_name'],
        };

        return await User.findOne({ 
            where: userCondition,
            attributes: excludeFields,
            include: statusUserFields
        });
    };
    
    return getUserCase;
};