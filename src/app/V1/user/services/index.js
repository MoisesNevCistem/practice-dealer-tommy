//* Importaciones
const createUserService = require('./create.user.service');
const getUserService = require('./get.user.service');
const getUsersService = require('./get.users.service');
const updateUserService = require('./update.user.service');

module.exports = {
    createUserService,
    getUserService,
    getUsersService,
    updateUserService
};