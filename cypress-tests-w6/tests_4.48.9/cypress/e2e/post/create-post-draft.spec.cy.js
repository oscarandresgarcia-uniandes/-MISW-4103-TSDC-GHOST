import {environment} from '../environments/environment';
import LoginPage from '../page-object/LoginPage';
import PostNewPage from '../page-object/PostNewPage';
import { faker } from '@faker-js/faker';

describe('Creación de un Post en estado Draft', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostNewPage();
    beforeEach(()=>{
        //Se hace login del usuario 
        loginPage.visit();
        cy.wait(1000)
        loginPage.login();
    })

    it('Test para crear un Post en estado Draft de manera exitosa', () => {
        const postTitle = faker.lorem.words(5);
        const postTextContent = faker.lorem.paragraph();

        //Se accede a página de creación de Posts
        postPage.visit();
        cy.wait(3000)
        //Se crea un nuevo post y se regresa a la página anterior sin publicar
        postPage.createPost(postTitle,postTextContent)
        postPage.submitPost('Draft')
        cy.wait(3000)

        //Se verifica que el post haya sido creado en estado Draft
        postListPage.visit()
        cy.wait(3000)
        const stats = postPage.getPostStatusByTitle(postTitle)
        assert(stats,'Draft')
    })
  })