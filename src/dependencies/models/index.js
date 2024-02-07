//* Importaciones
const { checkConectionDB, sequelize } = require('./db.connect');

const { statusUser } = require('./status_user');
const { User } = require('./user');

module.exports = {
    checkConectionDB,
    sequelize,

    //* Modelos
    statusUser,
    User,
}