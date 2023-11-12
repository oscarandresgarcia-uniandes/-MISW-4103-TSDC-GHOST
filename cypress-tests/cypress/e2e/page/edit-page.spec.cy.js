import LoginPage from '../page-object/LoginPage';
import PageContentPage from '../page-object/PageContentPage';
import PageListPage from '../page-object/PageListObject';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Crear Página Exitoso en draft', () => {
    const loginPage = new LoginPage();
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login();
    });

    it.only('Crear Página Exitoso en draft', () => {
        pageContentPage.visit();
        
        const pageData = {
            title: faker.lorem.words(3),
            content: faker.lorem.paragraphs(1),
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        // navegar al listado de páginas
        pageListPage.visit();
       

        //La pagina está creada en draft
        pageContentPage.pageExists(pageData);
    });
});