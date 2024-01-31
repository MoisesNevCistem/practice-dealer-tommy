const { join } = require('path');

/**
 * Configuración de la salida del bundle
 * @constant {object}
 */
const output = {
    clean: true,
    filename: 'index.production.min.js',
    path: join( __dirname, '../../shared/dist' )
}

module.exports = { output };