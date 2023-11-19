import {environment} from '../environments/environment';
import { closeWarningOldVersion } from '../utilities';


//Clase para facilitar navegación de página de miembros de la aplicación
class MemberNewPage {

    //Ir a página de creación de miembros
    visit() {
        cy.visit(environment.baseUrl + 'members/new');
        cy.wait(3000);
        closeWarningOldVersion();
        cy.wait(1000);
        
    }

    //Ir a página de edicion de miembros
    visitEdit(nameMember) {
        
        
        
        cy.get('.gh-members-list-name').contains(nameMember)
        .parent()
        .parent()
        .click({force:true})
        cy.wait(2000)
        
    }

    //Editar campos de Miembro
    editName(name){
        cy.get('input[id="member-name"]').clear().type(name,{force: true}) 
    }
    editEmail(email){
        cy.get('input[id="member-email"]').clear().type(email,{force: true}) 
    }
    editLabels(labels){
        cy.get('.ember-power-select-trigger-multiple-input').clear().type(labels,{force: true}) 
    }
    editNote(note){
        cy.get('textarea[name="note"]').clear().type(note,{force: true}) 
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
        cy.get('.view-actions')
            .contains('Save').parent().click();
            cy.wait(1000)
    }

    //Borrar Miembro
    deleteMember(){
        cy.get('.gh-btn-action-icon').click();
        cy.wait(1000);
        cy.get('.gh-member-actions-menu')
                .contains('Delete member').parent().click();
        cy.wait(1000);
        cy.get('.modal-footer')
                    .contains('Delete').click({force: true});
                    cy.wait(2000)
        cy.wait(1000);
        
    }


    

}

export default MemberNewPage;