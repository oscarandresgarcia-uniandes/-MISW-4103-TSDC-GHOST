const { After, Before, BeforeStep } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const fs = require('fs');
const path = require('path'); // Importar el módulo 'path' para trabajar con rutas

let stepCount = 0;

Before(async function() {
  stepCount = 0;
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
});

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

BeforeStep(async function(scenario) {
  console.log(this);
  let feature = path.basename(scenario.pickle.uri, path.extname(scenario.pickle.uri)); // Obtener el nombre del archivo sin la extensión

  const screenshotsDir = path.join('screenshots', feature); // Ruta del directorio de screenshots

  if (!fs.existsSync(screenshotsDir)) {// Crear directorio 
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  stepCount += 1;
  await this.driver.saveScreenshot(path.join(screenshotsDir, `${stepCount}.png`));// Toma de captura de pantalla añadiendo en la carpeta de la prueba con el paso .png 
});
