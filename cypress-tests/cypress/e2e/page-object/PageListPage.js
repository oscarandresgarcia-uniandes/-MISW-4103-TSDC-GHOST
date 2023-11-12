import {environment} from '../environments/environment';

class PageListPage {
    visit() {
      cy.visit(environment.baseUrl + 'pages');
    }

    pageExists(pageData, status = 'Draft') {
      cy.get('.gh-content-entry-title').contains(pageData.title)
      .parent()
      .find('.gh-content-entry-status').contains(status);
    }

    navigateToPageByTitle(title) {
      cy.get('.gh-posts-list-item .gh-content-entry-title').contains(title).click();
    }

    filterbyTag(tagName){
      cy.wait(1000);
      cy.get('.gh-contentfilter-tag').click();
      cy.get('.ember-power-select-options li').contains(tagName).click();
    }
}

export default PageListPage;