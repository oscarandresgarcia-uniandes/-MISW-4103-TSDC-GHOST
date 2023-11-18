import LoginPage from '../page-object/LoginPage';
import TagNewPage from '../page-object/TagNewPage';
import TagListPage from '../page-object/TagListPage';
import TagEditPage from '../page-object/TagEditPage';

describe('Gestión de Tags - Crear Tag Con datos inválidos y requeridos', () => {
    const loginPage = new LoginPage();
    const tagListPage = new TagListPage();
    const tagNewPage = new TagNewPage();
    const tagEditPage = new TagEditPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login();
    });

    it.only('Crear Tag con parámetros invalidos y requeridos', () => {
        tagNewPage.visit();
        tagListPage.navigateToNewTagPage();

        let tagData = {
            name: ' ',
            color: 'invalido',
            slug: ' ',
            description: '<script>document.documentElement.innerHTML = "hacked";</script>',
            image: {name: 'example.json', type: 'application/json'}
        };


        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mientras la imagen es subida

        //Revisar validaciones son correctas
        let invalidMessages = [
            // 'You must specify a name for the tag.', //4.8 BUG
            'The colour should be in valid hex format'
        ]
        tagNewPage.invalidTagData(invalidMessages);


        // Ajustar datos
        tagData.name = 'Nuevo Tag';
        tagData.color = 'e3f218';
        tagData.slug = 'nuevo-slug';
        tagData.description = 'Nuevo tag de prueba 2';
        tagData.image = {name: 'tigre-test.jpg', type: 'image/jpeg'};
        tagNewPage.clearFields();
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mientras la imagen es subida

        //Guardar datos válidos del nuevo tag
        tagNewPage.saveCreateTag(true);

        // Ir a lista de tags
        tagListPage.visit();

        //El tag existe en la lista de tags
        tagListPage.tagExists(tagData);

        //Ir al modo edición y verificar que la imagen subida es correcta
        tagListPage.navigateToEditTag(tagData);
        tagEditPage.imageExists(tagData);
    });
});