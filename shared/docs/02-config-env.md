# **Configuración de Variables de Entorno**

A continuación, se describirán los pasos para configurar las variables de entorno de la aplicación:

1. ✨ **Ubique y abra un archivo llamado `.env-example`**.

2. ✨ **Renombre el archivo `.env-example` por `.env`**.

3. ✨ **En el contenido, ingrese lo siguiente**:

    ```
    #* Variables de Entorno
    #* 1. Es importante, que este archivo, este en la raíz del proyecto.
    #* 2. Renombre este archivo a ".env" y la app hará el resto.
    #* 3. Se recomienda dejar las variables de entorno en el orden ya especifícado.

    #? Tipo de Entorno (development|production)
    NODE_ENV="development"

    #? Puertos de Aplicación
    APP_PORT="80"
    AUTH_PORT="8080"
    ```

4. ✨ **Guarde los cambios y será todo**.

<br>

---

📌 **[Volver al README](../../README.md)**