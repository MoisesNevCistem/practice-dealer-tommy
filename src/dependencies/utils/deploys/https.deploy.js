//* Importaciones nativas
const https = require('https');
const fs = require('fs');

/**
 * Habilita el servidor en HTTPS.
 * 
 * @name httpsDeploy
 * @param {object} config - Define la configuración de despligue del servidor.
 * @param {object} config.server - Define el servidor a cargar.
 * @param {number} config.port - Define el puerto de despligue de la aplicación.
 * @param {string} config.env - Define el entorno que se ejecutará.
 * @returns Inicialización del servidor.
 */
const httpsDeploy = ( config ) => {

    //? Desestructuración de variables de entorno
    const { HOST_HTTPS, SSL_KEY, SSL_CERT } = process.env;

    //? Desestructuración de propiedades
    const { server, port, env } = config;

    //? Configuración de certificados SSL
    const options = {
        key: fs.readFileSync( SSL_KEY ).toString('utf-8'),
        cert: fs.readFileSync( SSL_CERT ).toString('utf-8')
    }

    //? Inicialización de servidor HTTPS
    const serverHTTPS = https.createServer( options, server );

    return serverHTTPS.listen(port, () => {
        console.log(`⚡ [${ env }]: running at https://${ HOST_HTTPS }:${ port }`)
    });

}

module.exports = { httpsDeploy };