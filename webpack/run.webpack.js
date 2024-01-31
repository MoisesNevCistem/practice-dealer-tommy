//* Importaciones globales
const { join } = require('path');

//* Importaciones locales
const { nodeWebpackConfig, output, rules } = require('./props');

/**
 * Función que ejecuta e inicializa funcionalidades de Webpack
 * 
 * @name runWebpack
 * @returns {object} Retorna el objeto de configuración de Webpack
 */
const runWebpack = () => {

    console.log('✔ Cargando loaders y Webpack plugins...\n');

    return {
        mode: 'production',
        entry: join( __dirname, '../' ),
        output,
        ...nodeWebpackConfig,
        module: rules,
        watch: false,
    }

}

module.exports = { runWebpack };