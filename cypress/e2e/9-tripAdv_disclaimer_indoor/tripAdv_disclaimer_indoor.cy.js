context('Indoor', () => {
    it('displays the TripAdvisor API disclaimer', () => {
        cy.visit('http://localhost:3000/indoor?prop1')

        // Make sure "Attractions collected from the TripAdvisor API" is on Indoor page
        cy.contains('p', 'Attractions collected from the TripAdvisor API').should('be.visible')
    })
})