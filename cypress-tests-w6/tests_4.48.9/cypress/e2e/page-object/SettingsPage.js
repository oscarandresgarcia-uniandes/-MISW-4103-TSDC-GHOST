import {environment} from '../environments/environment';

//Clase para facilitar navegación de página de configuración de la aplicación
class SettingsPage {

    //Ir a página de settings
    visit() {
        cy.visit(environment.baseUrl + 'settings');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
    }
    /* MÉTODOS PARA DESIGN & BRANDING*/
    //Ir a página de diseño del sitio
    visitDesignPage() {
        cy.visit(environment.baseUrl + 'settings/design');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
    }

    //Seleccionar botón para customizar Branding
    clickOnCustomizeDesign() {
        cy.get('.gh-nav-list')
            .contains('button', 'Brand')
            .click()
    }

    //Obtener descripción del Site
    getSiteDescription(){
        return cy.get('input[id="site-description"]').invoke('val')
    }
    //Editar descripción del Site
    editSiteDescription(description){
        cy.get('input[id="site-description"]').clear().type(description)
    }

    //Obtener Accent Color del Site
    getAccentColor(){
        return cy.get('input[id="accent-color"]').invoke('val')
    }

    //Editar Accent color del Site
    editAccentColor(colorHex){
        cy.get('input[id="accent-color"]').clear().type(colorHex)
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