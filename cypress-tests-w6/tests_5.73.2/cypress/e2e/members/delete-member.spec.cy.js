import {environment} from '../environments/environment';
import LoginPage from '../page-object/LoginPage';
import MemberNewPage from '../page-object/MemberNewPage';
import MemberListPage from '../page-object/MemberListPage';
import { faker } from '@faker-js/faker';

describe('Borrado de un Miembro en la aplicación', () => {
    
    const loginPage = new LoginPage();
    const memberPage = new MemberNewPage();
    const memberListPage = new MemberListPage();
    beforeEach(()=>{
        //Se hace login del usuario 
        loginPage.visit();
        cy.wait(1000)
        loginPage.login();
    })

    it('Test para eliminar un miembro de manera exitosa', () => {
        const memName = faker.person.fullName();
        const memEmail = faker.internet.email();
        const memLabel = faker.lorem.words(1);
        const memNote = faker.lorem.paragraph();

        //Se accede a página de creación de Miembros
        memberPage.visit();
        cy.wait(3000)
        //Se crea un nuevo miembro
        memberPage.createMember(memName,memEmail,memLabel,memNote)
        memberPage.saveMember()
        cy.wait(3000)
        //Se verifica que el miembro haya sido creado con el nombre y el email
        memberListPage.visit();
        cy.wait(2000)
        
        //Se navega a la página de edición del post

        cy.contains('.gh-members-list-name', memName)
        .parents('tr[data-test-list="members-list-item"]')
        .invoke('attr', 'data-test-member')
        .as('idMember')
        

        cy.get('@idMember').then((idMember) => {
            
            memberPage.visitEdit(idMember)
            cy.wait(3000)
            memberPage.deleteMember()
            //Se verifica que el miembro no aparezca en la lista
            memberListPage.visit();
            memberListPage.checkMemberDoesntExist(memName,memEmail);
        })
    })
  })