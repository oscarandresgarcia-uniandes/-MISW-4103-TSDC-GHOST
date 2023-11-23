import {environment} from '../environments/environment';

//Clase para facilitar navegación de página de configuración de la aplicación
class SettingsPage {

    //Ir a página de settings
    visit() {
        cy.visit(environment.baseUrl + 'settings');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
        cy.ghostscreenshot('visit settings page');
    }
    /* MÉTODOS PARA DESIGN & BRANDING*/
    //Ir a página de diseño del sitio
    visitDesignPage() {
        cy.visit(environment.baseUrl + 'settings/design');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
        cy.ghostscreenshot('visit branding page');
    }

    //Seleccionar botón para customizar Branding
    clickOnCustomizeDesign() {
        cy.get('.cursor-pointer')
        .contains('Customize')
        .parent()
            .click()
    }

    //Obtener descripción del Site
    getSiteDescription(){
        return cy.get('input[id=":ro:"]').invoke('val')
    }
    //Editar descripción del Site
    editSiteDescription(description){
        cy.get('input[id=":ro:"]').clear().type(description)
    }

    //Obtener Accent Color del Site
    getAccentColor(){
        return cy.get('input[aria-label="Color value"]').invoke('val')
    }

    //Editar Accent color del Site
    editAccentColor(colorHex){
        cy.get('input[aria-label="Color value"]').clear().type(colorHex)
    }

    //Guardar cambios realizados al Branding
    saveBrandingChanges(){
        cy.contains('button', 'Save').click();
    }

    //Cerrar página
    closeBrandingWindow(){
        cy.contains('button', 'Close').click();

    }


}
export default SettingsPage;