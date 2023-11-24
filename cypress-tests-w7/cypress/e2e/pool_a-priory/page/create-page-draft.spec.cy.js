import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Crear Página Exitoso en draft', () => {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Crear Página Exitoso en draft', function() {

        const dataPool = this.dataPool;

        cy.log(JSON.stringify(dataPool));

        pageContentPage.visit();
        
        const pageData = {
            title: dataPool['page-post'][0].title,
            content: dataPool['page-post'][0].html,
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        // navegar al listado de páginas
        pageListPage.visit();
       

        //La pagina está creada en draft
        pageListPage.pageExists(pageData, 'Draft');
    });
});