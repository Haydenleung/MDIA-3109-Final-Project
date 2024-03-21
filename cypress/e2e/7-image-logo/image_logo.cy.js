context('Home', () => {
    it('displays the header component', () => {
        // Visit the page
        cy.visit('http://localhost:3000')

        // Check if the header component is present
        cy.get('Header').should('exist')
    })
})