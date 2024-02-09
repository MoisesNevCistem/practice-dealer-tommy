//* Importaciones
const { checkConectionDB, sequelize } = require('./db.connect');

const { StatusUsers } = require('./status_user');
const { User } = require('./user');

module.exports = {
    checkConectionDB,
    sequelize,

    //* Modelos
    StatusUsers,
    User,
}