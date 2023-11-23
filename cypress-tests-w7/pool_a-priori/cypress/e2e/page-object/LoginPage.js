import {environment} from '../environments/environment';

class LoginPage {
    
    visit() {
       cy.visit(environment.baseUrl + 'signin');
       cy.ghostscreenshot('visit login page');
    }

    //Método para crear un nuevo usuario en la aplicación
    signup() {
        cy.get('form').within(() => {
            cy.get('input[name="blog-title"]').type('Sitio Pruebas')
            cy.get('input[name="name"]').type('Usuario Pruebas')
            cy.get('input[name="email"]').type(environment.username)
            cy.get('input[name="password"]').type(environment.password)
            cy.get('button[id="ember4"]').click()
        })
        cy.wait(1000)
    }

    //Método para hacer login con un usuario existente
    login() {
        cy.get('input[name="identification"]').type(environment.username);
        cy.get('input[name="password"]').type(environment.password);
        cy.get('button[type="submit"]').click();
    }
}

export default LoginPage;