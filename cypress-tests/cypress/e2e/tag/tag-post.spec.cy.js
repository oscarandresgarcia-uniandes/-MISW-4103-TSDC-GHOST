import LoginPage from '../page-object/LoginPage';
import TagNewPage from '../page-object/TagNewPage';
import TagListPage from '../page-object/TagListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Tags - Asociar tag a post', () => {
    const loginPage = new LoginPage();
    const tagListPage = new TagListPage();
    const tagNewPage = new TagNewPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login();
    });

    function createTag(tagData) {
        tagNewPage.visit();
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida
        tagNewPage.saveCreateTag();
    }

    it.only('Asociar Tag a post', () => {

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
        tagListPage.visit();

         //El tag existe en la lista de tags
        tagListPage.tagExists(tagData);
    });
});