import LoginPage from '../../page-object/LoginPage';
import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';
import TagEditPage from '../../page-object/TagEditPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Tags - Borrar tag', () => {
    const loginPage = new LoginPage();
    const tagListPage = new TagListPage();
    const tagNewPage = new TagNewPage();
    const tagEditPage = new TagEditPage();

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

    it.only('Borrar tag', () => {

        //Tag data a borrar
        const tagDataToDelete = {
            name: faker.person.firstName(),
            color: faker.internet.color().split('#')[1],
            slug:  faker.helpers.slugify(faker.lorem.words(2).toLowerCase()),
            description: faker.lorem.sentence(),
            image: {name: 'tigre-test.jpg', type: 'image/jpeg'}
        };

        //crear 2 tags aleatorios
        [...Array(2)].forEach(() => {
            createTag({
                name:faker.person.firstName(),
                color: faker.internet.color().split('#')[1],
                slug:  faker.helpers.slugify(faker.lorem.words(2).toLowerCase()),
                description: faker.lorem.sentence(),
                image: {name: 'tigre-fake.jpg', type: 'image/jpeg'}
            });
        });

        //Tag a borrar
        createTag(tagDataToDelete);
        tagEditPage.visit(tagDataToDelete.slug);
        tagEditPage.deleteTag();

        //El tag NO existe en la lista de tags
        tagListPage.tagNotExist(tagDataToDelete);
    });
});