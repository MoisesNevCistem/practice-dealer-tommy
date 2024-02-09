/**
 * Función que obtiene la hora formateada a 'AM' o 'PM' a partir de una fecha asignada.
 * @param date {Date} Fecha y hora para realizar la conversión.
 * @returns Retorna la hora formada en cadena de texto.
 */
const getTime = ( date ) => {

    /**
     * @type {String} Indicador de tiempo <AM|PM>
     */
    let timeIndicator = 'AM';

    /**
     * @type {Date} Extracción de la hora.
     */
    let hours     = date.getHours();

    /**
     * @type {Date} Extracción de los minutos.
     */
    const minutes = date.getMinutes().toString().padStart(2, '0');

    /**
     * @type {Date} Extracción de los segundos.
     */
    const seconds = date.getSeconds().toString().padStart(2, '0');

    if (hours >= 12) {
        timeIndicator = 'PM';
        if (hours > 12) { hours -= 12; }
    }

    return `${ hours.toString().padStart(2, '0') }:${ minutes }:${ seconds } ${ timeIndicator }`;

}

module.exports = { getTime };