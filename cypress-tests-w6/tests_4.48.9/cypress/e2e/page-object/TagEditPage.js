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
        cy.get('button.gh-btn-red').contains('Delete tag').click();
        cy.ghostscreenshot('delete tag');
        cy.get('.modal-footer button.gh-btn-red').contains('Delete').click();
    }
}

export default TagEditPage;