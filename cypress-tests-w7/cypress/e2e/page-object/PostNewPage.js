import {environment} from '../environments/environment';

//Clase para facilitar navegación de página de creación de Posts
class PostNewPage {

    //Ir a página de creacion de posts
    visit() {
        cy.visit(environment.baseUrl + 'editor/post');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
        cy.ghostscreenshot('visit post new page');
    }

    //Ir a página de edicion de posts
    visitEdit(postTitle) {

        cy.contains('.gh-content-entry-title', postTitle)
        .parents('.gh-list-row')
        .invoke('attr', 'data-test-post-id')
        .as('idPostElement')
        
        cy.get('@idPostElement').then((idPostElement) => {
            cy.get('[data-test-post-id="'+idPostElement+'"]')
            .contains('.gh-content-entry-status', 'Published')
            cy.visit(environment.baseUrl + 'editor/post/'+idPostElement);
            cy.wait(3000)
            cy.window().scrollTo('bottom', { ensureScrollable: false });
            cy.wait(3000)
        })

    }

    //Editar Título del Post
    editTitle(text){
        cy.get('.gh-editor-title').clear().type(text)
    }
    //Editar cuerpo del Post
    editBody(text){
        cy.get('.kg-prose p').clear().type(text) 
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

    //Editar excerpt del Post
    editExcerpt(exName){
        cy.get('.gh-main')
                    .find('button[title="Settings"]')
                    .click();
                    cy.wait(1000)
        cy.get('[name="post-setting-custom-excerpt"]').type(exName);

    }

    //Editar fecha de publicación del Post
    editPublishDate(date){
        cy.get('.gh-main')
                    .find('button[title="Settings"]')
                    .click();
                    cy.wait(1000)
        cy.get('input[data-test-date-time-picker-date-input]')
            .clear()
            .type(date,{force: true})
            .type('{enter}',{force: true})

          
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
            case 'Publish leave':
                cy.get('[data-test-button="publish-flow"]').click({force: true})
                cy.wait(1000)
                
                break;

            default:
                cy.get('[data-test-link="posts"]').click();
        }
        
    }

    validateLimitTitle(){
        cy.contains('Validation failed: Title cannot be longer than 255 characters.');

    }

    validateLimitExcerpt(){
        cy.contains('Excerpt cannot be longer than 300 characters.');

    }

    validateDate(){
        cy.contains('Invalid date');

    }


    

    leavePage(){
        cy.contains('button', 'Leave')
                .click()
    }


}
export default PostNewPage;