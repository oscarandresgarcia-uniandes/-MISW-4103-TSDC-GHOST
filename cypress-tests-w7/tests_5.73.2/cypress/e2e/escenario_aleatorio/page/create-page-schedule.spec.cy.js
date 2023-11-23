import LoginPage from '../page-object/LoginPage';
import PageContentPage from '../page-object/PageContentPage';
import PageListPage from '../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Crear Página exitosa (Scheduled)', () => {
    const loginPage = new LoginPage();
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login();
    });

    it.only('Crear Página exitosa (Scheduled)', () => {
        pageContentPage.visit();
        
        const pageData = {
            title: faker.lorem.words(3),
            content: faker.lorem.paragraphs(1),
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        // publicar la página
        pageContentPage.schedulePage();

        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina está creada comom scheduled
        pageListPage.pageExists(pageData, 'Scheduled');
    });
});