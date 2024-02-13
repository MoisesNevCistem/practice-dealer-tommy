//* Importaciones
const { Router } = require('express');

const { loginController, loginSecureController } = require('./controllers');
const { loginRule, loginSecureRule } = require('./rules');

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
        '/login',                                //* --> Ruta de servicio
        loginRule(dependencies),                 //* --> Reglas
        loginController(dependencies),           //* --> Controlador
    );

    //? Servicio para creación de usuarios
    userRouter.post(
        '/login-secure',                         //* --> Ruta de servicio
        loginSecureRule(dependencies),           //* --> Reglas
        loginSecureController(dependencies),     //* --> Controlador
    );

    return userRouter;
};