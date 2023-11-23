import {environment} from '../environments/environment';

class TagListPage {
    visit() {
        cy.visit(environment.baseUrl + 'tags');
        cy.ghostscreenshot('visit tag list page');
    }

    navigateToNewTagPage() {
        cy.contains('New tag').click();
        cy.ghostscreenshot('navigate to new tag page');
    }

    navigateToEditTag(tagData) {
        cy.window().scrollTo('bottom', { ensureScrollable: false });
        cy.get('.gh-tags-list-item .gh-tag-list-name').contains(tagData.name).click();
        cy.ghostscreenshot('navigate to edit tag page');
    }

    tagExists(tagData) {
        cy.window().scrollTo('bottom', { ensureScrollable: false });
        cy.get('.gh-tags-list-item .gh-tag-list-name').contains(tagData.name);
        cy.get('.gh-tags-list-item .gh-tag-list-description').contains(tagData.description);
        cy.get('.gh-tags-list-item [data-test-tag-slug] span').contains(tagData.slug);
        cy.ghostscreenshot('tag exists');
    }

    tagNotExist(tagData) {
        cy.window().scrollTo('bottom', { ensureScrollable: false });
        cy.get('.gh-tags-list-item .gh-tag-list-name').should('not.contain', tagData.name);
        cy.get('.gh-tags-list-item .gh-tag-list-description').should('not.contain', tagData.description);
        cy.get('.gh-tags-list-item [data-test-tag-slug] span').should('not.contain', tagData.slug);
        cy.ghostscreenshot('tag doesnt exist');
    }
}

export default TagListPage;