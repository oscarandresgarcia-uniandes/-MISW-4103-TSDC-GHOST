import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';

describe('Gestión de Tags - Crear página con nombre, descripción y slug con código malicioso', function() {
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();

    it.only('Crear página con nombre, descripción y slug con código malicioso', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        tagNewPage.visit();

        const tagData = {
            name: '<script>document.write("' + dataPool.tag[0].name + '");</script>', //malicious code injection,
            color: dataPool.tag[0].accent_color.slice(1),
            slug: dataPool.tag[0].slug,
            description: dataPool.tag[0].description
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);

        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();

        // Ir a lista de tags
        tagListPage.visit();

        //Revisar que se remueva el código malicioso
        tagListPage.tagIsSanitized(tagData);
        
    });
});