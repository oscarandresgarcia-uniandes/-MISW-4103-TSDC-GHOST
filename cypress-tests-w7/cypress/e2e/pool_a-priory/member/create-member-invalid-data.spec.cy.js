import MemberListPage from '../../page-object/MemberListPage';
import MemberNewPage from '../../page-object/MemberNewPage';

describe('Creación de un Miembro en la aplicación con datos inválidos', function() {
    
    const memberPage = new MemberNewPage();
    const memberListPage = new MemberListPage();

    it('Test para validar creación de un miembro con datos inválidos', function() {

        const dataPool = this.dataPool;
        const memName = dataPool['member'][1].email;
        const memEmail = dataPool['member'][1].name;
        const memLabel = dataPool['label'][0].created_at;
        const memNote = dataPool['member'][1].note;

        //Se accede a página de creación de Miembros
        memberPage.visit();

        //Se intenta crear miembro con información incorrecta
        memberPage.createMember(memName,memEmail,memLabel,memNote)
        memberPage.saveMember()
        cy.wait(1000)

        //Se verifica que se muestren mensajes de error para campos inválidos
        memberPage.validateInvalidFields()


        //Se verifica que el miembro no haya sido creado con el nombre y el email incorrectos
        memberListPage.visit();
        memberListPage.checkMemberDoesntExist(memName,memEmail);
        
    })
  })