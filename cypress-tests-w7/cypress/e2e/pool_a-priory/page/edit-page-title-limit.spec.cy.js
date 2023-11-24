import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Editar página', function() {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Editar página con límites de frontera título', function () {

        const dataPool = this.dataPool;

        pageContentPage.visit();
        
        const pageData = {
            title: dataPool['page-post'][0].title,
            content: dataPool['page-post'][0].plaintext,
        };

        const editPageData = {
            title: dataPool['page-post'][3].title
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina está creada
        pageListPage.pageExists(pageData);

        //Ir a la página creada
        pageListPage.navigateToPageByTitle(pageData.title);

        //Editar la página con titulo al limite de frontera
        pageContentPage.editPage(editPageData);
        cy.wait(3000); // En textos largos la interfaz no espera para terminar la edición
        
        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina existe con el titulo actualizado
        pageListPage.pageExists(editPageData);
    });
});