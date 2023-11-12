import {environment} from '../environments/environment';

//Clase para facilitar navegación de página de creación de Posts
class PostNewPage {

    //Ir a página de creacion de posts
    visit() {
        cy.visit(environment.baseUrl + 'editor/post');
    }

    //Editar Título del Post
    editTitle(text){
        cy.get('.gh-editor-title').clear().type(text)
    }
    //Editar cuerpo del Post
    editBody(text){
        cy.get('.kg-prose p').clear().type(text) 
    }

    //Crear nuevo Post con opción de diferentes estados
    createPost(title,body){
        this.editTitle(title)
        this.editBody(body)

    }

    submitPost(status){
        switch (status) {
            case 'Draft':
                cy.get('[data-test-link="posts"]').click()
              break;
            case 'Publish':
                cy.get('[data-test-button="publish-flow"]').click()
                cy.wait(2000)
                cy.get('[data-test-button="continue"]').click()
                cy.wait(2000)
                cy.get('[data-test-button="confirm-publish"]').click()
                break;
            case 'Scheduled':
                //Se utiliza el valor del sistema por defecto que publica el post en 10 minutos
                cy.get('[data-test-button="publish-flow"]').click()
                cy.wait(2000)

                cy.get('[data-test-setting="publish-at"]')
                .find('button')
                .click()
                cy.wait(2000)
                cy.get('[data-test-radio="schedule"]').click({force: true})
                cy.wait(2000)
                cy.get('[data-test-button="continue"]').click()
                cy.wait(2000)
                cy.get('[data-test-button="confirm-publish"]').click()
                break;
            default:
                cy.get('[data-test-link="posts"]').click();
        }
        
    }

}
export default PostNewPage;