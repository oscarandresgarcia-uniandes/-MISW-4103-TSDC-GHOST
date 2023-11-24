import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';
import TagEditPage from '../../page-object/TagEditPage';

describe('Gestión de Tags - Crear Tag Exitoso', function() {
    const tagListPage = new TagListPage();
    const tagNewPage = new TagNewPage();
    const tagEditPage = new TagEditPage();

    it.only('Crear Tag Exitoso', () => {
        tagNewPage.visit();

        const tagData = {
            name: 'Nuevo Tag',
            color: 'e3f218',
            slug: 'nuevo-slug',
            description: 'Nuevo tag de prueba 1',
            image: {name: 'tigre-test.jpg', type: 'image/jpeg'}
        };

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

        //Ir al modo edición y verificar que la imagen subida es correcta
        tagListPage.navigateToEditTag(tagData);
        tagEditPage.imageExists(tagData);
    });
});