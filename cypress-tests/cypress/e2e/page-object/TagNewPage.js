import {environment} from '../environments/environment';

class TagNewPage {
    visit() {
      cy.visit(environment.baseUrl + 'tags/new');
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
      
    }

    invalidTagData(validationList) {
      validationList.forEach(element => {
        cy.contains(element);
      });

      //Intentar de nuevo con otra imagen
      cy.get('button.gh-btn.gh-btn-green').click();
    }

    //Cuando un tag es guardado, debe visualizarse el botón de borrar tag
    newTagCanBeDeleted() {
      cy.get('button[data-test-button="delete-tag"]');
    }
}

export default TagNewPage;