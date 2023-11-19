import {environment} from '../environments/environment';
import LoginPage from '../page-object/LoginPage';
import PostNewPage from '../page-object/PostNewPage';
import PostListPage from '../page-object/PostListPage';
import { faker } from '@faker-js/faker';

describe('Creación de un Post en estado Scheduled', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();
    beforeEach(()=>{
        //Se hace login del usuario 
        loginPage.visit();
        cy.wait(1000)
        loginPage.login();
    })

    it('Test para crear un Post en estado Scheduled de manera exitosa', () => {
        const postTitle = faker.lorem.words(5);
        const postTextContent = faker.lorem.paragraph();

        //Se accede a página de creación de Posts
        postPage.visit();
        //Se crea un nuevo post 
        postPage.createPost(postTitle,postTextContent)
        postPage.submitPost('Scheduled')
        
        //Se verifica que el post haya sido creado en estado Scheduled
        postListPage.visit()
        postListPage.verifyPostStatus(postTitle,'Scheduled')
      
        
    })
  })