//* Importaciones
const { sequelize } = require('../db.connect');
const { DataTypes } = require('sequelize');

//? Espeficaciones de la tabla
const modelConfig = { 
    tableName: 'status_users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

//? Definición de modelo
const StatusUsers = sequelize.define('status_users', {
    id_status_user:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    status_user_uuid: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    status_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, modelConfig);

module.exports = { StatusUsers };