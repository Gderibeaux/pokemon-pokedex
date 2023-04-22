describe('homepage', () => {
    beforeEach('visit homepage', () => {
      cy.visit('http://localhost:3000/pokemon-pokedex/advantages/1')
    });
  
    it('Should confirm that true is equal to true', () => {
      expect(true).to.equal(true)
    });

    it('should have a table of Type, Effectiveness, and Weaknesses', () => {
        cy.get('table')
        .get('thead > tr>').should('have.length', 3)
        .get('thead > tr > :nth-child(1)').contains('Type')
        .get('thead > tr > :nth-child(2)').contains('Effectiveness')
        .get('thead > tr > :nth-child(3)').contains('Weaknesses')
        
    })
    it('should have a length of 18 for all three', () => {
        cy.get('table')
        cy.get('thead > tr > :nth-child(1)')
        .get('tbody').children().should('have.length', 18)
    })

    it('should have a a header that holds logo and h1', () => {
        cy.get('header')
        .get('.logo')
        .get('h1').contains('PokeDex')
      })
    
      it('should have a a header that holds links', () => {
        cy.get('header')
        cy.get('.nav-links > [href="/pokemon-pokedex"]')
        .contains("HOME")
        .click().url().should('eq', 'http://localhost:3000/pokemon-pokedex')
        cy.get('[href="/pokemon-pokedex/advantages/1"]').contains("Types")
        .click().url().should('eq', 'http://localhost:3000/pokemon-pokedex/advantages/1')
      })

      it('should be able to click the back to home button', () => {
        cy.get('.nav-links > [href="/pokemon-pokedex"]').click();
        cy.url().should('eq', 'http://localhost:3000/pokemon-pokedex');
      });
      it('should display error message for 404 status code', () => {
        cy.intercept('https://pokeapi.co/api/v2/pokemon/1/', {
          statusCode: 404
        })
        cy.visit('http://localhost:3000/1')
          .contains('404 Not Found')
          .contains('Press Home or the Logo to go back')
      });
})