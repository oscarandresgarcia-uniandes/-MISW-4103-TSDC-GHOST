import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';

describe('Gestión de Tags - Crear Tag con titulo, descriipción, imagen png con fondo transparente', function() {
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();

    it.only('Crear Tag con titulo, descriipción, imagen png con fondo transparente', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        tagNewPage.visit();

        const tagData = {
            name: dataPool.tag[0].name,
            color: dataPool.tag[0].accent_color.slice(1), 
            slug: dataPool.tag[0].slug,
            description: dataPool.tag[0].description,
            image: {name: 'tiger-png.png', type: 'image/png'} //Esta imagen debe ser local por las restricciones de la app
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida

        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();

         // Ir a lista de tags
         tagListPage.visit();

        //El tag existe en la lista de tags
        tagListPage.tagExists(tagData);
    });
});