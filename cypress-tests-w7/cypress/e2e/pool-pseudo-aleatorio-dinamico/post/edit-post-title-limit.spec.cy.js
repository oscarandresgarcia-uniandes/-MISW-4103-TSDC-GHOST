import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';

describe('Edición de un Post con título que sobrepasa cantidad de caracteres permitida', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear y luego editar un Post para que el titulo exceda el limite', function() {

        const dataPool = this.dataPool;
        const postTitle = dataPool['page-post'][2].title + dataPool['page-post'][0].title
        const postContent = dataPool['page-post'][1].plaintext
        const postTitleExceed = dataPool['page-post'][0].longtext

        //Se accede a página de creación de Posts
        postPage.visit();
        
        //Se crea un nuevo post con los datos del pool
        postPage.createPost(postTitle,postContent)
        postPage.submitPost('Draft')

        //Se verifica que el post haya sido creado en estado Draft
        postListPage.visit()
        postListPage.verifyPostStatus(postTitle,'Draft') 

        //Se intenta editar el post con título largo
        postPage.visitEdit(postTitle);
        postPage.editTitle(postTitleExceed)
        postPage.submitPost('Publish leave')

        //Se verifica el mensaje de error al exceder la cantidad de caracteres
        postPage.validateLimitTitle()

    })
  })