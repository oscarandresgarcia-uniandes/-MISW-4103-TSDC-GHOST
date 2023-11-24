import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';
import { faker } from '@faker-js/faker';

describe('Creación de un Post en estado Scheduled', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear un Post en estado Scheduled de manera exitosa', () => {
        const postTitle = faker.lorem.words(5);
        const postTextContent = faker.lorem.paragraph();

        //Se accede a página de creación de Posts
        postPage.visit();
        cy.wait(3000)
        //Se crea un nuevo post y se regresa a la página anterior sin publicar
        postPage.createPost(postTitle,postTextContent)
        postPage.submitPost('Scheduled')
        cy.wait(1000)

        //Se verifica que el post haya sido creado en estado Scheduled
        postListPage.visit()
        postListPage.verifyPostStatus(postTitle,'Scheduled')

        
        
    })
  })