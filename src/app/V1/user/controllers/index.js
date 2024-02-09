//* Importaciones
const createUserController = require('./create.user.controller');
// const getUserController = require('./get.user.controller');
const getUserController = require('./get.user.controller');
const getUsersController = require('./get.users.controller');

module.exports = {
    createUserController,
    // getUserController(bad),
    getUserController,
    getUsersController,
};