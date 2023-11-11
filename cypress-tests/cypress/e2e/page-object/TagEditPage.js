import {environment} from '../environments/environment';

class TagEditPage {
    visit(url) {
        cy.visit(environment.baseUrl + 'tags/' + url);
    }

    imageExists(tagData) {
        let imageName = tagData.image.name.split('.')[0];
        
        cy.get('.gh-image-uploader img')
        .should(($img) => {
            const src = $img.attr('src');
            expect(src).to.include(imageName);
        });
    }
}

export default TagEditPage;