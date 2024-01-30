# **Configuración de Babel**

Babel es una herramienta de transpilación de código fuente en JavaScript. Su principal objetivo es permitir a los desarrolladores escribir código utilizando las características más recientes del lenguaje (como las que se encuentran en ECMAScript 6 y versiones posteriores) y luego transformar ese código en una versión que sea compatible con navegadores y entornos que aún no admiten esas características.

## **Instalación de Babel**

Para trabajar con **Babel** se deberá instalar lo siguiente:

- ✨ **Core de Babel**:

    ```powershell
    npm install @babel/core --save-dev
    ```

- ✨ **Utilería de Babel para Node**:

    ```powershell
    npm install @babel/node --save-dev
    ```

- ✨ **Funcionalidades Extra de Babel**:

    ```powershell
    npm install @babel/preset-env --save-dev
    ```

A continuación, se colocará la línea de instalación de los elementos antes mencionados:

```powershell
npm install @babel/core @babel/node @babel/preset-env --save-dev
```

## **Configuración**

Para que el proyecto comience a interpretar sintaxis con Babel, debemos crear, en la raíz del proyecto, un archivo llamado `.babelrc` y colocar la siguiente estructura:

```json
{
    "presets": ["@babel/preset-env"]
}
```

Posteriormente, en el archivo `package.json`, en el script **dev**, deberemos interpretar babel para su ejecución. Sin embargo, el servidor de desarrollo que se utiliza en este proyecto, es **[Nodemon](https://nodemon.io/)**.

Para que Nodemon, pueda comprender las configuraciones de Babel, en la raíz del proyecto, se debe crear un archivo `nodemon.json` y colocar la siguiente estructura:

```json
{
    "execMap": {
        "js": "node --require @babel/register"
    },
    "ext": "js,json"
}
```

Para finalizar, como se ha mencionado antes, hay que preparar en el script de ejecución para la interpretación de babel:

```json
"scripts": {
    "dev": "nodemon --config ./nodemon.json ./index.js"
},
```

📌 **[Volver al Temario](./index.md)**