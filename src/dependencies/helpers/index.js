//* Importaciones
const customRules = require('./custom_rules');
const { encrypt } = require('./encrypt_handler');
const { generateLogs } = require('./generate_logs');
const { generateTimezone } = require('./generate_timezone');
const { generateUUID } = require('./generate_uuid');

module.exports = {
    customRules,
    encrypt,
    generateLogs,
    generateTimezone,
    generateUUID
};