const nodeExternals = require('webpack-node-externals');

/**
* Configuración de Node en Webpack
* @constant {object}
*/
const nodeWebpackConfig = {
    target: 'node',
    externalsPresets: { node: true },
    externals: nodeExternals(),
}

module.exports = { nodeWebpackConfig };