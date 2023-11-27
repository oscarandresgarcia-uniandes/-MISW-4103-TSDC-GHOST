import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';

describe('Creación de un Post sin información', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear un Post sin información', function() {

        const dataPool = this.dataPool;
        const postTitle = dataPool['page-post'][1].title
        const postContent = dataPool['page-post'][1].plaintext

        //Se accede a página de creación de Posts
        postPage.visit();

        //Se verifica que el botón para publicar esté inhabilitado cuando no hay información
        postPage.cannotPublish()

        
        //Se crea un nuevo post sin información
        postPage.createPost(postTitle,postContent)
        postPage.clearData()
        postPage.submitPost('Publish')

    })
  })