import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';
import { faker } from '@faker-js/faker';

describe('Creación de un Post en estado Published', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear un Post en estado Published de manera exitosa', () => {
        const postTitle = faker.lorem.words(5);
        const postTextContent = faker.lorem.paragraph();

        //Se accede a página de creación de Posts
        postPage.visit();
        
        //Se crea un nuevo post
        postPage.createPost(postTitle,postTextContent)
        postPage.submitPost('Publish')
        cy.wait(1000)
        
        //Se verifica que el post haya sido creado en estado Published
        postListPage.visit()
        postListPage.verifyPostStatus(postTitle,'Published')
        
    })
  })