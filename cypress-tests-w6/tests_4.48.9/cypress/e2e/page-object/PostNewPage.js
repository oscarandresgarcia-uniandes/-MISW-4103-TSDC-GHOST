import {environment} from '../environments/environment';

//Clase para facilitar navegación de página de creación de Posts
class PostNewPage {

    //Ir a página de creacion de posts
    visit() {
        cy.visit(environment.baseUrl + 'editor/post');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
    }

    //Ir a página de edicion de posts
    visitEdit(idPost) {
        cy.visit(environment.baseUrl + 'editor/post/'+idPost);
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
    }

    //Editar Título del Post
    editTitle(text){
        cy.get('.gh-editor-title').clear().type(text)
    }
    //Editar cuerpo del Post
    editBody(text){
        cy.get('[data-kg="editor"]').clear().type(text) 
    }

    //Editar tag del Post
    editTag(tagName){
        cy.get('.gh-main')
                    .find('button[title="Settings"]')
                    .click();
                    cy.wait(2000)
        cy.get('#tag-input input').click();
        cy.get('.ember-power-select-option').contains(tagName).click();
    }

    //Crear nuevo Post con opción de diferentes estados
    createPost(title,body){
        this.editTitle(title)
        this.editBody(body)

    }

    //Obtener estado de un post en la lista con base en el título del post
    getPostStatusByTitle(postTitle){

        return cy.contains('.gh-post-list-title', postTitle).parent().get('.gh-post-list-status').invoke('val')

    }

    submitPost(status){
        switch (status) {
            case 'Draft':
                cy.get('a[href*="#/posts"]')
                .contains('Posts')
                .click()
              break;
            case 'Publish':

                cy.get('.gh-publishmenu-trigger')
                .click()
                cy.wait(2000)
                cy.get('.gh-publishmenu-button')
                .contains('button', 'Publish')
                .click()
                cy.wait(2000)
                cy.get('.gh-btn')
                .contains('button', 'Publish')
                .click()
                cy.wait(2000)
                break;
            case 'Scheduled':
                cy.get('.gh-publishmenu-trigger')
                .click()
                cy.wait(2000)

                cy.get('.gh-publishmenu-radio')
                .contains('Schedule it for later').parent().click();
                cy.wait(2000)

                cy.get('.gh-publishmenu-button')
                .contains('Schedule').parent().click();
                cy.wait(2000)

                cy.get('.gh-btn')
                .contains('button', 'Schedule')
                .click()
                cy.wait(2000)

                break;
            case 'Update':
                    cy.get('[data-test-button="publish-save"]').click()
                    cy.wait(2000)
                    break;
            case 'Delete':
                    cy.get('.gh-main')
                    .find('button[title="Settings"]')
                    .click();
                    cy.wait(2000)
                    cy.window().scrollTo('bottom', { ensureScrollable: false });
                    cy.get('.settings-menu-delete-button')
                        .find('button')
                        .click()
                    cy.wait(2000)
                    cy.get('.modal-footer')
                    .find('.gh-btn-red')
                    .click();
                    
                    

                    break;
            default:
                cy.get('[data-test-link="posts"]').click();
        }
        
    }

}
export default PostNewPage;