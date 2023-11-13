# MISW-4103-TSDC-GHOST

## Integrantes del grupo

* Oscar Andrés García (oa.garcia2@uniandes.edu.co)
* Samuel Lopez (sr.lopezb@uniandes.edu.co)
* Bryand Salamanca (b.salamanca@uniandes.edu.co)
* Paula Bohorquez (p.bohorqueza@uniandes.edu.co)


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

