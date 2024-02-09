//* Importaciones
const createUserController = require('./create.user.controller');
const getUserController = require('./get.user.controller');
const getUsersController = require('./get.users.controller');
const updateUserController = require('./update.user.controller');

module.exports = {
    createUserController,
    getUserController,
    getUsersController,
    updateUserController,
};