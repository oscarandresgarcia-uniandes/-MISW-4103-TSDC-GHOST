import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';

describe('Gestión de Páginas - Crear Página con límite de contenido', () => {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Crear Página con límite de contenido', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        pageContentPage.visit();
        
        const pageData = {
            title: dataPool['page-post'][2].title, // texto muy largo
            content: dataPool['page-post'][2].plaintext,
        };

        // Crear una nueva página como featured
        pageContentPage.contentPage(pageData);

        // navegar al listado de páginas
        pageListPage.visit();
       

        //La pagina está creada en el listado
        pageListPage.pageExists(pageData);
    });
});