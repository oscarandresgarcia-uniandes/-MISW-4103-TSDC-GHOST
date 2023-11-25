import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Crear página con título y elemento de botón y URL inválida', function() {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Crear página con título y elemento de botón y URL inválida', function () {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        pageContentPage.visit();
        
        const pageData = {
            title: dataPool['page-post'][0].title + '{enter}',
            button: {
                id: 'Button',
                text: dataPool['page-post'][0].title,
                url: dataPool['page-post'][0].title //URL inválida para elemento de botón
            }
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

         //Remover el enter
         pageData.title = pageData.title.replace('{enter}', '');

        // navegar al listado de páginas
        pageListPage.visit();

        // //La pagina está creada
        pageListPage.pageExists(pageData);

        // //Ir a la página creada
        pageListPage.navigateToPageByTitle(pageData.title);

        // Información creada correctamente
        pageContentPage.hasContent(pageData);
    });
});