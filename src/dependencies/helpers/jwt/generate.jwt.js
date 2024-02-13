//* Importaciones
const { sign } = require('jsonwebtoken');
const { propsJWT } = require('./props.jwt')


const generateJWT = ( payload) => {

    //? Desestructuración de propiedades JWT
    const { setExpiresIn, setJWTSecret } = propsJWT;

    //? Generación de token
    return sign( payload, setJWTSecret, { expiresIn: setExpiresIn});

};

module.exports = { generateJWT };