//* Importaciones
const { Router } = require('express');

const { createUserController } = require('./controllers');

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
    userRouter.post( '/create_user', createUserController(dependencies) );

    return userRouter;
};