context('Home page', () => {

    it('has a h1 tag with HERE DO YOU WANT TO GO?', () => {
        // Visit the page
        cy.visit('http://localhost:3000/')

        // Check if the h1  is present and contains WHERE DO YOU WANT TO GO?
        cy.get('h1').should('be.visible').and('contain', 'WHERE DO YOU WANT TO GO?')
    })
})