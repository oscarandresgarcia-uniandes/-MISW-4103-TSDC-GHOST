import PageContentPage from '../../page-object/PageContentPage';
import PageListPage from '../../page-object/PageListPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Páginas - Crear Página exitosa, publicar y despublicar', function() {
    const pageContentPage = new PageContentPage();
    const pageListPage = new PageListPage();

    it.only('Crear Página exitosa, publicar y despublicar', () => {
        pageContentPage.visit();
        
        const pageData = {
            title: faker.word.words(3),
            content: faker.lorem.paragraphs(1),
        };

        // Crear una nueva página
        pageContentPage.contentPage(pageData);

        // publicar la página
        pageContentPage.publishPage();

        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina está creada como published
        pageListPage.pageExists(pageData, 'Published');

        //Ir a la página creada
        pageListPage.navigateToPageByTitle(pageData.title);

        //Despublicar la página
        pageContentPage.unpublishPage();
        
        // navegar al listado de páginas
        pageListPage.visit();

        //La pagina está creada como Draft
        pageListPage.pageExists(pageData);
    });
});