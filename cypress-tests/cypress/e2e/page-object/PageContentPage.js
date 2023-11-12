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
}

export default PageContentPage;