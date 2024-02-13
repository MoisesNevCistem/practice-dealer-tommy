//* Importaciones
const { generateJWT } = require('./generate.jwt');
const { verifyJWT } = require('./verify.jwt');

module.exports = { generateJWT, verifyJWT };