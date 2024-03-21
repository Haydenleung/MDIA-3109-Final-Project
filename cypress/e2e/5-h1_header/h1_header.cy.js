('displays the landing heading', () => {
    // Visit the page
    cy.visit('http://localhost:3000')

    // Check if the landing heading is present
    cy.get('.landingHeading').should('be.visible').and('contain', 'BE PREPARED FOR YOUR NEXT ADVENTURE')
})
