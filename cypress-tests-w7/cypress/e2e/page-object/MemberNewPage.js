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
    visitEdit(memName) {

        cy.contains('.gh-members-list-name', memName)
        .parents('tr[data-test-list="members-list-item"]')
        .invoke('attr', 'data-test-member')
        .as('idMember')
        

        cy.get('@idMember').then((idMember) => {
            
            cy.visit(environment.baseUrl + 'members/'+idMember);
            cy.wait(3000)
            cy.window().scrollTo('bottom', { ensureScrollable: false });
            
        })

        
    }

    //Editar campos de Miembro
    editName(name){
        cy.get('input[id="member-name"]').clear().type(name) 
    }
    editEmail(email){
        cy.get('input[id="member-email"]').clear().type(email,{ delay: 0}) 
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

    //Reintentar guardar Miembro
    retrySaveMember(){
        cy.contains("Retry")
        .parent()
        .click();
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

    //Validar que se muestren mensajes para campos requeridos
    validateRequiredFields(){
        cy.contains('Please enter an email')
    }

    //Validar que se muestren mensajes para campos con data inválida
    validateInvalidFields(){
        cy.contains('Invalid Email.')
    }

    //Validar que se muestren mensajes para campos que exceden cantidad de caracteres
    validateLimitFields(){
        
        cy.contains('Name cannot be longer than 191 characters.')
    }

    validateLimitEmail(){
        
        cy.contains('Email cannot be longer than 191 characters.')
    }


    

}

export default MemberNewPage;