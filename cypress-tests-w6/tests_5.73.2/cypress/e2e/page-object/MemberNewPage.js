import {environment} from '../environments/environment';

//Clase para facilitar navegación de página de miembros de la aplicación
class MemberNewPage {

    //Ir a página de creación de miembros
    visit() {
        cy.visit(environment.baseUrl + 'members/new');
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
        cy.ghostscreenshot('visit member new page');
    }

    //Ir a página de edicion de miembros
    visitEdit(idMember) {
        cy.visit(environment.baseUrl + 'members/'+idMember);
        cy.wait(3000)
        cy.window().scrollTo('bottom', { ensureScrollable: false });
    }

    //Editar campos de Miembro
    editName(name){
        cy.get('input[id="member-name"]').clear().type(name) 
    }
    editEmail(email){
        cy.get('input[id="member-email"]').clear().type(email) 
    }
    editLabels(labels){
        cy.get('.ember-power-select-trigger-multiple-input').clear().type(labels) 
    }
    editNote(note){
        cy.get('textarea[name="note"]').clear().type(note) 
    }

    //Llenar formato Miembro
    createMember(name,email,labels,note){
        this.editName(name)
        this.editEmail(email)
        this.editLabels(labels)
        this.editNote(note)

    }

    //Obtener información del miembro
    getName(){
        return cy.get('input[id="member-name"]').invoke('val')
    }

    getEmail(){
        return cy.get('input[id="member-email"]').invoke('val')
    }

    getLabels(){
        return cy.get('.ember-power-select-trigger-multiple-input').invoke('val')
    }

    getNote(){
        return cy.get('textarea[name="note"]').invoke('val')
    }

    //Guardar Miembro
    saveMember(){
        cy.get('button[data-test-button="save"]').click();
        cy.wait(1000);
    }

    //Borrar Miembro
    deleteMember(){
        cy.get('button[data-test-button="member-actions"]').click();
        cy.wait(1000);
        cy.get('button[data-test-button="delete-member"]').click();
        cy.wait(1000);
        cy.get('button[data-test-button="confirm"]').click();
        cy.wait(1000);
        
    }


    

}

export default MemberNewPage;