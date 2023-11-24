import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';

describe('Gestión de Páginas - Crear Página Exitoso en draft', () => {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Crear Página Exitoso en draft', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        pageContentPage.visit();
        
        const pageData = {
            title: dataPool['page-post'][0].title,
            content: dataPool['page-post'][0].html,
        };

        // Crear una nueva página como featured
        pageContentPage.contentPage(pageData);
        pageContentPage.setFeatured(true);

        // navegar al listado de páginas
        pageListPage.visit();
       

        //La pagina está creada en el listado
        pageListPage.pageIsFeatured(pageData);
    });
});