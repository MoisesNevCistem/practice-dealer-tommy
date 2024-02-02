//* Importaciones
const { allowedOriginsCors } = require('./cors');
const httpErrorHandler = require('./http_error_handler');
const { statusCode } = require('./http_status_code');
const utils = require('./utils');

module.exports = {
    allowedOriginsCors,
    httpErrorHandler,
    statusCode,
    utils
};