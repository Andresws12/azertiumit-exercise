# Proyecto Azertiumit

## Documentación
```
Proyecto creado con vue cli, con las siguientes caracteristicas: 
    -([Vue 2] node-sass, babel, typescript, pwa, router, vuex, eslint, unit-jest, e2e-cypress).

Acontinuación procedí a configurar prettier y añadir el comando para formatear el codigo y configurar la estructura del proyecto, borrando jest para configurarlo más tarde ya que falla con cypress y jest en typescript,

En la estructura del proyecto he creado las siguientes carpetas:
    -assets: Para el tema de fuentes, imagenes, videos, etc...
    -components: Aquí irán los distintos componentes del proyecto
    -localization: Zona para configurar y añadir todas las configuraciones
    -models: En esta carpeta estarán todos los modelos comunes
    -router: Configuración del enrutado de vue-router
    -store: Esta carpeta tiene las distintas estores que se necesiten
    -styles: Configuración de todos los estilos comunes dividida por las distintas opciones en carpetas
        -animations
        -modules
        -transitions
        -variables
    -views: Aquí estarán las distintas vistas del proyecto que contendrán los distintos proyectos
    -webserbice: En esta carpeta irán las distintas peticiones a la api, para ser llamadas despues en la store

Acontinuación se instalaron las distintas dependiencias que necesitaré, a destacar:
    -vuex-smart-module: Con esta dependencia podré tipar toda la store mucho mejor que con vuex
    -style-resources-loader: Para configurar sass
    -cypress-image-snapshot: Para hacer capturas de pantalla en los test e2e y testear estas pantallas
    -vue-i18n: Para añadir traducciones
    -vue-mq: Para más adelante usar distintas vistas según el tamaño
    -bulma y buefy: librerías de css para añadir los distintos estilos

Una vez instalados las distintas dependencias, procedí a la configuración del proyecto en el main.ts y las distintas configuraciones de jest, cypress y typescript para que funcione correctamente

Despues de terminar las distintas configuraciones y añadir fuentes de google fonts y fontawesome, procedí a configurar la configuración de estilos en la carpeta styles y configurar la store  dividida en las distintas partes, Actions, Getters, Mutations, State y la store, para  guardar aquí la tabla

Una vez configurado todo, ya comence a crear el webservice para pedír los datos de la API, acontinuación añadiría los distintos state, mutations y actions para almacenar estos datos.

Con los datos en la store, añadí la tabla en la vista home, con los datos a usar y con eso ya añadí el componente searchbar para la busqueda y el botón translations para las traducciones

Una vez listo, procedí a crear los unit test en jest, para ver que funciona correctamente el cambio de idioma y los e2e test para la paginación

```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

