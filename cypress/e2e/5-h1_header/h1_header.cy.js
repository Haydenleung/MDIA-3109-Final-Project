context('Home page', () => {

    it('displays the heading and pargraph text on home page', () => {
        // Visit the page
        cy.visit('http://localhost:3000')

        // Check if the heading, BE PREPARED FOR YOUR NEXT ADVENTURE is present
        cy.get('.landingHeading').should('be.visible').and('contain', 'BE PREPARED FOR YOUR NEXT ADVENTURE')
        
        // Check if the paragraph 'Let us know where you want to go and leave the rest to us. We've got you covered!'  is present
        cy.get('.landingBody').should('be.visible').and('contain', "Let us know where you want to go and leave the rest to us. We've got you covered!")
            })
        })
