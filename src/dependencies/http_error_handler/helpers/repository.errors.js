//* importaciones
const { statusCode } = require('../../http_status_code');

/**
 * @constant {object} Catalogo de errores.
 */
const repositoryErrors = {
    INTERNAL_SERVER_ERROR: ( stack ) =>{
        return{ 
            succes: false,
            status_code: statusCode.INTERNAL_SERVER_ERROR,
            error:{
                code: 'B01',
                message: 'Opps.... estamos experimentando problemas en el servidor, estamos trabajando en ello',
                stack_error: stack
            }
        }
    },
    SERVICE_NOT_FOUND: ( url ) => {
        return{ 
            succes: false,
            status_code: statusCode.NOT_FOUND,
            error:{
                code: 'B02',
                message: `El servicio '${ url }' que intentaconsultar no esta disponible`,
            }
        }
    },
    VALIDATE_ERROR: ( error ) => {
        return{ 
            succes: false,
            status_code: statusCode.BAD_REQUEST,
            error:{
                code: 'B03',
                message: error,
            }
        }
    }
}

module.exports = { repositoryErrors }