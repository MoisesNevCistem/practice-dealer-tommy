//* Importaciones
const { Router } = require('express');

const { welcomeController } = require('./controllers')

/**
 * Funcion de inyeccion de dependencias para controlador.
 * 
 * @param {object} dependencies - Lista de dependencias de la aplicacion.
 * @returns {Funtion} welcomeRouter
 */
module.exports = ( dependencies ) => {

    /**
     * @type {Router} Enrutador que coordina los servicios de bienvenida.
     */
    const welcomeRouter = Router();

    //* ----> Definicion de Rutas

    //? Servicio para la conexion de prueba AUTH
    welcomeRouter.get('/', welcomeController(dependencies));

    return welcomeRouter;
};