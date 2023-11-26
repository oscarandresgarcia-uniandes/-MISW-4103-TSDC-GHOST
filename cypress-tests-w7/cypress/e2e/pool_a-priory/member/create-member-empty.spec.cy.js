import MemberListPage from '../../page-object/MemberListPage';
import MemberNewPage from '../../page-object/MemberNewPage';

describe('Creación de un Miembro en la aplicación sin data', function() {
    
    const memberPage = new MemberNewPage();
    const memberListPage = new MemberListPage();

    it('Test para validar creación de un miembro sin datos', function() {

        const dataPool = this.dataPool;
        const memName = dataPool['member'][0].name;
        const memEmail = dataPool['member'][0].email;
        const memLabel = dataPool['label'][0].name;
        const memNote = dataPool['member'][0].note;

        //Se accede a página de creación de Miembros
        memberPage.visit();
        cy.wait(3000)

        //Se intenta crear un nuevo miembro sin información
        memberPage.saveMember()

        //Se verifica que la página solicite campos requeridos
        memberPage.validateRequiredFields()
        
    })
  })