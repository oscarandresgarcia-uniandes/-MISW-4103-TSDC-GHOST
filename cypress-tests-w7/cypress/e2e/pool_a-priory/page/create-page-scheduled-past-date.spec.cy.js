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
            title: dataPool['page-post'][1].title,
            content: dataPool['page-post'][1].plaintext,
        };

       // Crear una nueva página
       pageContentPage.contentPage(pageData);

       // publicar la página con fecha del data pool
       pageContentPage.schedulePage(dataPool['page-post'][1].published_at);

       // navegar al listado de páginas
       pageListPage.visit();

       //La pagina está creada comom published porque la fecha es pasada
       pageListPage.pageExists(pageData, 'Scheduled'); //Bug: creada como scheduled y solo cambia a published cuando se entra al detalle de la página
    });
});