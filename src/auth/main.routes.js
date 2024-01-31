//* Importaciones
const { Router } = require('express');
const dependencies = require('../dependencies');

//* Importaciones de enrutador
const welcomeRouter = require('./V1/welcome/router');

//? Enrutador principal de ambiente AUTH.
const authRouter = Router();

//* Servicios de server AUTH
authRouter.use('/api/v1/auth', welcomeRouter(dependencies));

module.exports = { authRouter };