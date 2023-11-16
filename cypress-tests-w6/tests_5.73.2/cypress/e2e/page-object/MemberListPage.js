import {environment} from '../environments/environment';

//Clase para facilitar navegación de página donde se listan los Miembros
class MemberListPage {

    //Ir a página de listado de miembros
    visit() {
        cy.visit(environment.baseUrl + 'members');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
    }

}
export default MemberListPage;