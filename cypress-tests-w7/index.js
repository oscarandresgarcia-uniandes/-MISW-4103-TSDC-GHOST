const fs = require('fs');
const path = require('path');
const compareImages = require('resemblejs/compareImages');
const config = require('./config.json');
const { options } = config;

// Escribe el HTML con el reporte
async function renderGhostReport(imagesA, imagesB, folderPathA, folderPathB) {

  const datetime = new Date().toISOString().replace(/:/g,".");

  if (!fs.existsSync(`./results/${datetime}`)){
    fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    fs.mkdirSync(`./results/${datetime}/images/`, { recursive: true });
  }

  fs.copyFileSync('./styles.css', `./results/${datetime}/styles.css`);

  const htmlOutput = fs.createWriteStream(`./results/${datetime}/reporte.html`);

  htmlOutput.write(
    `<html>
    <head>
      <link href="styles.css" type="text/css" rel="stylesheet">
    </head>
    <body>
      <table>
        <tr><th>Ghost 4.48.9</th><th>Ghost 5.73.2</th></tr>
        `
    );

  // Busca imagenes con el mismo nombre
  for (const imagePathA of imagesA) {
    const relativePathA = path.relative(folderPathA, imagePathA);
    const correspondingImageB = path.join(folderPathB, relativePathA);
    const regex = /\/cypress\/screenshots\/(.+\.spec\.cy\.js\/.+)\.png/;
    const match = imagePathA.match(regex);
    const imageRoute = match[1];
    const compareImageName = generateImageCompareName();

    if (imagesB.includes(correspondingImageB)) {


      //Comparar con resemble
      const data = await compareImages(
        fs.readFileSync(imagePathA),
        fs.readFileSync(correspondingImageB),
        options
    );

    const compareInfo = {
      isSameDimensions: data.isSameDimensions,
      dimensionDifference: data.dimensionDifference,
      rawMisMatchPercentage: data.rawMisMatchPercentage,
      misMatchPercentage: data.misMatchPercentage,
      diffBounds: data.diffBounds,
      analysisTime: data.analysisTime
    }

    fs.writeFileSync(`./results/${datetime}/images/${compareImageName}`, data.getBuffer());

    htmlOutput.write(`
      <tr>
        <td colspan="2">
          <strong>${imageRoute}</strong>
          <p>Data: ${JSON.stringify(compareInfo)}</p>
        </td>
      </tr>
      <tr>
        <td>
          <img width="75%" src="../../${imagePathA}">
        </td>
        <td>
          <img width="75%" src="../../${correspondingImageB}">
        </td>
      </tr>
      <tr>
        <td colspan="2"> <img width="75%" src="images/${compareImageName}"></td>
      </tr>
    `);
    }
  }

  htmlOutput.write('</table></body></html>');
  htmlOutput.end();
}

//Inicializa el reporte
function createReport(folderPathA, folderPathB) {
  
  const imagesA = readFiles(folderPathA);
  const imagesB = readFiles(folderPathB);

  renderGhostReport(imagesA, imagesB, folderPathA, folderPathB);
}

// Lee todas las imágenes en los directorios y subdirectorios dados
function readFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  return files.reduce((fileList, file) => {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      return [...fileList, ...readFiles(fullPath)];
    } else if (file.name.toLowerCase().endsWith('.png')) {
      return [...fileList, fullPath];
    } else {
      return fileList;
    }
  }, []);
}

function generateImageCompareName() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);

  return `${timestamp}-${randomString}.png`;
}

//Inicializa el reporte
createReport('tests_4.48.9/cypress/screenshots', 'tests_5.73.2/cypress/screenshots');