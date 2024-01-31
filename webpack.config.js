//* Importaciones locales
const { runWebpack } = require('./webpack/run.webpack');

/**
 * Función que precarga la configuración inicial de Webpack
 * @param {object} env Define el tipo de entorno en el que se ejecuta Webpack
 * @param {object} arg Define varaibles de entorno globales de Webpack
 * @returns {object} Retorna funcionalidades de Webpack
 */
const BuildConfig = ( env, arg ) => {

    if ( arg.mode === 'development' || arg.mode === 'production' ) {

        console.log(`✔ Ejecutando Webpack en modo "${ arg.mode }"...`);
        return runWebpack();

    } else {

        console.log(`El modo "${ arg.mode }" no es valido en la configuracion de Webpack.\n`);
        console.log('Tal vez quisiste colocar "development" or "production" ?\n');

    }

}

module.exports = BuildConfig;