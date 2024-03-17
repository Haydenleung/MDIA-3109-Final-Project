context('Home page', () => {

    it('has the vanplan logo', () => {
        cy.visit('http://localhost:3000/')

        // Wait for the image to exist
        cy.get('img[src="vanplan-logo.svg"]').should('be.visible', )
    })

})