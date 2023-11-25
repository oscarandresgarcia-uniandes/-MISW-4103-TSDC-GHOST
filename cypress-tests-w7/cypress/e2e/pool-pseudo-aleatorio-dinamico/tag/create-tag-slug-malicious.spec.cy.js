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
            name: dataPool.tag[0].name,
            color: dataPool.tag[0].accent_color.slice(1),
            slug: '<script>document.write("' + dataPool.tag[0].slug + '");</script>', //malicious code injection
            description: dataPool.tag[0].description
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);

        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();

        //Revisar que se remueva el código malicioso
        tagNewPage.validSanitized(tagData);
        
    });
});