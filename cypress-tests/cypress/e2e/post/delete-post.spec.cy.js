import {environment} from '../environments/environment';
import LoginPage from '../page-object/LoginPage';
import PostNewPage from '../page-object/PostNewPage';
import PostListPage from '../page-object/PostListPage';
import { faker } from '@faker-js/faker';

describe('Eliminar un Post en estado Published', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();
    beforeEach(()=>{
        //Se hace login del usuario 
        loginPage.visit();
        cy.wait(1000)
        loginPage.login('oa.garcia2@uniandes.edu.co', 'Sqlserver2005!');
    })

    it('Test para editar un Post creado previamente de manera exitosa', () => {
        const postTitle = faker.lorem.words(5);
        const postTextContent = faker.lorem.paragraph();

        //Se accede a página de creación de Posts
        postPage.visit();
        cy.wait(3000)
        //Se crea un nuevo post y se regresa a la página anterior sin publicar
        postPage.createPost(postTitle,postTextContent)
        postPage.submitPost('Publish')
        cy.wait(3000)
        //Se verifica que el post haya sido creado en estado Published
        postListPage.visit();
        cy.wait(3000)
        cy.contains('.gh-content-entry-title', postTitle)
        .parents('.gh-list-row')
        .invoke('attr', 'data-test-post-id')
        .as('idPostElement')
        
        cy.get('@idPostElement').then((idPostElement) => {
            cy.get('[data-test-post-id="'+idPostElement+'"]')
            .contains('.gh-content-entry-status', 'Published')
            postPage.visitEdit(idPostElement)
            cy.wait(3000)
            //Se elimina el post y se verifica que no aparezca en la lista
            postPage.submitPost('Delete')
            cy.wait(3000)
            postListPage.visit();
            cy.wait(3000)
            cy.get('[data-test-post-id="'+idPostElement+'"]').should('not.exist')  
        })
        
        
    })
  })