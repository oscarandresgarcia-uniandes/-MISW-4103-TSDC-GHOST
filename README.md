# MISW-4103-TSDC-GHOST

## Integrantes del grupo

* Oscar Andrés García (oa.garcia2@uniandes.edu.co)
* Samuel Lopez (sr.lopezb@uniandes.edu.co)
* Bryand Salamanca (b.salamanca@uniandes.edu.co)
* Paula Bohorquez (p.bohorqueza@uniandes.edu.co)

## Semana 6

## Listado de issues encontrados con las regresiones visuales y comparación VRT
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/issues?q=is%3Aopen+is%3Aissue+label%3AW6

## Listado de pros y cons de las herramientas ResembleJS y BackstopJS
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/wiki/Pros-y-Cons-de-ResembleJS-y-BackstopJS

## Instrucciones para correr las pruebas de regresión visual en Cypress:
* Instale la versión de Ghost 5.73.2 en su entorno local:
* ```npm install ghost-cli@latest -g```
* ```ghost install 5.73.2 local```
* Instale la versión de Ghost 4.48.9 en su entorno local:
* Instale docker descargando la app aquí: https://www.docker.com/get-started/
* ```docker run -d -e url=http://localhost:8095 -p 8095:2368 --name ghost_4.48.9 ghost:4.48.9```
* Tenga en cuenta los puertos donde corren ambas versiones y visite el sitio para cada versión de Ghost para crear el usuario administrador:
* Para cada versión de Ghost, en su navegador vaya a http://localhost:<puerto>/ghost/ y siga las instrucciones para crear el usuario administrador (cambie el puerto de acuerdo a la instalación de cada versión)
* Instale la versión de node v18.18.1
* Clone este repositorio
* Ghost 4.48.9: Ubíquese en el directorio cypress-tests-w6/tests_4.48.9
* Ejecute el comando ```npm install```
* Abra el archivo ubicado en ```cypress/e2e/environments/environment.js``` y cambie el puerto si es necesario de acuerdo a su instalación de Ghost 4.48.9
* En el mismo archivo ```environments/environment.js``` ponga el usuario y password de acuerdo a las credenciales escogidas para la creación del usuario administrador Ghost 4.48.9
* Para correr las pruebas y generar los screenshots de Ghost 4.48.9 ejecute ```npx cypress run```
* Ghost 5.73.2: Ubíquese en el directorio cypress-tests-w6/tests_5.73.2
* Ejecute el comando ```npm install```
* Abra el archivo ubicado en ```cypress/e2e/environments/environment.js``` y cambie el puerto si es necesario de acuerdo a su instalación de Ghost 5.73.2
* En el mismo archivo ```environments/environment.js``` ponga el usuario y password de acuerdo a las credenciales escogidas para la creación del usuario administrador Ghost 5.73.2
* Para correr las pruebas y generar los screenshots de Ghost 5.73.2 ejecute ```npx cypress run```

## Instrucciones para ver el reporte VRT de ResembleJS e imágenes generadas con cypress:
* Ubíquese en el directorio cypress-tests-w6 y desde allí abra el archivo results/\<datetime\>/reporte.html

## Instrucciones para generar un nuevo reporte VRT con ResembleJS e imágenes generadas con cypress:
* Ubíquese en el directorio cypress-tests-w6
* Con la versión de node v18.18.1 ejecute ```npm install```
* El script que genera el reporte está en esta misma carpeta cypress-tests-w6 y se llama index.js
* para generar un nuevo reporte ejecute el comando ```node .```
* Tenga en cuenta que se generarrá un reporte con todos los escenarios incluidos en los tests. Si desea generar un reporte con escenarios específicos, debe remover los specs que no desea incluir.
* Puede configurar las opciones de resemble modificando los valores del archivo config.json

## Semana 5
## Instrucciones para correr pruebas en Cypress:
* Instale la versión mas reciente de Ghost en su entorno local. ver https://ghost.org/docs/install/local/
* En su navegador vaya a http://localhost:2368/ghost/ y siga las instrucciones para crear el usuario administrador (cambie el puerto si es necesario de acuerdo a su instalación)
* Instale una versión reciente de node (se recomienda v18.18.1)
* Clone este repositorio
* Ubíquese en el directorio cypress-tests
* Ejecute el comando ```npm install```
* Abra el archivo ubicado en ```environments/environment.js``` y cambie el puerto si es necesario de acuerdo a su instalación de Ghost
* En el mismo archivo ```environments/environment.js``` ponga el usuario y password de acuerdo a las credenciales escogidas para la creación del usuario administrador
* Para correr las pruebas ejecute ```npx cypress run```
* Opcional: Para correr las pruebas desde la GUI de Cypress ejecute ```npx cypress open```
  * seleccione E2E Testing
  * seleccione El navegador deseado 
  * Haga click en el botón Start E2E Testing
  * Seleccione el spec que desea correr

## Instrucciones para correr pruebas en Kraken:
* Instale la versión mas reciente de Ghost en su entorno local. ver https://ghost.org/docs/install/local/
* En su navegador vaya a http://localhost:2368/ghost/ y siga las instrucciones para crear el usuario administrador (cambie el puerto si es necesario de acuerdo a su instalación)
* instale la kraken https://misovirtual.virtual.uniandes.edu.co/codelabs/kraken-testing-tool/index.html?index=..%2F..index#0
* En un computador con el sistema operativo windows 10
* Instale una versión de node (se recomienda v16.14.2)
* Clone este repositorio
* Ubíquese en el directorio donde se encuentra la carpeta kraken de este repositorio
* Modifique el archivo ```properties.json```
* en el formato de este archivo coloque sus credenciales de ingreso a ghost
* Ingrese a la ruta donde ```/features/pruebas``` y copie el archivo de pruebas que quiere ejecutar y peguelo en la ruta ```/features```
* Recuerde que las pruebas deben ejecutarse en orden : Ejemplo (Prueba_1,Prueba_2...Prueba_n..Prueba_n+1)
* Ejecute el comando ```npx kraken-node run```
* Se ejecuta la prueba deseada. 

