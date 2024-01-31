//* Importaciones nativas
const os = require('os');

/**
 * Enlaza el servidor con las direcciones de red disponibles.
 * 
 * @name getNetworks
 * @param {object} config - Define la configuración de despligue de redes.
 * @param {number} config.env - Define el entorno al que se están enlazando las redes.
 * @param {string} config.port - Define el puerto de despliegue de la aplicación.
 */
const getNetworks = ( config ) => {

    //? Desestructuración de propiedades
    const { env, port } = config;

    /**
     * @type {os} Definición de interfaces de red. 
     */
    const networkInterfaces = os.networkInterfaces();

    Object.keys( networkInterfaces ).forEach( interfaceName => {
        networkInterfaces[interfaceName]
            .filter( interfaceProps => interfaceProps.family === 'IPv4' )
            .forEach ( interfaceProps => {
                console.log(`⚡ [${ env }]: running at http://${ interfaceProps.address }:${ port }`);
            });
    });

    console.log('');

}

module.exports = { getNetworks };