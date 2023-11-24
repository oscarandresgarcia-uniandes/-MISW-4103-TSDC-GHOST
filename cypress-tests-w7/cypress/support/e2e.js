// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import LoginPage from '../e2e/page-object/LoginPage';
import { environment } from '../e2e/environments/environment';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

beforeEach(() => {

    const loginPage = new LoginPage();
    const dataVariable = 'dataPool';

    //Revisa si los specs son de la carpeta aprioryfolder o dynamicfolder y hace el request necesario
    if(Cypress.spec.relative.includes(environment.aprioryfolder)) {
        //Importar el data pool para todos los specs
        cy.fixture('data-pool.json').as(dataVariable);
    } else if(Cypress.spec.relative.includes(environment.dynamicfolder)) {
        //Importar el data pool dynámico para los specs
        cy.log('-----------------------------------------------------------------');
        cy.log('-----------------------------------------------------------------');
        cy.log('-----------------------------------------------------------------');
        cy.log('llamando datos dinámicos desde Mockaroo: ' + environment.apiURL);
        cy.log('-----------------------------------------------------------------');
        cy.log('-----------------------------------------------------------------');
        cy.log('-----------------------------------------------------------------');

        cy.request(environment.apiURL)
		.then((response) => {
            //cy.log(JSON.stringify(response.body));
            cy.wrap(response.body).as('dataPool');
		});
    }
    
    loginPage.visit();
    loginPage.login();
});
  