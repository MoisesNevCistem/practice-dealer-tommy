//* Importaciones
const { Router } = require('express');

const { createUserController, getUserController, getUsersController } = require('./controllers');
const { createUserRule, getUserRule } = require('./rules');

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
        createUserController(dependencies) );  //* --> Controlador
    
    //? Servicio para consultar todos los usuarios
    userRouter.get( 
        '/users',                          //* --> Ruta de servicio
        getUsersController(dependencies) );    //* --> Controlador

    //? Servicio para consultar un usuario
    // userRouter.post( 
    //     '/get_user',                          //* --> Ruta de servicio
    //     getUserController(dependencies) );    //* --> Controlador
    userRouter.get(
        '/user/:users_uuid',                    //* --> Ruta de servicio
        getUserRule(dependencies),              //* --> Reglas
        getUserController(dependencies)         //* --> Controlador
    );


    return userRouter;
};