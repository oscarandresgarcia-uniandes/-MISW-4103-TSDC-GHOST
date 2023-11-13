import {environment} from '../environments/environment';

//Clase para facilitar navegación de página donde se listan los Posts
class PostListPage {

    //Ir a página de listado de posts
    visit() {
        cy.visit(environment.baseUrl + 'posts');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
    }

}
export default PostListPage;
