import {environment} from '../environments/environment';

class LoginPage {
    
    visit() {
       cy.visit(environment.baseUrl + 'signin');
    }

    login(username, password) {
        cy.get('input[name="identification"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
    }
}

export default LoginPage;