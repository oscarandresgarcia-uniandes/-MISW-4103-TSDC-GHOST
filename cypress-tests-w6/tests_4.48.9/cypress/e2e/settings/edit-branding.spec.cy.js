import {environment} from '../environments/environment';
import LoginPage from '../page-object/LoginPage';
import SettingsPage from '../page-object/SettingsPage';
import { faker } from '@faker-js/faker';

describe('Edición del Branding del Site creado', () => {
    const settingsPage = new SettingsPage();
    const loginPage = new LoginPage();
    beforeEach(()=>{
        //Se hace login del usuario 
        loginPage.visit();
        cy.wait(1000)
        loginPage.login();
    })

    it('Test para editar el color (branding) del Site', () => {
        const titleSite = faker.lorem.words(5);
        const colorSite = faker.color.rgb().toUpperCase().replace("#", "");
        //Se accede a página de configuración del diseño
        settingsPage.visitDesignPage();
        cy.wait(2000)
        //Se selecciona el botón para editar el Diseño y Branding
        settingsPage.clickOnCustomizeDesign();
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
        settingsPage.visit()
        cy.wait(2000)
        settingsPage.visitDesignPage();
        cy.wait(2000)
        settingsPage.clickOnCustomizeDesign();
        settingsPage.getSiteDescription().then((description) => {
            assert(titleSite,description)
        })

        settingsPage.getAccentColor().then((color) => {
            assert(colorSite,color)
        })

        
    })
  })