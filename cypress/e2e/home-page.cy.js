describe('homepage', () => {
  beforeEach('visit homepage', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=100', {
      fixture: 'allPokemon.json'
  })
  cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/1/', {
      fixture: 'samplePoke1.json'
  })
    cy.visit('http://localhost:3000/pokemon-pokedex')
  });

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('should have a list of pokemon', () => {
    cy.get('.poke-list').find("img").should('exist')
  })

  it('should display the correct name', () => {
    cy.get('.poke-list').first().within(() => {
      cy.get(':nth-child(1) > a > h3').should('have.text', 'NOTE');
    });
  });

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

  it('should allow the user to click on a pokemon and navigate to the single poke page', () => {
    cy.get('.poke-list')
      .contains('NOTE').click()
      .url().should('include', '/1')
      .url().should('not.eq', 'http://localhost:3000/')
  });
  it('should show either a catch or need toggle button', () => {
    cy.get('.poke-list')
      .get(':nth-child(1) > button').contains('Need')
  })
  it('should display error message for 404 status code', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?limit=10', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/1')
      .contains('404 Not Found')
      .contains('Press Home or the Logo to go back')
  });
})