/**
 * Obtiene la zona horaria del sistema.
 * 
 * @returns {string} Uso Horario.
 */
const generateTimezone = () => {

    //? Obtener fecha y hora actual
    const today = new Date();

    //? Obtener la zona horaria del sistema
    const getTimezone = today.getTimezoneOffset();

    //? Convertir la diferencia de minutos a horas
    const timeDifference = getTimezone / 60;

    //? Generar la zona horaria del sistema
    const timezone = `Etc/GMT${ timeDifference >= 0 ? '+' : '-'}${Math.abs( timeDifference )}`;

    return timezone;

}

module.exports = { generateTimezone };