//* Importaciones
const cors = require('cors');

/**
 * Habilita CORS para todos los origenes especificados.
 * @name allowedOriginsCors
 * @returns {Function} Configuraciones de Cors
 */
const allowedOriginsCors = () => {

    //? Desestructuracion de variables de entorno
    const { LIST_ORIGINS_CORS } = process.env;

    //?Evaluacion de origenes permitidos
    if( LIST_ORIGINS_CORS !== '' ) {

        /**
         * @type {string[]} Lista de origenes permitidos.
         */
        const whiteList = LIST_ORIGINS_CORS.split('|');

        return cors({
            origin: ( origin, callback ) => {
                if( whiteList.indexOf(origin)  !== -1 ){
                    callback(null, true);
                } else{
                    callback( new Error(`El origen '${ whiteList.indexOf(origin) }' no esta permitido....`))
                }
            }
            //NOTE: Aqui se pueden agregar mas configuraciones......
        });
    }

    return cors();

};

module.exports = { allowedOriginsCors };