import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';

describe('Gestión de Tags - Crear Tag con color no hexagesimal', function() {
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();

    it.only('Crear Tag con color no hexagesimal', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        tagNewPage.visit();

        const tagData = {
            name: dataPool.tag[0].name,
            color: dataPool.tag[0].slug, //Color no hexagesimal
            slug: dataPool.tag[0].slug,
            description: dataPool.tag[0].description,
            image: {name: 'tigre-test.jpg', type: 'image/jpeg'}
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida

        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();

        //Revisar validaciones son correctas para el color
        tagNewPage.invalidTagData([
            'The colour should be in valid hex format' //Reportar bug: La validación debe salir junto a la caja de color
        ], false);
    });
});