context('Vancouver', () => {

    it("has a button saying 'Indoor Activities'", () => {
        cy.visit('http://localhost:3000/main?location=Vancouver')

        cy.get('button').contains('Indoor Activities')
    })

})