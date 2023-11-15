import {environment} from '../environments/environment';

class PageContentPage {
    visit() {
      cy.visit(environment.baseUrl + 'editor/page');
    }

    contentPage(pageData) {
      cy.get('.gh-editor-title').type(pageData.title);
      cy.get('.kg-prose p').type(pageData.content);
    }

    publishPage(){
      cy.get('button[data-test-button="publish-flow"]').click();
      cy.get('button[data-test-button="continue"]').click();
      cy.get('button[data-test-button="confirm-publish"]').click();
    }

    schedulePage(){
      cy.get('button[data-test-button="publish-flow"]').click();
      cy.get('.gh-publish-setting-trigger').contains('Right now').click();
      cy.get('.gh-radio ').contains('Schedule for later').click();
      cy.get('button[data-test-button="continue"]').click();
      cy.get('button[data-test-button="confirm-publish"]').click();
    }

    unpublishPage(){
      cy.get('.gh-unpublish-trigger').click();
      cy.get('button[data-test-button="revert-to-draft"]').click();
      cy.wait(1000);
    }

    deletePage(){
      cy.get('button.settings-menu-toggle').click();
      cy.get('.settings-menu-delete-button button').click();
      cy.wait(500);
      cy.get('.gh-btn-red').click();
    }

    editPage(pageData){
      if(pageData.title){
        cy.get('.gh-editor-title').clear().type(pageData.title);
      }
      
      if(pageData.content){
        cy.get('.kg-prose p').clear().type(pageData.content);
      }
    }

    addTag(tagName){
      cy.get('button.settings-menu-toggle').click();
      cy.get('#tag-input input').click();
      cy.get('.ember-power-select-option').contains(tagName).click();
    }
}

export default PageContentPage;