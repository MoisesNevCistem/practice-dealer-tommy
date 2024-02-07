//* Importaciones
const customRules = require('./custom_rules');
const { generateLogs } = require('./generate_logs');
const { generateTimezone } = require('./generate_timezone');
const { generateUUID } = require('./generate_uuid');

module.exports = {
    customRules,
    generateLogs,
    generateTimezone,
    generateUUID
};