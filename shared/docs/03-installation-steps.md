# **Pasos de Instalación**

A continuación, siga lo siguientes pasos de instalación y configuración:

> **NOTA**: Para este paso, es importante que ya se hayan realziado: las verificaciones precias, la configuración de la base de datos y la configuración de variables de entorno. 

1. ✨ **Abrir una ventana terminal**.

2. ✨ **Clone el repositorio de `customers-rest-api`**:

    ```sh
    git clone <link>
    ```

3. ✨ **Nos situamos en la raíz del proyecto**:

    ```sh
    cd "<name_folder>"
    ```

4. ✨ **Instalamos los módulos de Node JS**:

    ```sh
    npm install
    ```

5. ✨ **Abrir el proyecto en un editor de código**:

    > NOTA: Se recomienda que se utilice **[Visual Studio Code](https://code.visualstudio.com/download)**. 
    >
    > De tenerlo, use el comando **`code .`** para abrir el proyecto con VS Code.

6. ✨ **Ejecute el la aplicación en modo desarrollo**:

    ```sh
    npm run dev
    ```

    La consola, debería regresar una respuesta como esta:

    ```
    ✨ Customers REST API has been started...

    ⚡ [APP]: running at http://<ip-domain>:<port>
    ⚡ [APP]: running at http://<ip-domain>:<port>

    ⚡ [AUTH]: running at http://<ip-domain>:<port>
    ⚡ [AUTH]: running at http://<ip-domain>:<port>
    ```

7. ✨ **Compruebe si el montaje del servicio ha sido éxitoso**:

    Copie la siguiente dirección URL e ingresela en algún navegador web, para comprobar la comunicación con el server **App**:

    ```
    http://<ip-domain>:<port>/api/v1/
    o
    https://<ip-domain>:<port>/api/v1/
    ```

    Si la respuesta es la siguiente 👇🏻 entonces todo ha sido correcto:

    ```json
    {
        "success": true,
        "status": 200,
        "message": "Welcome to REST API Skeleton! :D",
        "server": "app"
    }
    ```

    Ahora, comprueba la comunicación del server **Auth**:

    ```
    http://<ip-domain>:<port>/api/v1/auth
    o
    https://<ip-domain>:<port>/api/v1/auth
    ```

    Si la respuesta es la siguiente 👇🏻 entonces todo ha sido correcto:

    ```json
    {
        "success": true,
        "status": 200,
        "message": "Welcome to REST API Skeleton! :D",              
        "server": "auth"
    }
    ```

<br>

---

📌 **[Volver al README](../../README.md)**