import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';

describe('Creación de un Post excediendo limite en título', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear un Post con un título que exceda la cantidad de caracteres', function() {

        const dataPool = this.dataPool;
        const postTitle = dataPool['page-post'][0].title
        const postContentExceed = dataPool['page-post'][2].plaintext
        const postContent = dataPool['page-post'][0].plaintext

        //Se accede a página de creación de Posts
        postPage.visit();
        
        //Se crea un nuevo post
        postPage.createPost(postTitle,postContent)
        postPage.editExcerpt(postContentExceed)
        postPage.submitPost('Publish leave')
        

        //Se presenta mensaje de error al exceder la cantidad límite de caracteres
        postPage.validateLimitExcerpt()
        
        //Se verifica que el post no haya sido creado 
        postListPage.visit()
        postPage.leavePage()
        postListPage.checkPostDoesntExist(postTitle)
        
    })
  })