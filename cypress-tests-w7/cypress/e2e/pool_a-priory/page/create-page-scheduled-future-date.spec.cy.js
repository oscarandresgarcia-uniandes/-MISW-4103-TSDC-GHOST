import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';

describe('Gestión de Páginas - Crear Página Con fecha de publicación futura', () => {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Crear Página Con fecha de publicación futura', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        pageContentPage.visit();
        
        const pageData = {
            title: dataPool['page-post'][0].title,
            content: dataPool['page-post'][0].plaintext,
            slug: dataPool['page-post'][0].slug
        };

       // Crear una nueva página
       pageContentPage.contentPage(pageData);

       // publicar la página con fecha del data pool
       pageContentPage.schedulePage(dataPool['page-post'][0].published_at);

       // navegar al listado de páginas
       pageListPage.visit();

       //La pagina está creada comom scheduled
       pageListPage.pageExists(pageData, 'Scheduled');
    });
});