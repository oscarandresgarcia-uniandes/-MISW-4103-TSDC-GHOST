import {environment} from '../environments/environment';

class PageListPage {
    visit() {
      cy.visit(environment.baseUrl + 'pages');
    }

    pageExists(pageData, status = 'Draft') {
      cy.window().scrollTo('bottom', { ensureScrollable: false });
      cy.wait(500);
      cy.get('.gh-content-entry-title').contains(pageData.title)
      .parent()
      .find('.gh-content-entry-status').contains(status);
    }

    pageNotExist(pageData) {
      cy.window().scrollTo('bottom', { ensureScrollable: false });
      cy.wait(500);
      cy.get('.gh-content-entry-title').contains(pageData.title).should('not.exist');
    }

    navigateToPageByTitle(title) {
      cy.window().scrollTo('bottom', { ensureScrollable: false });
      cy.wait(1000);
      cy.get('.gh-posts-list-item .gh-content-entry-title').contains(title).click();
    }

    filterbyTag(tagName){
      cy.window().scrollTo('bottom', { ensureScrollable: false });
      cy.wait(500);
      cy.get('.gh-contentfilter-tag').click();
      cy.get('.ember-power-select-options li').contains(tagName).click();
    }
}

export default PageListPage;