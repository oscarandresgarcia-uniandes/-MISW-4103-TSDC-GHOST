import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Editar página', function() {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Editar página', () => {
        pageContentPage.visit();
        
        const pageData = {
            title: faker.word.words(3),
            content: faker.lorem.paragraphs(1),
        };

        const editPageData = {
            title: faker.word.words(3)
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina está creada
        pageListPage.pageExists(pageData);

        //Ir a la página creada
        pageListPage.navigateToPageByTitle(pageData.title);

        //Editar la página
        pageContentPage.editPage(editPageData);
        
        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina existe con el titulo actualizado
        pageListPage.pageExists(editPageData);
    });
});