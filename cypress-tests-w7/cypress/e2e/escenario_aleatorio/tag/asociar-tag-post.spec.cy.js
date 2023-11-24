import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';
import PostNewPage from '../../page-object/PostNewPage';
import PostListPage from '../../page-object/PostListPage';
import { faker } from '@faker-js/faker';

describe('Asociar tag a post', function() {
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();
    const postPage = new PostNewPage();
    const postListPage = new PostListPage();

    function createTag(tagData) {
        tagNewPage.visit();
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida
        tagNewPage.saveCreateTag();
    }

    it.only('Asociar tag a page', () => {
        //Data para crear un post
        const postTitle = faker.lorem.words(5);
        const postTextContent = faker.lorem.paragraph();

        //Crear un tag
        const tagData = {
            name: faker.person.firstName(),
            color: faker.internet.color().split('#')[1],
            slug:  faker.helpers.slugify(faker.lorem.words(2).toLowerCase()),
            description: faker.lorem.sentence(),
            image: {name: 'tigre-test.jpg', type: 'image/jpeg'}
        };

        //Crear el tag
        createTag(tagData);
        
         // Ir a lista de tags
         cy.wait(500);
        tagListPage.visit();

         //El tag existe en la lista de tags
        tagListPage.tagExists(tagData);

        //Se accede a página de creación de Posts
        postPage.visit();
        cy.wait(3000)
        //Se crea un nuevo post
        postPage.createPost(postTitle,postTextContent)

        //Se agrega el tag al post 
        postPage.editTag(tagData.name)

        //Navegar a listado de tags, abrir el post y verificar que el tag fue asociado
        postListPage.visit();
        cy.wait(3000)
        cy.contains('.gh-content-entry-title', postTitle)
        .parents('.gh-list-row')
        .invoke('attr', 'data-test-post-id')
        .as('idPostElement')
        
        cy.get('@idPostElement').then((idPostElement) => {
            postPage.visitEdit(idPostElement)
            cy.wait(3000)
            cy.get('.gh-main')
                    .find('button[title="Settings"]')
                    .click();
                    cy.wait(2000)
            cy.contains('.ember-power-select-multiple-inner-text', tagData.name)

        })





    });
});