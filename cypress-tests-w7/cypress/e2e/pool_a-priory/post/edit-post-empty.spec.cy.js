import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';

describe('Edición de un Post borrando información', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear un Post y luego editarlo para no contener información', function() {

        const dataPool = this.dataPool;
        const postTitle = dataPool['page-post'][1].title
        const postContent = dataPool['page-post'][1].plaintext

        //Se accede a página de creación de Posts
        postPage.visit();
        
        //Se crea un nuevo post
        postPage.createPost(postTitle,postContent)
        postPage.submitPost('Publish')
        cy.wait(3000)
        
        //Se verifica que el post haya sido creado 
        postListPage.visit()
        postListPage.checkPostExists(postTitle)

        //Se edita el post para borrar toda su información
        postPage.visitEdit(postTitle);
        postPage.clearData()
        postPage.submitPost('Publish')
    

    })
  })