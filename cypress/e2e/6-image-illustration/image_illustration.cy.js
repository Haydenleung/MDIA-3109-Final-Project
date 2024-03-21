context('Home page', () => {
    it('displays the vector image that is the correct size', () => {
        cy.visit('http://localhost:3000/') 

        // Check if the image with the class name "vector" exists
        cy.get('.vector').should('exist')

        // Verify the source of the image
        cy.get('.vector').should('have.attr', 'src')

        // Verify the dimensions of the image
        cy.get('.vector').should('have.attr', 'width', '500')
        cy.get('.vector').should('have.attr', 'height', '500')

        // Verify the alt attribute of the image
        cy.get('.vector').should('have.attr', 'alt', 'welcome')
    })
})