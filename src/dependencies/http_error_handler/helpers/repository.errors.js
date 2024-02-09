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
    },
    EMAIL_EXIST: ( email ) => {
        return{ 
            succes: false,
            status_code: statusCode.CONFLICT,
            error:{
                code: 'B04',
                message: `El correo '${ email }' ya ha sido registrado`,
            }
        }
    },
    PHONE_NUMBER_EXIST: ( phoneNumber ) => {
        return{ 
            succes: false,
            status_code: statusCode.CONFLICT,
            error:{
                code: 'B05',
                message: `El número '${ phoneNumber }' ya ha sido registrado`,
            }
        }
    },
    NOT_USER_EXIST: ( ) => {
        return{ 
            succes: false,
            status_code: statusCode.CONFLICT,
            error:{
                code: 'B06',
                message: `El usuario que intenta consultar no existe`,
            }
        }
    }
}

module.exports = { repositoryErrors }