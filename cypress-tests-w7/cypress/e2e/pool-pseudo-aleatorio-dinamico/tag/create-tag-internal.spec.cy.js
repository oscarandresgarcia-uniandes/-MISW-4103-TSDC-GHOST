import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';

describe('Gestión de Tags - Crear Tag internal', function() {
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();

    it.only('Crear Tag internal', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        tagNewPage.visit();

        const tagData = {
            name: '#' + dataPool.tag[0].name, //Tags que empiezan con # son internal
            color: dataPool.tag[0].accent_color.slice(1), 
            slug: dataPool.tag[0].slug,
            description: dataPool.tag[0].description,
            image: {name: 'tigre-test.jpg', type: 'image/jpeg'}
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida

        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();

        // Ir a lista de tags
        tagListPage.visit();

        //Click en internal filter
        tagListPage.selectInternalTagFilter();

        //El tag existe en la lista de tags
        tagListPage.tagExists(tagData);
    });
});