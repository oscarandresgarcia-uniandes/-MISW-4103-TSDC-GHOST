import {environment} from '../environments/environment';

class TagPage {
    visit() {
      cy.visit(environment.baseUrl + 'tags');
    }

    navigateToNewTagPage() {
      cy.contains('New tag').click();
    }

    createTag(tagData) {
      // Implement logic to create a new tag
    }

    deleteTag(tagName) {
      // Implement logic to delete a tag
    }
}

export default TagPage;