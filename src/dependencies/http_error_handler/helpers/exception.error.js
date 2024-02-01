//* Importaciones
const { repositoryErrors } = require('./repository.errors');

/**
 * Clase para estandarizar errores en la aplicacion.
 * 
 * @class
 * @name ExceptionError
 */
class ExceptionError extends Error {

    constructor( typeError, aditionalValue = undefined ) {
        super();

        //? Asignacion de propiedades
        this.typeError = typeError;
        this.aditionalValue = aditionalValue;
    }

    setError () {
        return typeof this.aditionalValue === undefined
            ? repositoryErrors[this.typeError]()
            : repositoryErrors[this.typeError](this.aditionalValue);
    }

}

module.exports = { ExceptionError }