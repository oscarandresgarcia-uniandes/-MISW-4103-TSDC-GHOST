import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';
import { faker } from '@faker-js/faker';

describe('Edición de un Post en estado Published', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

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
        postListPage.visit()
        postListPage.verifyPostStatus(postTitle,'Published')

        //Se cambia el título del post
        const postTitle2 = faker.lorem.words(5);
        postPage.visitEdit(postTitle);

        postPage.editTitle(postTitle2)
        cy.wait(1000)
        
        postPage.submitPost('Update')
        cy.wait(1000)
        postListPage.visit();
        postListPage.checkPostExists(postTitle2)
        
    })
  })