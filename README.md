# MISW-4103-TSDC-GHOST

## Integrantes del grupo

*Oscar Andrés García (oa.garcia2@uniandes.edu.co)
*Samuel Lopez (sr.lopezb@uniandes.edu.co)
*Bryand Salamanca (b.salamanca@uniandes.edu.co)
*Paula Bohorquez (p.bohorqueza@uniandes.edu.co)


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
