import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';

describe('Gestión de Tags - Crear Tag con canonical URL - exitoso', function() {
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();

    it.only('Crear Tag con canonical URL con canonical URL - existoso', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        tagNewPage.visit();

        const tagData = {
            name: dataPool.tag[0].name,
            color: dataPool.tag[0].accent_color.slice(1),
            slug: dataPool.tag[0].slug,
            description: dataPool.tag[0].description,
            canonicalURL: dataPool.tag[0].canonical_url //Agregar metadata para canonical URL
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        
        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();

        // Ir a lista de tags
        tagListPage.visit();

        //El tag existe en la lista de tags
        tagListPage.tagExists(tagData);

        
    });
});