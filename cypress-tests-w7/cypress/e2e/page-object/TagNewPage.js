import {environment} from '../environments/environment';

class TagNewPage {
    visit() {
      cy.visit(environment.baseUrl + 'tags/new');
      cy.ghostscreenshot('visit new tag page');
    }

    createTag(tagData) {
      cy.get('#tag-name').type(tagData.name);
      cy.get('input[data-test-input="accentColor"]').type(tagData.color);
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug').type(tagData.slug);
      cy.get('#tag-description').type(tagData.description);
      
      if(tagData.image) {
        cy.fixture(tagData.image.name, 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then(fileContent => {
          cy.get('input[type="file"]').attachFile({
            fileContent: fileContent,
            fileName: tagData.image.name,
            mimeType: tagData.image.type
          });
        });
        cy.ghostscreenshot('new tag page with image');
      } else {
        cy.ghostscreenshot('new tag page no image');
      }

      if(tagData.canonicalURL) {
        cy.get('.gh-expandable-title').contains('Meta data')
        .parent()
        .parent()
        .find('button').click();

        cy.get('#canonical-url').type(tagData.canonicalURL);
      }
    }

    validSanitized(data) {
      let maliciousScript = '<script>';
      if (data.slug) {
        cy.get('#tag-slug').invoke('val').should('not.include', maliciousScript);
      }

      if (data.name) {
        cy.get('#tag-name').invoke('val').should('not.include', maliciousScript);
      }
    }

    clearFields() {
      cy.get('#tag-name').clear();
      cy.get('input[data-test-input="accentColor"]').clear();
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug').clear();
      cy.get('#tag-description').clear();
    }

    saveCreateTag() {
      cy.get('button[data-test-button="save"]').click();

      //En el caso que el modal de confirmación aparezca, borrarlo
      cy.get('body').then((body) => {
        cy.wait(500).then(() => {
            if (body.find('[data-test-modal="unsaved-settings"] [data-test-leave-button]').length > 0) {
                cy.get('[data-test-modal="unsaved-settings"] [data-test-leave-button]').click();
            }
        })
    });
    
    cy.ghostscreenshot('save tag');
    }

    invalidTagData(validationList, retry = true) {
      validationList.forEach(element => { 
        cy.contains(element);
      });

      //Intentar de nuevo con otra imagen
      if (retry) {
        cy.get('button.gh-btn.gh-btn-green').click();
      }
      
      cy.get('#tag-name').click();
      cy.ghostscreenshot('new tag validation errors');
    }

    //Cuando un tag es guardado, debe visualizarse el botón de borrar tag
    newTagCanBeDeleted() {
      cy.get('button[data-test-button="delete-tag"]');
    }
}

export default TagNewPage;