import LoginPage from '../page-object/LoginPage';
import PageContentPage from '../page-object/PageContentPage';
import PageListPage from '../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Crear Página exitosa y publicar', () => {
    const loginPage = new LoginPage();
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login();
    });

    it.only('Crear Página exitosa y publicar', () => {
        pageContentPage.visit();
        
        const pageData = {
            title: faker.word.words(3),
            content: faker.lorem.paragraphs(1),
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        // publicar la página
        pageContentPage.publishPage();

        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina está creada como published
        pageListPage.pageExists(pageData, 'Published');
    });
});