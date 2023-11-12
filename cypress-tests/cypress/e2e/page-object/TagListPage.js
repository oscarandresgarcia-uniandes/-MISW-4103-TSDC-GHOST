import {environment} from '../environments/environment';

class TagListPage {
    visit() {
        cy.visit(environment.baseUrl + 'tags');
    }

    navigateToNewTagPage() {
        cy.contains('New tag').click();
    }

    navigateToEditTag(tagData) {
        cy.get('.gh-tags-list-item .gh-tag-list-name').contains(tagData.name).click();
    }

    tagExists(tagData) {
        cy.get('.gh-tags-list-item .gh-tag-list-name').contains(tagData.name);
        cy.get('.gh-tags-list-item .gh-tag-list-description').contains(tagData.description);
        cy.get('.gh-tags-list-item [data-test-tag-slug] span').contains(tagData.slug);
    }

    tagNotExist(tagData) {
        cy.get('.gh-tags-list-item .gh-tag-list-name').should('not.contain', tagData.name);
        cy.get('.gh-tags-list-item .gh-tag-list-description').should('not.contain', tagData.description);
        cy.get('.gh-tags-list-item [data-test-tag-slug] span').should('not.contain', tagData.slug);
    }
}

export default TagListPage;