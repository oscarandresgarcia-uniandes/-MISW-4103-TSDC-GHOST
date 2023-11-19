import {environment} from '../environments/environment';
import LoginPage from '../page-object/LoginPage';
import MemberNewPage from '../page-object/MemberNewPage';
import MemberListPage from '../page-object/MemberListPage';
import { faker } from '@faker-js/faker';

describe('Edición de un Miembro en la aplicación', () => {
    
    const loginPage = new LoginPage();
    const memberPage = new MemberNewPage();
    const memberListPage = new MemberListPage();
    beforeEach(()=>{
        //Se hace login del usuario 
        loginPage.visit();
        cy.wait(1000)
        loginPage.login();
    })

    it('Test para editar un miembro de manera exitosa', () => {
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

        //Se edita el miembro
        const memName2 = faker.person.fullName();
        const memEmail2 = faker.internet.email();
        const memLabel2 = faker.lorem.words(1);
        const memNote2 = faker.lorem.paragraph();
        memberPage.visitEdit(memName)
        memberPage.editName(memName2)
        memberPage.editEmail(memEmail2)
        memberPage.editLabels(memLabel2)
        memberPage.editNote(memNote2)

        memberPage.saveMember()
        cy.wait(2000)
        //Se verifica que el miembro haya sido actualizado con los nuevos valores
        memberListPage.visit();
        memberPage.visitEdit(memName2)

       memberPage.getName().then((nm) => {
            expect(memName2).eql(nm);
        })

        memberPage.getEmail().then((em) => {
            assert(memEmail2,em)
        })

        memberPage.getLabels().then((lab) => {
            assert(memLabel2,lab)
        })

        memberPage.getNote().then((note) => {
            assert(memNote2,note)
        })

        
    })
  })