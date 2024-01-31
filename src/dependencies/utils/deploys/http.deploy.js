//* Importación de utilidades
const { getNetworks } = require('../networks');

/**
 * Habilita el servidor en HTTP.
 * 
 * @name httpDeploy
 * @param {object} deployConfig - Define la configuración de despligue del servidor.
 * @param {object} deployConfig.server - Define el servidor a cargar.
 * @param {number} deployConfig.port - Define el puerto de despligue de la aplicación.
 * @param {string} deployConfig.env - Define el entorno que se ejecutará.
 * @returns Inicialización del servidor.
 */
const httpDeploy = ( deployConfig ) => {

    //? Desestructuración de propiedades
    const { server, port, env } = deployConfig;

    return server.listen(port, () => getNetworks({ env, port }));

}

module.exports = { httpDeploy };