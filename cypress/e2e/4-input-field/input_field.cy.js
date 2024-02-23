context('Home page', () => {

    it('has a input field', () => {
        cy.visit('http://localhost:3000/')

        cy.get("input[placeholder=`Search for destination`]")
    })

})
