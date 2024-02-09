/**
 * Funcion de inyeccion de dependencias para servicio.
 * 
 * @typedef {object} HttpErrorHandler
 * @property {object} ExceptionError - Clase que estándariza los errores de la apolicación.
 * 
 * @typedef {object} Models
 * @property {string} User - Modelo de la entidad Usuario.
 * @property {string} StatusUser - Modelo de la entidad Estatus Usuario.
 * 
 * @typedef {object} UseCases
 * @property {Function} getUserCase - Caso de uso para  Obtenener un usuario.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @param {HttpErrorHandler} dependencies.httpErrorHandler - Manejador de errores
 * @param {Models} dependencies.models - Modelos
 * @param {UseCases} dependencies.useCases - Casos de Uso.
 * @returns {Funtion} getUsersService
 */
module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpErrorHandler, models, useCases } = dependencies;

    //? Centralización de casos de uso
    const cases = {
        getUser: useCases.getUserCase( models ),
    };

    /**
     * Servicio que coordina el proceso de obtener un usuario.
     * 
     * Un servicio se encarga de ejecutar los casos de uso. Un caso de uso,
     * es una pequeña caracteristica que interviene en medio del flujo
     * principal.
     * 
     * El servicio, retorna un resultado al controlador.
     * 
     * @name getUsersService
     * @return {object}
     */
    const getUsersService = async ( userUUID ) => {
        
        //? Condición para obtener usuario
        const userByUUID = { users_uuid: userUUID };

        /**
         * @type {object} Configuración de campos a excluir.
         */
        const excludeFields = { 
            exclude:[
                'user_password', 
                'created_at', 
                'updated_at', 
                'id_status_user'
            ] 
        };

        /**
         * @type {object} Configuración de campos de estado de usuario.
         */
        const statusUserFields = { 
            model: models.StatusUsers,
            attributes: ['id_status_user', 'status_name'],
        };


        //* Obtener usuario
        const user = await cases.getUser( {
            excludeFields,
            statusUserFields,
            userCondition: userByUUID
        } );

        //* Verificar si el usuario existe
        if ( user === null || user.users_uuid !== userUUID ) {
            throw new httpErrorHandler.ExceptionError('NOT_USER_EXIST');
        }

        return user;
    }

    return getUsersService;

};
