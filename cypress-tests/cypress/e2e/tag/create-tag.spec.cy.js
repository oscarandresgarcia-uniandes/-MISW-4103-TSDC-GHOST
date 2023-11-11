import LoginPage from '../page-object/LoginPage';
import TagPage from '../page-object/TagPage';

describe('Gestión de Tags - Crear Tag Exitoso', () => {
    const loginPage = new LoginPage();
    const tagPage = new TagPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login('oa.garcia2@uniandes.edu.co', 'Sqlserver2005!');
    });

    it('Crear Tag Exitoso', () => {
        tagPage.visit();
        tagPage.navigateToNewTagPage();

        const tagData = {
            name: 'Nuevo Tag',
            color: '#e3f218',
            slug: 'nuevo-slug',
            descripcion: 'Nuevo tag de prueba',
            imagen: '../fixures/images/tigre-test.jpg'
        };

        // Crear un nuevo tag
        tagPage.createTag(tagData.tagName);

        // Listar Tags
        // Verificar el nuevo tag en la lista

        // Borrar Tag
        tagPage.deleteTag(tagData.tagName);
        // Verificar que el usuario se haya eliminado de la lista
    });
});