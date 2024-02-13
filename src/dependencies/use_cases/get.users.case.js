/**
 * Funcion de inyeccion de dependencias para el caso de uso de obtener un usuario.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * @property {string} StatusUsers - Modelo de la entidad Estatus Usuario.
 * 
 * @param {Models} models - Modelos
 * @returns {Funtion} getUsersCase
 */
module.exports = ( models ) => {

    //? Desestructuración de dependencias
    const { User, StatusUsers } = models;

    /**
     * Caso de uso que obtiene todos los usuarios.
     * 
     * @name getAllUsersCase
     * @returns {Array<object>|null} Retorna una lista de los usuarios o null.
     */
    const getUsersCase = async () => {

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

        return await User.findAll({
            attributes: excludeFields,
            include: statusUserFields
        });
    };
    
    return getUsersCase;
};