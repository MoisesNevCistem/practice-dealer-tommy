//* Importaciones
const { verify } = require('jsonwebtoken');
const { propsJWT } = require('./props.jwt')
const { ExceptionError } = require('../../http_error_handler');


//? Generación de token
const  verifyJWT = ( jwt ) => {
    //? Desestructuración de propiedades JWT
    const { setJWTSecret } = propsJWT;

    return verify( jwt, setJWTSecret, ( errorJWT, decoded ) => {
        if( errorJWT && errorJWT.name === 'TokenExpiredError' ){
            throw new ExceptionError('EXPIRED_TOKEN');
        }
        if( errorJWT && errorJWT.name === 'JsonWebTokenError' ){
            throw new ExceptionError('INVALID_TOKEN');
        }
        return decoded;
    });
}


module.exports = { verifyJWT };
