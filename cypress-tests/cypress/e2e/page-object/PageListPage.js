import {environment} from '../environments/environment';

class PageListPage {
    visit() {
      cy.visit(environment.baseUrl + 'pages');
    }
}

export default PageListPage;