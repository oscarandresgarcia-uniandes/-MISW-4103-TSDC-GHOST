import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';

describe('Creación de un Post en estado Featured', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear un Post en estado Featured', function() {

        const dataPool = this.dataPool;
        const postTitle = dataPool['page-post'][0].title + dataPool['page-post'][1].title
        const postContent = dataPool['page-post'][1].plaintext

        //Se accede a página de creación de Posts
        postPage.visit();
        
        //Se crea un nuevo post con los datos del pool
        postPage.createPost(postTitle,postContent)
        postPage.submitPost('Featured')
        cy.wait(2000)

        //Se verifica que el post haya sido creado en estado Draft
        postListPage.visit()
        cy.wait(3000)
        postListPage.visitFeatured()
        cy.wait(3000)
        postListPage.checkPostExists(postTitle) 
    })
  })