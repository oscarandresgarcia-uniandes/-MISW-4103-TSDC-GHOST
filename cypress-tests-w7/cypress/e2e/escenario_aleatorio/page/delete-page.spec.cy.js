import LoginPage from '../../page-object/LoginPage';
import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Borrar página', () => {
    const loginPage = new LoginPage();
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login();
    });

    it.only('Borrar página', () => {
        pageContentPage.visit();
        
        const pageData = {
            title: faker.word.words(3),
            content: faker.lorem.paragraphs(1),
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina está creada
        pageListPage.pageExists(pageData);

        //Ir a la página creada
        pageListPage.navigateToPageByTitle(pageData.title);

        //borrar la página
        pageContentPage.deletePage();
        
        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina está eliminada
        pageListPage.pageNotExist(pageData);
    });
});