import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Crear Página Exitoso en draft', function() {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Crear Página Exitoso en draft', () => {
        pageContentPage.visit();
        
        const pageData = {
            title: faker.word.words(3),
            content: faker.lorem.paragraphs(1),
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        // navegar al listado de páginas
        pageListPage.visit();
       

        //La pagina está creada en draft
        pageListPage.pageExists(pageData, 'Draft');
    });
});