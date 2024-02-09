/**
 * Funcion de inyeccion de dependencias para el caso de uso de crear un usuario.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {Models} models - Modelos
 * @returns {Funtion} updateUserCase
 */
module.exports = ( models ) => {

    //? Desestructuración de dependencias
    const { User } = models;

    /**
     * Caso de uso que registra un usuario.
     * 
     * @name updateUserCase
     * @param {string} userUUID - UUUID usuario.
     * @param {object} userToUpdate - usuario a actualizar.
     * @returns {boolean} ```true``` si el usuaio ha sido actualizado.
     */
    const updateUserCase = async ( userUUID, userToUpdate ) => {
        await User.update( userToUpdate, {
            where: { users_uuid: userUUID  }
        } );
        return true; 
    };
    
    return updateUserCase;
};