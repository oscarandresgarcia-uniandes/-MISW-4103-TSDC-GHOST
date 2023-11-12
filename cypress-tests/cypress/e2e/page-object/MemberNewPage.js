import {environment} from '../environments/environment';

//Clase para facilitar navegación de página de miembros de la aplicación
class MemberNewPage {

    //Ir a página de creación de miembros
    visit() {
        cy.visit(environment.baseUrl + 'members/new');
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

    //Guardar Miembro
    saveMember(){
        cy.get('button[data-test-button="save"]').click();
        cy.wait(1000);
    }

}

export default MemberNewPage;