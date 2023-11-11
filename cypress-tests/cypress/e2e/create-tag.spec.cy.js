import LoginPage from './PageObject/LoginPage';
import TagPage from './PageObject/TagPage';

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
            tagName: 'Nuevo Tag',
            // Otros datos del tag
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