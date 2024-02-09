/**
 * Funcion de inyeccion de dependencias para el caso de uso de crear un usuario.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * 
 * @param {Models} models - Modelos
 * @returns {Funtion} createUserCase
 */
module.exports = ( models ) => {

    //? Desestructuración de dependencias
    const { User } = models;

    /**
     * Caso de uso que registra un usuario.
     * 
     * @name createUserCase
     * @param {object} userToCreate - usuario a crear.
     * @param {string} userToCreate.users_uuid - Código UUID.
     * @param {string} userToCreate.first_name - Primer nombre.
     * @param {string} [userToCreate.middle_name] - Segundo nombre (opcional).
     * @param {string} userToCreate.last_name - Apellido paterno.
     * @param {string} [userToCreate.surename] - Apellido materno (opcional).
     * @param {string} userToCreate.email - Correo electrónico.
     * @param {string} userToCreate.user_password - Contraseña.
     * @param {string} userToCreate.phone_number - Número de teléfono.
     * @param {string} [userToCreate.user_address] - Dicrección (opcional).
     * @returns {boolean} ```true``` si el usuaio ha sido creado.
     */
    const createUserCase = async ( userToCreate ) => {
        await User.create( userToCreate );
        return true; 
    };
    
    return createUserCase;
};