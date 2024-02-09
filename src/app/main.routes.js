//* Importaciones
const { Router } = require('express');
const dependencies = require('../dependencies');

//* Importaciones de enrutadores
const welcomeRouter = require('./V1/welcome/router');
const userRouter = require('./V1/user/router');

//? Desestructuracion de dependencias
const { httpErrorHandler } = dependencies;

//? Enrutador principal del ambiente APP.
const appRouter = Router();

/**
 * @type {string} Define la ruta principal del entorno
 */
const PATH_API_V1 = '/api/v1/app';

//* Servicios de server APP
appRouter.use( PATH_API_V1, welcomeRouter(dependencies) );
appRouter.use( PATH_API_V1, userRouter(dependencies) );

//* Manejador de Errores
appRouter.use( httpErrorHandler.serviceNotFound );
appRouter.use( httpErrorHandler.errorCaught );

module.exports = { appRouter };