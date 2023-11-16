import {environment} from '../environments/environment';

class TagEditPage {
    visit(slug) {
        cy.visit(environment.baseUrl + 'tags/' + slug);
        cy.ghostscreenshot('visit tag edit page');
    }

    imageExists(tagData) {
        let imageName = tagData.image.name.split('.')[0];

        cy.get('.gh-image-uploader img')
        .should(($img) => {
            const src = $img.attr('src');
            expect(src).to.include(imageName);
        });
    }

    deleteTag(){
        cy.get('button[data-test-button="delete-tag"]').click();
        cy.ghostscreenshot('delete tag');
        cy.get('.modal-footer button[data-test-button="confirm').click();
    }
}

export default TagEditPage;