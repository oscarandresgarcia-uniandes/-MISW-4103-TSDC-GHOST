import MemberListPage from '../../page-object/MemberListPage';
import MemberNewPage from '../../page-object/MemberNewPage';

describe('Creación de un Miembro en la aplicación con nombre excediendo caracteres', function() {
    
    const memberPage = new MemberNewPage();
    const memberListPage = new MemberListPage();

    it('Test para validar creación de un miembro con nombre que excede el limite de caracteres', function() {

        const dataPool = this.dataPool;
        const memName = dataPool['page-post'][2].plaintext;
        const memEmail = dataPool['member'][0].email;
        const memLabel = dataPool['label'][0].created_at;
        const memNote = dataPool['member'][1].note;

        //Se accede a página de creación de Miembros
        memberPage.visit();

        //Se intenta crear miembro con información incorrecta
        memberPage.createMember(memName,memEmail,memLabel,memNote)
        memberPage.saveMember()
        cy.wait(1000)

        //Se verifica que se muestren mensajes de error para campos que excedan la cantidad de caracteres permitidos
        memberPage.validateLimitFields()
        
    })
  })