context('Vancouver', () => {

    it("has a button saying 'Restaurants'", () => {
        cy.visit('http://localhost:3000/main?location=Vancouver')

        cy.get('button').contains('restaurants')
    })

})