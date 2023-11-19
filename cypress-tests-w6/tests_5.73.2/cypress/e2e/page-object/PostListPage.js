import {environment} from '../environments/environment';

//Clase para facilitar navegación de página donde se listan los Posts
class PostListPage {

    //Ir a página de listado de posts
    visit() {
        cy.visit(environment.baseUrl + 'posts');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
        cy.ghostscreenshot('visit post list page');
    }

    //Verificar si el post existe con el estado esperado
    verifyPostStatus(postTitle, status) {
        cy.get('.gh-post-list-title').contains(postTitle)
        .parent()
        .find('.gh-content-entry-status').contains(status);

    }

    //Ver si un post existe con base en el título
    checkPostDoesntExist(postTitle){
        cy.contains('.gh-content-entry-title', postTitle).should('not.exist')  
    }

    checkPostExists(postTitle){
        cy.contains('.gh-content-entry-title', postTitle)
    }

    

}
export default PostListPage;
