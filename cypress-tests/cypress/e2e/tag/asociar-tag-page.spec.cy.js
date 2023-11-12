import LoginPage from '../page-object/LoginPage';
import TagNewPage from '../page-object/TagNewPage';
import TagListPage from '../page-object/TagListPage';
import PageContentPage from '../page-object/PageContentPage';
import PageListPage from '../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Tags - Asociar tag a page', () => {
    const loginPage = new LoginPage();
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

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

    it.only('Asociar tag a page', () => {

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

        //Ir a Crear página
        pageContentPage.visit();

        const pageData = {
            title: faker.word.words(3),
            content: faker.lorem.paragraphs(1),
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        //Agregar tag
        pageContentPage.addTag(tagData.name);

        //Ir al listagdo de paginas
        pageListPage.visit();

        //Seleccionar el filtro de tags
        pageListPage.filterbyTag(tagData.name);

        //Debe existir la página creada de acuerdo al filtro del tag
        pageListPage.pageExists(pageData);
        

    });
});