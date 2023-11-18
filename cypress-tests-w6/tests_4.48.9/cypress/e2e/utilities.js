export function closeWarningOldVersion() {
    cy.get('body').then((body) => {
        cy.wait(500).then(() => {
            if (body.find('.gh-alert-close').length > 0) {
                cy.get('.gh-alert-close').click();
            } else {
                cy.log('Element not found, skipping test');
            }
        })
    });
}
