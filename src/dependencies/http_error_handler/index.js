//* Importaciones
const { errorCaught, serviceNotFound } = require('./errors');
const { ExeptionError } = require('./helpers/exception.error');

module.exports = {
    errorCaught,
    serviceNotFound,
    ExeptionError,
};