context('Indoor', () => {
    it('displays the TripAdvisor API disclaimer', () => {
        cy.visit('http://localhost:3000/indoor?prop1')

        // Verify if the text "Attractions collected from the TripAdvisor API" is present on page
        cy.contains('p', 'Attractions collected from the TripAdvisor API').should('be.visible')
    })
})