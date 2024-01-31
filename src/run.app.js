//* Importaciones
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

//* Importación de dependencias
const { allowedOriginsCors } = require('./dependencies');

/**
 * Inicializa los middlewares globales a un enrutador.
 * 
 * @name runApp
 * @param {*} router - Enrutador a precargar. 
 * @returns {object} Instancia de Express
 */
const runApp = ( router ) => {

    //? Desestructuraión de variables de entorno
    const { NODE_ENV } = process.env;

    //? Instancia de servidor de express
    const app = express();

    //? Evaluación de dependencias en desarollo
    if( NODE_ENV === 'development' ){
        app.use( morgan('dev') );
        //NOTE: Aquí se puede configurar más middlewares 
    }

    app.use( allowedOriginsCors() );
    app.use( helmet() );
    app.use( router );

    return app;
};

module.exports = {runApp};