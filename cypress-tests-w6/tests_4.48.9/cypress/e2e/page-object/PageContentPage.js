import {environment} from '../environments/environment';

class PageContentPage {
    visit() {
      cy.visit(environment.baseUrl + 'editor/page');
      cy.ghostscreenshot('visit page editor');
    }

    contentPage(pageData) {
      cy.get('.gh-editor-title').type(pageData.title);
      cy.get('.koenig-editor__editor').type(pageData.content);
      cy.ghostscreenshot('type page content');
    }

    publishPage(){
      cy.get('.gh-publishmenu').click();
      cy.ghostscreenshot('publish page');
      cy.get('.gh-publishmenu-button').click();
      cy.ghostscreenshot('publish page continue');
      //cy.ghostscreenshot('publish page confirtm');
    }

    schedulePage(){
      cy.get('.gh-publishmenu').click();
      cy.ghostscreenshot('schedule page');
      //cy.ghostscreenshot('schedule page now');
      cy.get('.gh-publishmenu-radio').eq(1).click();
      cy.ghostscreenshot('schedule page later');
      cy.get('.gh-publishmenu-button').click();
      cy.ghostscreenshot('schedule page continue');
      //cy.ghostscreenshot('schedule page confirm');
    }

    unpublishPage(){
      cy.get('.gh-publishmenu').click();
      cy.get('.gh-publishmenu-radio').eq(0).click();
      cy.get('.gh-publishmenu-button').click();
      cy.ghostscreenshot('unpublish page');
    }

    deletePage(){
      cy.get('button.settings-menu-toggle').click();
      cy.get('button.settings-menu-delete-button').click();
      cy.wait(500);
      cy.get('.gh-btn-red').click();
      cy.ghostscreenshot('delete page');
    }

    editPage(pageData){
      if(pageData.title){
        cy.get('.gh-editor-title').clear().type(pageData.title);
      }
      
      if(pageData.content){
        cy.get('.koenig-editor__editor').clear().type(pageData.content);
      }
      cy.get('.koenig-editor__editor').click();
      cy.ghostscreenshot('edit page');
    }

    addTag(tagName){
      cy.get('button.settings-menu-toggle').click();
      cy.ghostscreenshot('page add tag menu');
      cy.get('#tag-input input').click();
      cy.ghostscreenshot('page add tag select');
      cy.get('.ember-power-select-option').contains(tagName).click();
      cy.get('#custom-excerpt').type(' '); // se necesita actualizar otro elemento porque no hay botón de guardar :(
      cy.ghostscreenshot('page add tag');
      cy.get('button.settings-menu-toggle').click();
    }
}

export default PageContentPage;