import {environment} from '../environments/environment';
import { closeWarningOldVersion } from '../utilities';
class TagNewPage {
    visit() {
      cy.visit(environment.baseUrl + 'tags/new');
      closeWarningOldVersion();
      cy.ghostscreenshot('visit new tag page');
    }

    createTag(tagData) {
      if(tagData.name) {
        cy.get('#tag-name').type(tagData.name);
        cy.get('body').click(); //reportar bug
      }
      
      cy.get('input[name="accent-color"].gh-input').type(tagData.color);
      cy.get('#tag-slug')
      .clear()
      .type(tagData.slug, {force: true});
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
    }

    clearFields() {
      cy.get('#tag-name').clear();
      cy.get('input[name="accent-color"].gh-input').clear();
      cy.get('#tag-slug').clear();
      cy.get('#tag-description').clear();
    }

    saveCreateTag(enablePrint=true, retryAction=false, save=true) {

      const buttonAction = retryAction ? 'Retry' : 'Save';

      if(save) {
        cy.get('.view-actions button').contains(buttonAction).click();
      }
      

      if(enablePrint) {
        cy.ghostscreenshot('save tag');
      }
      
    }

    invalidTagData(validationList) {
      validationList.forEach(element => { 
        cy.contains(element);
      });

      cy.get('#tag-name').click();
      cy.ghostscreenshot('new tag validation errors');
      cy.get('.image-delete').click();
    }

    //Cuando un tag es guardado, debe visualizarse el botón de borrar tag
    newTagCanBeDeleted() {
      cy.get('button.gh-btn-red').contains('Delete tag');
    }
}

export default TagNewPage;