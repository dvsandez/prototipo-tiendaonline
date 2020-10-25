

# Presentación de *Admin/Tienda*
---
***Admin/Tienda*** es un prototipo de tienda en línea escrito en **Laravel 7** y **Vue 3** que echa mano de la plantilla AdminLte 3.
A partir de este prototipo, que consta básicamente de un crud que conecta un backend en PHP y Laravel con un fronted escrito en Vue, puedes desarrollar tu propia administración de una tienda en línea de forma totalmente sencilla.  

* Descarga.
* Instatalación en simples pasos. 


___
## Descarga

1. Imagino que ya tienes instalado en tu equipo alguna opción que te permita ejecutar una aplicación de servidor en PHP y Laravel, como por ejemplo paquete Laragon.
En ese caso, dirigite a la carpeta que aloja tus proyectos dentro del directorio de dicho paquete (la carpeta llamada "www" en el caso de Laragon, por ejemplo).

2. Dentro de esa carpeta, ejecutá el siguiente comando en tu consola:

```
git clone https://github.com/davidsandez/prototipo-tiendaonline.git
```
## Instalación en simples pasos

Muy bien, ya tienes los archivos necesarios en tu equipo y ahora corresponde ponerlos a funcionar.

1. Laravel 7 necesita que ejecutes el comando siguiente para asignarle una clave a tu aplicación:

```
php artisan key:generete
```

2. Como puedes ver, tienes una estructura de archivos y directorios compatible con la de una aplicación Laravel típica, a excepción de algunas carpetas, principalmente *vendor*, en la que se encuentran las dependencias de nuestro proyecto. Esta falta se debe a que dicha carpeta se incluyó en el *.gitignore*.
La solución no podría ser más sencilla. Insertar el siguiente comando generará una carpeta *vendor* con las dependecias especificadas en nuestro *composer.json*:

```
composer install
```
---
NOTA: para que el comando anterior funcione debes tener instalado ***composer*** en tu equipo.
---
---
3. Del mismo modo que acabamos de crear la carpeta *vendor*, ahora haremos con *node_modules*, que alojará nuestras dependencias de javascript.
Para ello, ejecutamos este comando:
```
npm install
```
---
NOTA: para que el comando anterior funcione debes tener instalado ***nodejs*** en tu equipo.
-
---
4. Como utilizamos Vue, ahora debemos compilar nuestro código javascript en la carpeta *public*.
Eso lo hacemos con este otro comando:
```
npm run dev
```
Alternativamente, y quizás más aconsejable si quieres ponerte manos a la obra, puedes emplear este otro comando:
 ```
 npm run watch
 ```
Cualquiera de estos comandos generará una compilación *de desarrollo*, lo cual es aconsejable para que continúes escribiendo tu propio código. Pero cuando estés listo para dar el salto a producción, puedes usar este otro comando:
 ```
 npm run prod
 ```
5. Es hora de hablar de variables de entorno y bases de datos.
* Buscá el archivo *.env* (que contiene las variables de entorno): pero no lo encontrarás.
* Creá vos mismo ese archivo llamado *.env* y agregale el contenido de *.env.example* (no resultó algo tan difícil, ¿verdad?).
* Buscá en tu nuevo archivo *.env* el apartado de base de datos y hacé coincidir las constantes de configuración como **DB_DATABASE**, **DB_USERNAME** y **DB_PASSWORD** con las credenciales de la base de datos que crearás a continuación.
* Finalmente deberás crear tu base de datos.

6. Volvamos como último paso a nuestra consola artisan y ejecutemos nuestras *migrations*:

```
php artisan migrate
```

Esto llenará nuestra base de datos recién creada con las tablas necesarias para comenzar a trabajar.

7. Un último paso será enlazar nuestro *storage* (que es el lugar donde se almacenan las imágenes y otros archivos de nuestra aplicación) con la carpeta *public*

Ahora sí estamos listos para continuar el trabajo. Espero te haya sido de utilidad. Suerte  :+1:.

