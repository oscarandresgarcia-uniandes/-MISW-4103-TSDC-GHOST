import {environment} from '../environments/environment';

//Clase para facilitar navegación de página donde se listan los Posts
class PostListPage {

    //Ir a página de listado de posts
    visit() {
        cy.visit(environment.baseUrl + 'posts');
        cy.wait(3000)
        //cy.get('.gh-main').scrollTo('bottom', { ensureScrollable: false });
        
    }

    //Verificar si el post existe con el estado esperado
    verifyPostStatus(postTitle, status) {
        cy.get('.gh-content-entry-title').contains(postTitle)
        .parent()
        .parent()
        .find('.gh-post-list-status').contains(status);
    }

    

}
export default PostListPage;
