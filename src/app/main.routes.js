//* Importaciones
const { Router } = require('express');
const dependencies = require('../dependencies');

//* Importaciones de enrutadores
const welcomeRouter = require('./V1/welcome/router');

//? Enrutador principal del ambiente APP.
const appRouter = Router();

//* Servicios de server APP
appRouter.use('/api/v1/app', welcomeRouter(dependencies));

module.exports = { appRouter };
