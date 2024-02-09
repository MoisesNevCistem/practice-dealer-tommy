/**
 * Función que obtiene el día, mes y año a partir de una fecha.
 * @param {Date} date  Fecha a seccionar para obtener día, mes y año
 * @returns {string} Fecha segmentada en día, mes y año.
 */
const getDate = ( date ) => {

    const day   = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses se cuentan desde 0 (enero)
    const year  = date.getFullYear();

    return `${ day }-${ month }-${ year }`;

}

module.exports = { getDate };