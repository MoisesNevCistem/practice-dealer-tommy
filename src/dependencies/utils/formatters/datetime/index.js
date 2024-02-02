//* Importación de dependencias
const { finalDatetime, getDate, getTime } = require('./utils');

//* Definiciones JS Docs
/**
 * Formato de orden de fecha.
 * @typedef {'DD-MM-YYYY' | 'MM-DD-YYYY' | 'YYYY-MM-DD'} DateOrder
 */

/**
 * Formato de separadores.
 * @typedef {'diagonal' | 'dash' | 'no_separator'} DateSeparator
 */

/**
 * Formato de retorno o despliegue del tiempo.
 * @typedef {'only_date' | 'only_date' | 'fulldate'} DateDisplay
 */

/**
 * Devuelve una fecha formateada con la configuración especificada.
 * @param {object} options - Define la configuración del formateo.
 * @param {DateOrder} options.date_order - Especifica el tipo de orden que tendrá la fecha.
 * @param {DateSeparator} options.date_separator - Especifica el tipo de separador que tendrá la fecha.
 * @param {DateDisplay} options.date_display - Especifica como la fecha será desplegada.
 * @param {string|date} date - Valor a formatear.
 * @returns {date} Fecha formateada.
 */
const datetimeFormat = ( options, date ) => {

    const { date_order, date_separator, date_display } = options;

    /**
     * @type {Date} Fecha y hora a formatear.
     */
    const datetime = date || new Date();

    const dateFormated = getDate( datetime );
    const timeFormated = getTime( datetime );

    //? Retorno de solo la hora
    if ( date_display === 'only_time' ) return `${ timeFormated }`;

    //? Retorno de solo la fecha
    if ( date_display === 'only_date' ) {

        const cleanDate = finalDatetime({
            date: dateFormated,
            separator: date_separator,
            order: date_order
        });

        return `${ cleanDate }`;

    }

    //? Retorno completo de fecha y hora
    if ( date_display === 'fulldate' ) {

        const cleanDate = finalDatetime({
            date: dateFormated,
            separator: date_separator,
            order: date_order
        });

        return `${ cleanDate } ${ timeFormated }`;

    }

}

module.exports = { datetimeFormat };