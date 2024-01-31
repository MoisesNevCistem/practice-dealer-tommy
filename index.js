//* Configuración de variables de entorno
require('dotenv').config();

//* Importación de dependencias
const { utils } = require('./src/dependencies');

//* Importación de runApp de la Aplicación
const { runApp } = require('./src/run.app');

//* Importación de enrutadores principales
const { appRouter } = require('./src/app/main.routes');
const { authRouter } = require('./src/auth/main.routes');

//* Inicialización de servidores
const AppServer = runApp(appRouter);
const AuthServer = runApp(authRouter);

//? Desestructuraión de variables de entorno
const { NODE_ENV, APP_VERSION, APP_PORT, AUTH_PORT, HTTPS } = process.env;

//? Ejecución de servidores
if( NODE_ENV === 'production' && Boolean(HTTPS) ){
    console.log("✅ Desplegando Servidor HTTPS");

    utils.deploys.httpsDeploy({
        env: 'APP',
        port: APP_PORT,
        server: AppServer,
    });

    utils.deploys.httpsDeploy({
        env: 'AUTH',
        port: AUTH_PORT,
        server: AuthServer,
    });
} else {
    console.log("✅ Desplegando Servidor HTTP");

    utils.deploys.httpDeploy({
        env: 'APP',
        port: APP_PORT,
        server: AppServer
    });

    utils.deploys.httpDeploy({
        env: 'AUTH',
        port: AUTH_PORT,
        server: AuthServer
    });
}


console.log(`✨ Dealer Tommy v${ APP_VERSION } has been started...\n`);