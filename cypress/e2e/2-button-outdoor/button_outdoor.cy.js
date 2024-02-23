context('Vancouver', () => {

    it("has a button saying 'Outdoor Activities'", () => {
        cy.visit('http://localhost:3000/main?location=Vancouver')

        cy.get('button').contains('Outdoor Activities')
    })

})