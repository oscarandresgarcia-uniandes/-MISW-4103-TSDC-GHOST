import {environment} from '../environments/environment';
import LoginPage from '../page-object/LoginPage';
import SettingsPage from '../page-object/SettingsPage';
import { faker } from '@faker-js/faker';

describe('Setup inicial para registrar un nuevo usuario en la aplicación', () => {
    const settingsPage = new SettingsPage();
    const loginPage = new LoginPage();
    beforeEach(()=>{
        //Se hace login del usuario 
        loginPage.visit();
        cy.wait(1000)
        loginPage.login('oa.garcia2@uniandes.edu.co', 'Sqlserver2005!');
    })

    it('Test para editar el color (branding) del Site', () => {
        const titleSite = faker.lorem.words(5);
        const colorSite = faker.color.rgb().toUpperCase();
        //Se accede a página de configuración del diseño
        settingsPage.visitDesignPage();
        cy.wait(5000)
        //Se selecciona el botón para editar el Diseño y Branding
        settingsPage.clickOnCustomizeDesign();
        cy.wait(3000)
        //Se edita la descripción del Site
        settingsPage.editSiteDescription(titleSite);
        //Se edita el accent color del Site
        settingsPage.editAccentColor(colorSite);
        //Guardar los cambios
        settingsPage.saveBrandingChanges();
        cy.wait(2000)
        //Cerrar y regresar
        settingsPage.closeBrandingWindow();
        cy.wait(1000)
        //Se verifica que los cambios hayan sido guardados
        settingsPage.clickOnCustomizeDesign();

        settingsPage.getAccentColor().then((description) => {
            assert(titleSite,description)
        })

        settingsPage.getAccentColor().then((color) => {
            assert(colorSite,color)
        })

        
    })
  })