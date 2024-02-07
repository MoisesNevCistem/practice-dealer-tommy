/**
 * Obtiene la zona horaria del sistema.
 * 
 * @name generateTimezone
 * @returns {string} Uso Horario.
 */
const generateTimezone = () => {

    //? Deducción de zona horaria
    const now = new Date();
    const timeZoneOffsetMinutes = now.getTimezoneOffset();
    const timeZoneOffsetHours = timeZoneOffsetMinutes / 60;

    //? Formato para obtener la cadena de zona horaria en formato ±HH:mm
    const timeZoneOffsetString = (timeZoneOffsetHours >= 0 ? '+' : '-') +
        Math.abs(Math.floor(timeZoneOffsetHours)).toString().padStart(2, '0') + ':' +
        (Math.abs(timeZoneOffsetMinutes) % 60).toString().padStart(2, '0');
    
    return timeZoneOffsetString;

}

module.exports = { generateTimezone };