# Clean architecture

Aquí podemos ver un ejemplo de la arquitectura limpia en un un sistema de archivos

### index.js

Se encarga de iniciar nuestra aplicación (el servidor)

### src/server.js

Se encarga de albergar la descripción de nuestro servidor

### src/models

Se encarga de albergar los modelos de base de datos (mongoDB)

### src/usescases

Cada archivo tendrá los casos de uso de cada uno de las entidades / recursos que va a ocupar nuestra aplicación

### src/routes

Un archivo por cada router (express) que tenga nuestra API

### src/middlewares

Las funciones middleware de nuestra API

### src/lib

Funciones utilitarias que no pertenecen a ninguna otra categoría
por ejemplo

- el archivo de conexión a la base de datos
- la configuración de nuestros tokens
- la configuración de nuestra librería de encriptado

### scripts

iniciar en producción

```bash
npm start
```

iniciar modo de desarrollo

```bash
npm run dev
```
