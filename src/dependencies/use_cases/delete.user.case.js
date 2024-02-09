/**
 * Funcion de inyeccion de dependencias para el caso de uso de eliminar un usuario.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {Models} models - Modelos
 * @returns {Funtion} deleteUserCase
 */
module.exports = ( models ) => {

    //? Desestructuración de dependencias
    const { User } = models;

    /**
     * Caso de uso que elimina un usuario.
     * 
     * @name deleteUserCase
     * @param {string} userUUID - UUUID usuario.
     * @param {object} userToUpdate - usuario a actualizar.
     * @returns {boolean} ```true``` si el usuaio ha sido actualizado.
     */
    const deleteUserCase = async ( userUUID ) => {
        await User.destroy( {
            where: { users_uuid: userUUID  }
        } );
        return true; 
    };
    
    return deleteUserCase;
};