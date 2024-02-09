//* Importaciones
const { sequelize } = require('../db.connect');
const { DataTypes } = require('sequelize');
const { StatusUsers } = require('../status_user');

//? Espeficaciones de la tabla
const modelConfig = { 
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

//? Definición de modelo
const User = sequelize.define('user', {
    id_users:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    users_uuid: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    surename: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    user_password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    user_address: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    id_status_user: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
    },

}, modelConfig);

User.belongsTo(StatusUsers, { foreignKey: 'id_status_user' }); //? 👈 Relación de Uno a Uno

module.exports = { User };