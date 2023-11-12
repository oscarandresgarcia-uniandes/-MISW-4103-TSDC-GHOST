import {environment} from './environments/environment';
import LoginPage from './page-object/LoginPage';

describe('Setup inicial para registrar un nuevo usuario en la aplicación', () => {
    const loginPage = new LoginPage();
    beforeEach(()=>{
        loginPage.visit();
        cy.wait(5000)
    })
    it('Test para redirigirse a página de signin', () => {
        cy.url().should('eq', environment.baseUrl + 'setup');
        //Se registra un nuevo usuario
        loginPage.signup();
        cy.wait(5000);
        //La página redirige al signin
        loginPage.visit();
        cy.wait(5000);
        
    })
  })