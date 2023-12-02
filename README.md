# MISW-4103-TSDC-GHOST

## Integrantes del grupo

* Oscar Andrés García (oa.garcia2@uniandes.edu.co)
* Samuel Lopez (sr.lopezb@uniandes.edu.co)
* Bryand Salamanca (b.salamanca@uniandes.edu.co)
* Paula Bohorquez (p.bohorqueza@uniandes.edu.co)

## Semana 8

Estrategia de pruebas:
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/wiki/Estrategia-de-Pruebas-%E2%80%90-S8

Video explicativo semana de pruebas:

Inventario de pruebas exploratorias:
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/wiki/Inventario-de-pruebas 

Issues reportados:
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/issues 

Código fuente:
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST?search=1

Las instrucciones para ejecución de las pruebas con ambas herramientas de acuerdo a la estrategia propuesta se pueden encontrar justo abajo en este documento

Retrospectiva semana 8:
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/wiki/Retrospectiva-%E2%80%90-S8 




## Semana 7

## Listado de issues encontrados con las estrategias de generación de datos
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/issues?q=is%3Aopen+is%3Aissue+label%3AW7

## Listado de los escenarios y estrategias para la generación de generación de datos
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/wiki/Listado-de-escenarios-y-estrategias-de-generaci%C3%B3n-de-datos

## Instrucciones para correr las pruebas con estrategia de generación de datos en Cypress:
* Instale la versión de Ghost 5.73.2 en su entorno local:
* ```npm install ghost-cli@latest -g```
* ```ghost install 5.73.2 local```
* Tenga en cuenta el puerto donde corre la versión de Ghost y visite el sitio de Ghost local creado para crear el usuario administrador:
* En su navegador vaya a http://localhost:<puerto>/ghost/ y siga las instrucciones para crear el usuario administrador (cambie el puerto de acuerdo a la instalación de ser necesario)
* Instale la versión de node v18.18.1
* Clone este repositorio
* Ubíquese en el directorio cypress-tests-w7/
* Ejecute el comando ```npm install```
* Abra el archivo ubicado en ```cypress/e2e/environments/environment.js``` y cambie el puerto si es necesario de acuerdo a su instalación de Ghost
* En el mismo archivo ```environments/environment.js``` ponga el usuario y password de acuerdo a las credenciales escogidas para la creación del usuario administrador Ghost
* Generar screenshots es opcional. Si desea hacerlo cambie el parámentro de este archivo a true o false segun desee.
* en el archivo support/commands.js encuentra la lógica asociada a activar/desactivar los screenshots segín el parametro. No es necesario modificarlo
* en el archivo support/e2e.js encuentra la lógica que determina si se usa el API dinámico de Mockaroo o los datos apriori en el archivo json en la carpeta fixtures. No es necesario modificarlo
* Para correr las pruebas segun cada estrategia:
* ```npx cypress run --spec "cypress/e2e/escenario_aleatorio"```
* ```npx cypress run --spec "cypress/e2e/pool_a-priory"```
* ```npx cypress run --spec "cypress/e2e/pool-pseudo-aleatorio-dinamico"```
* Para correr todas las pruebas: ```npx cypress run```

* ## Instrucciones para correr pruebas en Kraken-w7:
* Instale la versión mas reciente de Ghost en su entorno local. ver https://ghost.org/docs/install/local/
* En su navegador vaya a http://localhost:2368/ghost/ y siga las instrucciones para crear el usuario administrador (cambie el puerto si es necesario de acuerdo a su instalación)
* instale la kraken https://misovirtual.virtual.uniandes.edu.co/codelabs/kraken-testing-tool/index.html?index=..%2F..index#0
* En un computador con el sistema operativo windows 10.
* Instale una versión de node (se recomienda v16.14.2)
* Clone este repositorio
* Ubíquese en el directorio donde se encuentra la carpeta kraken-W7 de este repositorio
* Modifique el archivo ```properties.json```
* en el formato de este archivo coloque sus credenciales de ingreso a ghost
* Ingrese a la ruta donde ```kraken-w7features/features``` aca encontrara las pruebas
* Copie el archivo de pruebas que quiere ejecutar y peguelo en la ruta ```/features```
* Recuerde que las pruebas deben ejecutarse una a una 
* Ejecute el comando ```npx kraken-node run```
* En el nombre de cada prueba se encuentra la estrategia utilizada.
* Se ejecuta la prueba deseada y los screenshots seran generados automaticamente en la carpeta ```/screenshots```

## Semana 6

## Listado de issues encontrados con las regresiones visuales y comparación VRT
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/issues?q=is%3Aopen+is%3Aissue+label%3AW6

## Listado de pros y cons de las herramientas ResembleJS y BackstopJS
https://github.com/oscarandresgarcia-uniandes/MISW-4103-TSDC-GHOST/wiki/Pros-y-Cons-de-ResembleJS-y-BackstopJS

## Video explicando la estrategia de regresión visual y VRT
https://www.youtube.com/watch?v=B0UYhpK1QTY

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

* ## Instrucciones para correr las pruebas de regresión visual en Backstop:
* Instale la versión de Ghost 5.73.2 en su entorno local:
* ```npm install ghost-cli@latest -g```
* ```ghost install 5.73.2 local```
* Instale la versión de Ghost 4.48.9 en su entorno local:
* ```npm install ghost-cli@latest -g```
* ```ghost install 4.48.9 local```
* instale backstop con el comando:
* ```npm install -g backstopjs```
* Eirigase al directorio MISW-4103-TSDC-GHOST/backstop_data
* Ejecute los test con el comando
* ```backstop test```
* despues se abrira automaticamente una ventana de navegador con los screenshots de las dos versiones y la diferencia

## Instrucciones para correr pruebas en Kraken-w6:
* Instale la versión mas reciente de Ghost en su entorno local. ver https://ghost.org/docs/install/local/
* En su navegador vaya a http://localhost:2368/ghost/ y siga las instrucciones para crear el usuario administrador (cambie el puerto si es necesario de acuerdo a su instalación)
* instale la kraken https://misovirtual.virtual.uniandes.edu.co/codelabs/kraken-testing-tool/index.html?index=..%2F..index#0
* En un computador con el sistema operativo windows 10.
* Instale una versión de node (se recomienda v16.14.2)
* Clone este repositorio
* Ubíquese en el directorio donde se encuentra la carpeta kraken de este repositorio
* Modifique el archivo ```properties.json```
* en el formato de este archivo coloque sus credenciales de ingreso a ghost
* Ingrese a la ruta donde ```kraken-w6/features/pruebas``` aca encontrara las dos versiones de ghost en sus respectivas carpetas
* Copie el archivo de pruebas que quiere ejecutar y peguelo en la ruta ```/features```
* Ingrese a la ruta donde ```kraken-w6/features/web/step_definitios``` aca encontrara los steps de las dos versiones de ghost en sus respectivas carpetas
* Copie el archivo step.js que quiere ejecutar y peguelo en la ruta ```/features/web/step_definition```
* Recuerde que no puede correr los features con un steps distinto al de la version que quiere probar
* Recuerde que las pruebas deben ejecutarse en orden : Ejemplo (Prueba_1,Prueba_2...Prueba_n..Prueba_n+1)
* Ejecute el comando ```npx kraken-node run```
* Se ejecuta la prueba deseada y los screenshots seran generados automaticamente en la carpeta ```/screenshots```


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

