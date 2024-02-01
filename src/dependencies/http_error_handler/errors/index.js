const { errorCaught } = require('./error.caught.handler');
const { serviceNotFound } = require('./service.not.found.handler');

module.exports = {
    errorCaught,
    serviceNotFound,
};