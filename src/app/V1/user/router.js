//* Importaciones
const { Router } = require('express');

const { createUserController, deleteUserController, getUserController, getUsersController, updateUserController } = require('./controllers');
const { createUserRule, getUserRule, updateUserRule } = require('./rules');

/**
 * Funcion de inyeccion de dependencias para controlador.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @returns {Funtion} userRouter
 */
module.exports = ( dependencies ) => {

    /**
     * @type {Router} Enrutador que coordina los servicios de bienvenida.
     */
    const userRouter = Router();

    //* ----> Definicion de Rutas

    //? Servicio para creación de usuarios
    userRouter.post( 
        '/create_user',                        //* --> Ruta de servicio
        createUserRule(dependencies),          //* --> Reglas
        createUserController(dependencies) 
    );  //* --> Controlador
    
    //? Servicio para consultar todos los usuarios
    userRouter.get( 
        '/users',                              //* --> Ruta de servicio
        getUsersController(dependencies) 
    );    //* --> Controlador

    //? Servicio para consultar un usuario
    userRouter.get(
        '/user/:users_uuid',                    //* --> Ruta de servicio
        getUserRule(dependencies),              //* --> Reglas
        getUserController(dependencies)         //* --> Controlador
    );

    //? Servicio para modificar un usuario
    userRouter.put(
        '/user/:users_uuid',                    //* --> Ruta de servicio
        [
            getUserRule(dependencies),
            updateUserRule(dependencies)        //* --> Reglas
        ],                                          
        updateUserController(dependencies)      //* --> Controlador
    );

    //? Servicio para elimninar un usuario
    userRouter.delete(
        '/user/:users_uuid',                    //* --> Ruta de servicio
        getUserRule(dependencies),              //* --> Reglas
        deleteUserController(dependencies)      //* --> Controlador
    );

    return userRouter;
};