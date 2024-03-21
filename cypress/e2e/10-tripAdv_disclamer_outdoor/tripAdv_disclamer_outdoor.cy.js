context('Outdoor', () => {
    it('displays the TripAdvisor API disclaimer', () => {
        cy.visit('http://localhost:3000/outdoor?prop1')

        //Make sure text "Attractions collected from the TripAdvisor API" is on Outdoor page
        cy.contains('p', 'Attractions collected from the TripAdvisor API').should('be.visible')
    })
})