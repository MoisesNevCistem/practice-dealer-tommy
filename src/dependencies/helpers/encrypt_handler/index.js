//* Importaciones
const { hash } = require('bcryptjs');

const encrypt = async ( value ) => {
    const passwordHash = await hash( value, 8 );
    return passwordHash;
}; 

module.exports = { encrypt };