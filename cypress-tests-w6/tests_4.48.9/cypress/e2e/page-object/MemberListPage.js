import {environment} from '../environments/environment';

//Clase para facilitar navegación de página donde se listan los Miembros
class MemberListPage {

    //Ir a página de listado de miembros
    visit() {
        cy.visit(environment.baseUrl + 'members');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
        cy.ghostscreenshot('visit member list page')
    }

    //Ver si un miembro existe con base en su nombre y correo
    checkMemberDoesntExist(memName,memEmail){
        cy.contains('.gh-members-list-name', memName).should('not.exist') 
        cy.contains('.gh-members-list-email', memEmail).should('not.exist') 
    }

    checkMemberExists(memName,memEmail){
        cy.contains('.gh-members-list-name', memName) 
        cy.contains('.gh-members-list-email', memEmail) 
    }

}
export default MemberListPage;