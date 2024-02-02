//* Importaciones
const { errorCaught, serviceNotFound } = require('./errors');
const { ExceptionError } = require('./helpers/exception.error');

module.exports = {
    errorCaught,
    serviceNotFound,
    ExceptionError,
};