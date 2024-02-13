//? Desestructuración de variables de entorno
const { JWT_SECRET, EXPIRES_IN } = process.env;

/**
     * @type {string} JWT Secreto de respaldo.
     */
const JWT_SECRET_BACKUP = 'C1$t3m.$0Luc10N3$_3n*t3CnO10g14&InN0ov4C1óN_&0';

/**
 * @type {string} Tiempo de expiración de respaldo.
 */
const EXPIRES_IN_BACKUP = '1d';

/**
 * @type {string} Evaluación de JWT secretos.
 */
const setJWTSecret = JWT_SECRET === '' ? JWT_SECRET_BACKUP : JWT_SECRET;

/**
 * @type {string} Evaluación de tiempo de expiración.
 */
const setExpiresIn = EXPIRES_IN === '' ? EXPIRES_IN_BACKUP : EXPIRES_IN;

/**
 * @constant {object} propsJWT Propiedades de JWT.
 */
const propsJWT = { setExpiresIn, setJWTSecret };

module.exports = { propsJWT };