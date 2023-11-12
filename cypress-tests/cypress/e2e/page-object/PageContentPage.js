import {environment} from '../environments/environment';

class PageContentPage {
    visit() {
      cy.visit(environment.baseUrl + 'editor/page');
    }

    contentPage(pageData) {
      cy.get('.gh-editor-title').type(pageData.title);
      cy.get('.kg-prose p').type(pageData.content);
    }

    pageExists(pageData, status = 'Draft') {
      cy.get('.gh-content-entry-title').contains(pageData.title)
      .parent()
      .find('.gh-content-entry-status').contains(status);
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
}

export default PageContentPage;