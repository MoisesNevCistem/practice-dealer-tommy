//* Importaciones
const { sequelize } = require('../db.connect');
const { DataTypes } = require('sequelize');

//? Espeficaciones de la tabla
const modelConfig = { 
    table: 'users',
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
        allowNull: flase,
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

// TODO: Integración de relaciones
// @see https://sequelize.org/docs/v6/core-concepts/assocs/

//1- Investigar sobre las relaciones de Sequelize
//2- Realizar el modelo de Status_Users