//* Importaciones
const { Router } = require('express');
const dependencies = require('../dependencies');

//* Importaciones de enrutador
const userRouter = require('./V1/user/router');
const welcomeRouter = require('./V1/welcome/router');

//? Desestructuracion de dependencias
const { httpErrorHandler } = dependencies;

//? Enrutador principal de ambiente AUTH.
const authRouter = Router();

/**
 * @type {string} Define la ruta principal del entorno
 */
const PATH_AUTH_V1 = '/api/v1/auth';


//* Servicios de server AUTH
authRouter.use(PATH_AUTH_V1, welcomeRouter(dependencies));
authRouter.use(PATH_AUTH_V1, userRouter(dependencies));

//* Manejador de Errores
authRouter.use( httpErrorHandler.serviceNotFound );
authRouter.use( httpErrorHandler.errorCaught );

module.exports = { authRouter };