//* Importaciones
const { Router } = require('express');

module.exports = ( dependencies ) => {

    /**
     * @type {Router} Enrutador que coordina los servicios de bienvenida.
     */
    const welcomeRouter = Router();

    //* ----> Definicion de Rutas

    //? Servicio para la conexion de prueba AUTH
    welcomeRouter.get('/', ( req, res, next ) => {
        res.status(200);
        res.json({
            message: 'Bienvenido a REST API Consecionaria Tommy!! :D',
            server: 'auth'
        });
        res.end();
    });

    return welcomeRouter;
};