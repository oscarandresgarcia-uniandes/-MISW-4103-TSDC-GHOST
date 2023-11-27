import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';

describe('Edición de un Post con una imagen inválida', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear un Post y luego editarlo para agregar una imagen con formato inválido', function() {

        const dataPool = this.dataPool;
        const postTitle = dataPool['page-post'][1].title
        const postContent = dataPool['page-post'][1].plaintext
        const postImageName = 'example.json'

        //Se accede a página de creación de Posts
        postPage.visit();
        
        //Se crea un nuevo post
        postPage.createPost(postTitle,postContent)
        postPage.submitPost('Publish')
        cy.wait(3000)
        
        //Se verifica que el post haya sido creado 
        postListPage.visit()
        postListPage.checkPostExists(postTitle)

        //Se edita el post para agregar un archivo en formato invalido
        postPage.visitEdit(postTitle);
        postPage.editPostImage(postImageName)

        //Se espera observar un mensaje de error
        postPage.validateImage()
    

    })
  })