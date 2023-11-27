import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';

describe('Creación de un Post con una imagen en el contenido', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear un Post con imagen', function() {

        const dataPool = this.dataPool;
        const postTitle = dataPool['page-post'][2].title
        const postContent = dataPool['page-post'][1].plaintext
        const postImageName = 'tiger-png.png'//Imagen precargada en el sistema


        //Se accede a página de creación de Posts
        postPage.visit();
        
        //Se crea un nuevo post con los datos del pool
        postPage.createPost(postTitle,postContent)
        postPage.editPostImage(postImageName)
        postPage.submitPost('Publish')
        cy.wait(2000)

        //Se verifica que el post haya sido creado en estado Published
        postListPage.visitPublished()
        postListPage.verifyPostStatus(postTitle,'Published') 
    })
  })