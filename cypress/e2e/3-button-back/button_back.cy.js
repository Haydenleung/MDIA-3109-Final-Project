context('Vancouver Activities', () => {

    it("has a back button on the outdoor activities's page", () => {
        cy.visit('http://localhost:3000/outdoor?prop1=Vancouver')

        cy.get('button')
    })

    it("has a back button on the indoor activities's page", () => {
        cy.visit('http://localhost:3000/indoor?prop1=Vancouver')

        cy.get('button')
    })

})

// work further to specify it's a back button and should go back to 'http://localhost:3000/main?location=Vancouver'