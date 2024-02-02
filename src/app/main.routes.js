//* Importaciones
const { Router } = require('express');
const dependencies = require('../dependencies');

//* Importaciones de enrutadores
const welcomeRouter = require('./V1/welcome/router');

//? Desestructuracion de dependencias
const { httpErrorHandler } = dependencies;

//? Enrutador principal del ambiente APP.
const appRouter = Router();

//* Servicios de server APP
appRouter.use('/api/v1/app', welcomeRouter(dependencies));

//* Manejador de Errores
appRouter.use( httpErrorHandler.serviceNotFound );
appRouter.use( httpErrorHandler.errorCaught );

module.exports = { appRouter };