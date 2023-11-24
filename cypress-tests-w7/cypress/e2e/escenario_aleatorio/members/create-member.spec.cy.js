import MemberListPage from '../../page-object/MemberListPage';
import MemberNewPage from '../../page-object/MemberNewPage';
import { faker } from '@faker-js/faker';

describe('Creación de un Miembro en la aplicación', function() {
    
    const memberPage = new MemberNewPage();
    const memberListPage = new MemberListPage();

    it('Test para crear un nuevo miembro de manera exitosa', () => {
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
        memberListPage.checkMemberExists(memName,memEmail);
        
    })
  })