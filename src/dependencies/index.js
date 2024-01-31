//* Importaciones
const { allowedOriginsCors } = require('./cors');
const { statusCode } = require('./http_status_code');
const utils = require('./utils');

module.exports = {
    allowedOriginsCors,
    statusCode,
    utils
};