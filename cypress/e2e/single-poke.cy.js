describe('Single Pokemon', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=10', {
            fixture: 'allPokemon.json'
        })
        cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/1/', {
            fixture: 'samplePoke1.json'
        })
        cy.visit('http://localhost:3000/pokemon-pokedex/1/')
    })
    it.only('should show the pokemon details', () => {
        cy.get('.information')
        .contains('NOTE')
        // cy.contains('Height: 7m | Weight: 69lbs')
        // cy.get('.information > :nth-child(5)')
        // cy.get('.information > :nth-child(6)')
        // cy.get('.information > :nth-child(7)')
    })
    // it('should show an image of a pokemon', () => {
    //     cy.get('.information > img')
    // })
    // it('should show a radar chart  of the pokemon stats', () => {
    //     cy.get('canvas')
    // })
    // it('should be able to click the back to home button', () => {
    //     cy.get('.nav-links > [href="/pokemon-pokedex"]').click();
    //     cy.url().should('eq', 'http://localhost:3000/pokemon-pokedex');
    //   });
    //   it('should display error message for 404 status code', () => {
    //     cy.intercept('https://pokeapi.co/api/v2/pokemon/1/', {
    //       statusCode: 404
    //     })
    //     cy.visit('http://localhost:3000/1')
    //       .contains('404 Not Found')
    //       .contains('Press Home or the Logo to go back')
    //   });
})