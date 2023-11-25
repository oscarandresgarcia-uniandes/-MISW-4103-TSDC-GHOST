import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';

describe('Gestión de Tags - Crear Tag con canonical URL - inválido', function() {
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();

    it.only('Crear Tag con canonical URL con canonical URL - inválido', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        tagNewPage.visit();

        const tagData = {
            name: dataPool.tag[0].name,
            color: dataPool.tag[0].accent_color.slice(1),
            slug: dataPool.tag[0].slug,
            description: dataPool.tag[0].description,
            canonicalURL: dataPool.tag[0].name //Agregar metadata para canonical URL con formato de URL inválido
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        
        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();


        //Revisar validaciones son correctas para la URL de canonical URL
        tagNewPage.invalidTagData([
            'The url should be a valid url' //Reportar bug: La validación debe salir junto a la caja de color
        ], false);
        
    });
});