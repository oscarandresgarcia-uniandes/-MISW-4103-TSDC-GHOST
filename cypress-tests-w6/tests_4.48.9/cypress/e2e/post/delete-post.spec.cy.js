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
        loginPage.login();
    })

    it('Test para editar un Post creado previamente de manera exitosa', () => {
        const postTitle = faker.lorem.words(5);
        const postTextContent = faker.lorem.paragraph();

        //Se accede a página de creación de Posts
        postPage.visit();
    
        //Se crea un nuevo post en estado Published
        postPage.createPost(postTitle,postTextContent)
        postPage.submitPost('Publish')
        postListPage.visit()
        

        //Se accede a la página de edición del post
        postPage.visitEdit(postTitle)


        //Se elimina el post y se verifica que no aparezca en la lista
        postPage.submitPost('Delete')
        postListPage.visit();
        postListPage.checkPostDoesntExist(postTitle)
        
        
    })
  })