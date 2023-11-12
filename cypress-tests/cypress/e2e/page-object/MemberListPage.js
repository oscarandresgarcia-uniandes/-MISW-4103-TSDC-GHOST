import {environment} from '../environments/environment';

//Clase para facilitar navegación de página donde se listan los Miembros
class MemberListPage {

    //Ir a página de listado de miembros
    visit() {
        cy.visit(environment.baseUrl + 'members');
    }

}
export default MemberListPage;