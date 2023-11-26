import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';
import { faker } from '@faker-js/faker';

describe('Creación de un Post en estado Scheduled con fecha invalida', function() {
    
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    it('Test para crear un Post en estado Scheduled con fecha invalida', function(){
        const dataPool = this.dataPool;
        const postTitle = dataPool['page-post'][0].title
        const postTitleUpdate = dataPool['page-post'][1].title
        const postContent = dataPool['page-post'][0].plaintext

        //Se accede a página de creación de Posts
        postPage.visit();
        //Se crea un nuevo post y se edita la fecha para que sea inválida
        postPage.createPost(postTitle,postContent)
        postPage.editPublishDate(postTitle)
        postPage.createPost(postTitleUpdate,postContent)
        postPage.submitPost('Publish leave')
        

        //Se presenta mensaje de error al tener una fecha inválida
        postPage.validateDate()
    
        
    })
  })