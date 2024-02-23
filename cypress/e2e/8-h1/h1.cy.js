context('Home page', () => {

    it('has a h1 tag', () => {
        cy.visit('http://localhost:3000/')

        cy.get('h1')
    })

})