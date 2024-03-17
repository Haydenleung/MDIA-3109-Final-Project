context('Home page', () => {

    it('has an input field', () => {
        cy.visit('http://localhost:3000/')

        cy.get('input[placeholder="Search for City in Metro Vancouver"]')
    })

})