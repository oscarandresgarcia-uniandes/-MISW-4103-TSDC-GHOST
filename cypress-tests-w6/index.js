const fs = require('fs');
const path = require('path');

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

// Escribe el HTML con el reporte
function renderGhostReport(imagesA, imagesB, folderPathA, folderPathB) {
  const datetime = new Date().toISOString().replace(/:/g,".");
  const htmlOutput = fs.createWriteStream(`reporte-${datetime}.html`);
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
  imagesA.forEach(imagePathA => {
    const relativePathA = path.relative(folderPathA, imagePathA);
    const correspondingImageB = path.join(folderPathB, relativePathA);
    const regex = /\/cypress\/screenshots\/(.+\.spec\.cy\.js\/.+)\.png/;
    const match = imagePathA.match(regex);
    const imageRoute = match[1];

    if (imagesB.includes(correspondingImageB)) {
      htmlOutput.write(`
        <tr>
          <td colspan="2" style="text"><strong>${imageRoute}</strong></td>
        </tr>
        <tr>
          <td>
            <img width="75%" src="${imagePathA}">
          </td>
          <td>
            <img width="75%" src="${correspondingImageB}">
          </td>
        </tr>`);
    }
  });

  htmlOutput.write('</table></body></html>');
  htmlOutput.end();
}

//Inicializa el reporte
createReport('tests_4.48.9/cypress/screenshots', 'tests_5.73.2/cypress/screenshots');