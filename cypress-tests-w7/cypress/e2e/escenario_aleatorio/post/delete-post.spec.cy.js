import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';
import { faker } from '@faker-js/faker';

describe('Eliminar un Post en estado Published', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para editar un Post creado previamente de manera exitosa', () => {
        const postTitle = faker.lorem.words(5);
        const postTextContent = faker.lorem.paragraph();

        //Se accede a página de creación de Posts
        postPage.visit();
        cy.wait(3000)
        //Se crea un nuevo post en estado Published
        postPage.createPost(postTitle,postTextContent)
        postPage.submitPost('Publish')
        cy.wait(3000)
        //Se elimina el post
        postListPage.visit();
        cy.wait(3000)
        postPage.visitEdit(postTitle);

        postPage.submitPost('Delete')
        //Se verifica que el post no aparezca en la lista

        postListPage.visit();
        cy.wait(1000)
        postListPage.checkPostDoesntExist(postTitle)
    })
  })