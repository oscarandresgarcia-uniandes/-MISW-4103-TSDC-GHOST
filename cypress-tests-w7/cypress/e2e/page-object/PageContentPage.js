import {environment} from '../environments/environment';

class PageContentPage {
    visit() {
      cy.visit(environment.baseUrl + 'editor/page');
      cy.ghostscreenshot('visit page editor');
    }

    contentPage(pageData) {

      function addCard(element) {

        cy.get('[data-kg-plus-button="true"]').click();
        cy.get('[data-kg-card-menu-item="' + element.id + '"]').click();
       
        if(element.id == 'Button')  {
          cy.get('[data-testid="button-input-text"]').type(element.text);
        }

        if(element.id == 'Callout')  {
          cy.get('[data-testid="callout-bg-blue"] [data-lexical-editor="true"]').type(element.text);
        }
      }

      if(pageData.title) {
        cy.get('.gh-editor-title').type(pageData.title);
      }

      if (pageData.content) {
        cy.get('.kg-prose p').type(pageData.content);
      }

      if (pageData.button) {
        addCard(pageData.button);
      }

      if (pageData.callout) {
        addCard(pageData.callout);
      }
      
      cy.ghostscreenshot('type page content');
    }

    hasContent(data) {
      if(data.button) {
        if(data.button.text) {
          cy.get('[data-testid="button-card-btn"]').contains(data.button.text);
        }
      }

      if(data.callout) {
        if(data.callout.text) {
          cy.get('[data-testid="callout-bg-blue"]').contains(data.callout.text);
        }
      }
    }

    publishPage(){
      cy.get('button[data-test-button="publish-flow"]').click();
      cy.ghostscreenshot('publish page');
      cy.get('button[data-test-button="continue"]').click();
      cy.ghostscreenshot('publish page continue');
      cy.get('button[data-test-button="confirm-publish"]').click();
      cy.ghostscreenshot('publish page confirtm');
    }

    schedulePage(date=null){
      cy.get('button[data-test-button="publish-flow"]').click();
      cy.ghostscreenshot('schedule page');
      cy.get('.gh-publish-setting-trigger').contains('Right now').click();
      cy.ghostscreenshot('schedule page now');
      cy.get('.gh-radio ').contains('Schedule for later').click();

      if(date){
        cy.get('input[data-test-date-time-picker-date-input]').clear().type(date);
      }


      cy.ghostscreenshot('schedule page later');
      cy.get('button[data-test-button="continue"]').click();
      cy.ghostscreenshot('schedule page continue');
      cy.get('button[data-test-button="confirm-publish"]').click();
      cy.ghostscreenshot('schedule page confirm');
    }

    unpublishPage(){
      cy.get('.gh-unpublish-trigger').click();
      cy.get('button[data-test-button="revert-to-draft"]').click();
      cy.ghostscreenshot('unpublish page');
    }

    deletePage(){
      cy.get('button.settings-menu-toggle').click();
      cy.get('.settings-menu-delete-button button').click();
      cy.wait(500);
      cy.get('.gh-btn-red').click();
      cy.ghostscreenshot('delete page');
    }

    editPage(pageData){
      if(pageData.title){
        cy.get('.gh-editor-title').clear().type(pageData.title);
      }
      
      if(pageData.content){
        cy.get('.kg-prose p').clear().type(pageData.content);
      }
      cy.ghostscreenshot('edit page');
    }

    addTag(tagName){
      cy.get('button.settings-menu-toggle').click();
      cy.ghostscreenshot('page add tag menu');
      cy.get('#tag-input input').click();
      cy.ghostscreenshot('page add tag select');
      cy.get('.ember-power-select-option').contains(tagName).click();
      cy.ghostscreenshot('page add tag');
    }

    setFeatured(isFeatured){
      cy.get('button.settings-menu-toggle').click();
      cy.ghostscreenshot('page add tag menu');

      if(isFeatured){
        cy.get('input[data-test-checkbox="featured"] + span.input-toggle-component').click();
      }      
      cy.ghostscreenshot('page add featured select');
    }
}

export default PageContentPage;