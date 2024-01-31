# **Configuración de Webpack**

Webpack nos ayudará en la generación del paquete final, con el código optimizado de nuestra REST API. 

A continuación, se describirán los pasos de su configuración.

## **Instalaciones**

Para trabajar con **Webpack** se deberá instalar lo siguiente:

- ✨ **Core de Webpack**:

    ```powershell
    npm install webpack --save-dev
    ```

- ✨ **Comandos Webpack para Línea de Comandos**:

    ```powershell
    npm install webpack-cli --save-dev
    ```

A continuación, se colocará la línea de instalación de los elementos antes mencionados:

```powershell
npm install webpack webpack-cli --save-dev
```

## **Configuraciones**

En la raíz del proyecto, se debe crear un archivo `webpack.config.js`, donde se colocará el siguiente contenido:

```js
//* Importaciones locales
const { runWebpack } = require('./webpack/runWebpack');

/**
 * Función que precarga la configuración inicial de Webpack
 * @param {object} env Define el tipo de entorno en el que se ejecuta Webpack
 * @param {object} arg Define varaibles de entorno globales de Webpack
 * @returns {object} Retorna funcionalidades de Webpack
 */
const BuildConfig = ( env, arg ) => {

    if ( arg.mode === 'development' || arg.mode === 'production' ) {

        console.log(`✔ Ejecutando Webpack en modo "${ arg.mode }"...`);
        return runWebpack();

    } else {

        console.log(`El modo "${ arg.mode }" no es valido en la configuracion de Webpack.\n`);
        console.log('Tal vez quisiste colocar "development" or "production" ?\n');

    }

}

module.exports = BuildConfig;
```

Esta configuración, verifíca que el modo para ejecutar Webpack sea el correcto y de ser así, entonces carga el objeto de configuración especifícado en `runWebpack()`.

Posteriormente, para que la configuración de Webpack sea más escalable, en la raíz del proyecto creamos un directorio llamado **webpack** y dentro, colocaremos configuraciones modularizadas de Webpack, por si el día de mañana se requieran colocar nuevas configuraciones, puedan hacerse sin comprometer la estructura del proyecto.

Dentro del directorio **webpack** colocamos un archivo al que llamaremos `run.webpack.js` y colocamos la siguiente configuración:

```js
//* Importaciones globales
const { join } = require('path');

//* Importaciones locales
const { nodeWebpackConfig, output, rules } = require('./props');

/**
 * Función que ejecuta e inicializa funcionalidades de Webpack
 * @returns {object} Retorna el objeto de configuración de Webpack
 */
const runWebpack = () => {

    console.log('✔ Running loaders and Webpack plugins...\n');

    return {
        mode: 'production',
        entry: join( __dirname, '../' ),
        output,
        ...nodeWebpackConfig,
        module: rules,
        watch: false,
    }

}

module.exports = { runWebpack };
```

A continuación se hará mención de unas configuraciones extras que van de la mano con Webpack.

## **Configuraciones Adicionales en Webpack**

Pueden existir otros elementos externos a Webpack que quizás sea necesario contemplar a la hora de hacer el build final de la aplicación. A continuación, se índicarán cuales serían algunos de ellos:

### **Funcionalidades de Node en Webpack**

Cuando Webpack es invocado, naturalmente trata de comunicarse con el punto de entrada especificado en la configuración inicial para saber que es lo que debe de inspeccionar para generar el bundle final. Sin embargo, como la REST API es trabajada en un ambiente de Node puro, Webpack, no puede interpretar las funcionalidades nativas de Node para el bulding.

Es por eso, que tenemos que instalar la siguiente paquetería:

```powershell
npm install webpack-node-externals --save-dev
```

La paquetería **webpack-node-externals**, excluye de Webpack las funcionalidades nativas de Node al momento de generar el building. De esta manera, Webpack no las considera y continua con su proceso habitual. Posteriormente, en el directorio de `props`, debemos crear un archivo llamado `node.prop.js` y colocamos la siguiente configuración, para que este mismo lo pueda interpretar:

```js
    const nodeExternals = require('webpack-node-externals');

    /**
    * Configuración de Node en Webpack
    * @constant {object}
    */
    const nodeWebpackConfig = {
        target: 'node',
        externalsPresets: { node: true },
        externals: nodeExternals(),
    }

    module.exports = { nodeWebpackConfig };
```

### **Configuración de Babel en Webpack**

Como estamos utilizando Babel para la transpilación de código moderno de Javascript, Webpack también tiene que entender la configuración que este implementa, de manera que el código que Babel transpila, se va al bundle final.

Para esto, debemos instalar lo siguiente:

```powershell
npm install babel-loader --save-dev
```

Después, en el directorio `props`, creamos un archivo llamado `rules.prop.js` y le añadimos la siguiente configuración:

```js
/**
 * Configuración de reglas o loaders a precargr durante la creación del bundle
 * @constant {object}
 */
const rules = {
    rules: [
        {
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]
}

module.exports = { rules };
```

### **Configuración de Salida de Bundle**

En Webpack, también podemos definir como es que la información del bundle final será generado. Para eso, en el directorio de `props`, creamos un archivo llamado `output.prop.js` y añadimos la siguiente configuración:

```js
const { join } = require('path');

/**
 * Configuración de la salida del bundle
 * @constant {object}
 */
const output = {
    clean: true,
    filename: 'index.production.min.js',
    path: join( __dirname, '../../dist' )
}

module.exports = { output };
```

## **Configuración de Scripts de Ejecución**

Una vez tengamos la configuración de Webpack, es momento de probar y ejecutarlo. Para eso, en el archivo `package.json`, colocamos los siguientes scripts:

```json
"build": "webpack --mode production",
"start": "node ./dist/index.production.min.js"
```

Explicación de los scripts de ejecución:

- ✨ **build**: Prepara y optimiza el código del REST API para producción:

    ```sh
    npm run build
    ```

- ✨ **start**: Ejecuta el bundle final generado por **build**.

    ```sh
    npm start
    ```

El script **build**, generará un directorio llamado `dist` y ahí se encontrará el archivo `index.production.min.js` que será el proyecto optimizado.

📌 **[Volver al Temario](./index.md)**