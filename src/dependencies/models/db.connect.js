//* Importaciones globales
const { Sequelize } = require('sequelize');
const { generateTimezone } = require('../helpers');

//? Desestructuración de variables de entorno
const {
    DB_HOST, DB_USER, DB_PWD, 
    DB_NAME, DB_PORT, DB_ENCRYPT, 
    DB_LOGS, 
} = process.env;

/**
 * Anula el formato de zona horaria para fechas en MSSQL asignados en 'DataType.DATE'.
 * 
 * Esto soluciona un error en la formación de fechas y horas de Sequelize
 * para una base de datos MSSQL. Se debe a que Sequelize, añade el valor 
 * extra "+00:00", que no es compatible por MSSQL.
 * 
 * Más información, consulte esta liga de StackOverflow:
 * @see https://stackoverflow.com/questions/58034185/inserting-or-updating-a-date-field-give-the-following-error-conversion-failed-wh
 * 
 * ❌ ***ADVERTENCIA***: 
 * No se recomienda sobreescribir o modificar los 'prototypes' de JavaScript bajo
 * ningún concepto. Este caso es particular, debido a que es la mejor solución a 
 * este contexto. De otro modo, evite sobreescribir los 'prototypes'.
 * 
 * @param {*} date - Define una fecha.
 * @param {*} options - Define opciones alternativas.
 * @returns Fecha Formateada.
 */
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

/**
 * Instancia de conexión a base de datos.
 * 
 * @param {String} DB_HOST - Define el nombre de host que alberga la base de datos.
 * @param {String} DB_USER - Define el nombre de usuario para acceder a la base de datos.
 * @param {String} DB_PWD - Define la contraseña de acceso a la base de datos.
 * @param {String} DB_NAME - Define el nombre de la base de datos.
 * @param {String} DB_PORT - Define el puerto de despliegue de la base de datos.
 * @param {String} DB_ENCRYPT - Habilita el cifrado de la conexión a base de datos.
 * @param {String} DB_LOGS - Habilita los logs de consultas a BD.
 */
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
    host: DB_HOST,
    dialect: 'mysql',
    dialectModulePath: 'mysql2',
    port: DB_PORT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: ( log ) => {
        if ( Boolean( DB_LOGS ) ) {
            console.log(`✨ [CONSULTA SEQUELIZE] - ${ log }`);
            console.log('');
            return;
        }
    },
    timezone: generateTimezone(),
    dialectOptions: {
        //* Forma en SQL server
        // //? Configura el tipo de tiempo a utilizar (UTC o Zona Horaria Local)
        // useUTC: false,
        // options: {
        //     //? Configura el cifrado de la conexión

        // }
        //? configura el cifrado de la conexión
        ssl: Boolean( DB_ENCRYPT )
    }
});

/**
 * Verifica la conexión a base de datos.
 * 
 * @name checkConectionDB
 */
const checkConectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('🙌 Conexión a base de datos establecida con éxito');
    } catch (ConnectionError) {
        console.log('❌ La conexión a base de datos ha fallado: ', ConnectionError);
    }
};

module.exports = { sequelize, checkConectionDB };