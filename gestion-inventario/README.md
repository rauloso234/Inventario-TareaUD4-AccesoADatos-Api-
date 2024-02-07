# Aplicación de Gestión de Inventario

## Descripción General
Esta aplicación está diseñada para proporcionar una solución integral para la gestión de inventarios en pequeñas y medianas empresas. Permite a los usuarios añadir, editar, visualizar y eliminar productos, así como mantener un registro de la cantidad y categoría de los productos en el inventario. La aplicación está construida con Spring Boot y Java, ofreciendo una API REST para la manipulación de datos de productos.

## Características
- **Gestión de Productos**: Permite a los usuarios crear, actualizar y eliminar productos.
- **Visualización de Productos**: Los usuarios pueden ver la lista completa de productos disponibles en el inventario.
- **Categorización de Productos**: Organización de productos por categorías para una mejor gestión.
- **Interfaz de Usuario Intuitiva**: Front-end simple y amigable para la interacción con la base de datos de productos.


##  Guía de Código

### Estructura del Proyecto
- `src/main/java/com/Raul`: Código fuente de Java para el backend.
- `src/main/resources`: Recursos y plantillas del backend.
- `frontend`: HTML, CSS y JavaScript para el frontend.

### Componentes Clave
- `ProductoController`: Controlador para manejar las solicitudes HTTP para productos.
- `ProductoService`: Servicio para la lógica de negocio relacionada con los productos.
- `ProductoRepository`: Repositorio para la abstracción de operaciones

### Referencia de la API

A continuación se presentan los endpoints de la API:

    GET /api/productos/todos:
        Descripción: Recupera todos los productos.
        Respuesta: Array de objetos de productos.

    POST /api/productos/guardar:
        Descripción: Crea un nuevo producto.
        Cuerpo de la solicitud: Objeto de producto (sin ID).
        Respuesta: Producto guardado con ID asignado.

    PUT /api/productos/modificar/{id}:
        Descripción: Actualiza un producto existente por ID.
        Cuerpo de la solicitud: Objeto de producto con modificaciones.
        Respuesta: Producto actualizado.

    DELETE /api/productos/eliminar/{id}:
        Descripción: Elimina un producto por ID.
        Respuesta: Mensaje de confirmación de eliminación.




## Arquitectura y Diseño del Software

### Diagramas de Arquitectura

- Diagrama de la base de datos con las relaciones entre tablas.

![gestion-inventario.png](..%2Fgestion-inventario.png)

### Patrones de Diseño Utilizados
- MVC (Modelo-Vista-Controlador) para la estructura del backend.

## Modelos

El modelo principal de la aplicación es Producto, que tiene los siguientes campos:

    id: Identificador único del producto.
    nombre: Nombre descriptivo del producto.
    precio: Precio unitario del producto.
    cantidad: Cantidad en stock del producto.
    categoria: Categoría asignada al producto.

## Configuración

El archivo CorsConfig.java contiene la configuración de CORS necesaria para permitir o restringir las solicitudes cruzadas en la aplicación. Por defecto, se permite el acceso desde cualquier origen para facilitar el desarrollo y las pruebas.

## Base de Datos

La aplicación utiliza una base de datos relacional para almacenar y gestionar los datos del inventario. A continuación se detalla el esquema y la estructura de la base de datos utilizada en el proyecto.

### Esquema de la Base de Datos

El esquema de la base de datos está compuesto por una tabla principal llamada `productos`, la cual almacena información sobre los productos del inventario.

#### Tabla `productos`

| Campo      | Tipo de Dato | Descripción                               | Clave |
|------------|--------------|-------------------------------------------|-------|
| `id`       | INT          | Identificador único del producto          | PK    |
| `nombre`   | VARCHAR(255) | Nombre del producto                       |       |
| `precio`   | DECIMAL      | Precio del producto                       |       |
| `cantidad` | INT          | Cantidad en inventario del producto       |       |
| `categoria`| VARCHAR(255) | Categoría a la que pertenece el producto  |       |

- **PK**: Primary Key (Clave Primaria)
- La columna `id` se autoincrementa y sirve como clave primaria de la tabla.
- Los tipos de datos pueden variar según la base de datos específica utilizada (MySQL, PostgreSQL, etc.).

### Relaciones

Actualmente, el proyecto gestiona una sola tabla sin relaciones externas. En el futuro, se podrían añadir tablas adicionales como `categorias` o `proveedores`, las cuales tendrían relaciones foráneas con la tabla `productos` para una gestión más detallada del inventario.

Si se introducen nuevas tablas, aquí se documentarán sus esquemas y las claves foráneas que establezcan las relaciones con la tabla `productos`.

### Acceso a la Base de Datos

- Para conectarse a la base de datos, la aplicación utiliza Spring Data JPA, lo que abstrae las operaciones de bajo nivel y facilita la implementación del patrón de repositorio.



## Descripción del front-end

Este proyecto es una interfaz de usuario web para una aplicación de gestión de inventario. Permite a los usuarios visualizar, añadir, editar y eliminar productos de un inventario a través de una API RESTful.

## Estructura del Proyecto

El proyecto se compone de un archivo HTML (`index.html`) que estructura la interfaz de usuario y un archivo JavaScript (`main.js`) que maneja las interacciones del usuario y las solicitudes a la API.

### `index.html`

El archivo `index.html` define la estructura de la página web y carga los recursos necesarios. Se utiliza Bootstrap para el diseño y estilos de la página. La interfaz consta de una barra de navegación, una tabla para mostrar los productos y un formulario para añadir o editar productos.

### `main.js`

El archivo `main.js` contiene la lógica para interactuar con la API del backend. Define las funciones para listar los productos, guardar un nuevo producto, eliminar un producto y editar la información de un producto existente.

## Características

- **Listar Productos**: Muestra todos los productos existentes en el inventario.
- **Añadir Producto**: Permite ingresar nuevos productos al inventario.
- **Editar Producto**: Habilita la edición de la información de productos existentes.
- **Eliminar Producto**: Permite remover productos del inventario.

## Uso

Para utilizar la aplicación, el usuario debe:

1. Abrir el archivo `index.html` en un navegador web.
2. Interactuar con la interfaz para añadir, editar o eliminar productos.
3. Las acciones realizadas en la interfaz se reflejarán en el servidor a través de la API.

## Funciones de JavaScript

- `list()`: Recupera y muestra la lista de productos.
- `save()`: Guarda un nuevo producto en el inventario.
- `deleteProducto()`: Elimina un producto existente.
- `rellenarProducto()`: Rellena el formulario con los datos de un producto para su edición.
- `editAlumno()`: Actualiza la información de un producto.
- `reset()`: Limpia los campos del formulario.

## Dependencias

- [Bootstrap](https://getbootstrap.com/): Utilizado para los estilos y componentes de la interfaz.
- [jQuery](https://jquery.com/): Utilizado para facilitar las solicitudes AJAX y la manipulación del DOM.


## Recursos Utilizados

### Conexion a la pagina web

- https://youtu.be/z2IFUqzczp4?si=xxyHyUZnlOzckwBN
- https://youtu.be/goejciblEGs?si=CVc5dJS9667QTUHW
- https://youtu.be/uWssMb4VQMg?si=98swOLsUy-5mkuqM
- https://youtu.be/HAO4-NwhlZI?si=5r_zHRwgBQhqK1ti

### Creacion de la api

- https://youtu.be/3cJeqk3RYyM?si=h47um5_h13DpN6PS

### Otros Recursos 

- ChatGPT
- StackOverFlow