import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';

describe('Gestión de Tags - Crear Tag con limite de frontera en el título', function() {
    const tagNewPage = new TagNewPage();
    const tagListPage = new TagListPage();

    it.only('Crear Tag con limite de frontera en el título', function() {

        const dataPool = this.dataPool;
        //cy.log(JSON.stringify(dataPool));

        tagNewPage.visit();

        const tagData = {
            name: dataPool.tag[0].name,
            color: dataPool.tag[0].accent_color.slice(1) + dataPool.tag[0].accent_color.slice(2), //Color de mas de 6 digitos
            slug: dataPool.tag[0].slug,
            description: dataPool.tag[0].description,
            image: {name: 'tigre-test.jpg', type: 'image/jpeg'}
        };

        //Nota: No hay que hacer validación de color ya que el UI debe cortar los caracteres de color automaticamente cuando exceden los 6 caracteres
        //En este caso el tag debe ser credo y verificable en la lista

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida

        //Guardar datos del nuevo tag
        tagNewPage.saveCreateTag();

        //Una vez el tag creado, debe existir la opción para borrarlo
        tagNewPage.newTagCanBeDeleted();

        // Ir a lista de tags
        tagListPage.visit();

        //El tag existe en la lista de tags
        tagListPage.tagExists(tagData);
    });
});