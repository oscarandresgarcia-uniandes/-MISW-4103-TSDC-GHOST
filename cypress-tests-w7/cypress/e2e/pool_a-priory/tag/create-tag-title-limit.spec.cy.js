import TagNewPage from '../../page-object/TagNewPage';

describe('Gestión de Tags - Crear Tag con limite de frontera en el título', function() {
    const tagNewPage = new TagNewPage();

    it.only('Crear Tag con limite de frontera en el título', function() {

        const dataPool = this.dataPool;

        tagNewPage.visit();

        const tagData = {
            name: dataPool.tag[2].name,
            color: dataPool.tag[2].accent_color.slice(1),
            slug: dataPool.tag[2].slug,
            description: dataPool.tag[2].description,
            image: {name: 'tigre-test.jpg', type: 'image/jpeg'}
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida

        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();

         //Revisar validaciones son correctas
         let invalidMessages = [
            'Tag names cannot be longer than 191 characters',
        ]
        tagNewPage.invalidTagData(invalidMessages, false);
    });
});