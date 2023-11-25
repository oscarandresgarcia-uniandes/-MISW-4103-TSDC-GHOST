import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Crear página con título y elemento header - exitoso', function() {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Crear página con título y elemento header - exitoso', function () {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        pageContentPage.visit();
        
        const pageData = {
            title: dataPool['page-post'][0].title + '{enter}',
            header: {
                id: 'Header',
                text: dataPool['page-post'][0].plaintext
            }
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        //Remover el enter
        pageData.title = pageData.title.replace('{enter}', '');

        // // navegar al listado de páginas
        pageListPage.visit();

        // // //La pagina está creada
        pageListPage.pageExists(pageData);

        // // //Ir a la página creada
        pageListPage.navigateToPageByTitle(pageData.title);

        // // Información creada correctamente
        pageContentPage.hasContent(pageData);
    });
});