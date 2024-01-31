/**
 * Configuración de reglas o loaders a precargr durante la creación del bundle
 * @constant {object}
 */
const rules = {
    rules: [
        {
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
        //NOTE: Aqui se puede configurar mas reglas....
    ]
}

module.exports = { rules };