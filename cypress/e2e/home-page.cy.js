describe('homepage', () => {
  beforeEach('visit homepage', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/1'), {fixture: 'samplePoke1.json'}
    cy.visit('http://localhost:3000/pokemon-pokedex')
  });

  // it('Should confirm that true is equal to true', () => {
  //   expect(true).to.equal(true)
  // });

  // it('should have a list of pokemon', () => {
  //   cy.get('.poke-list').find("img").should('exist')
  // })
  // it('should display the correct name', () => {
  //   cy.get('.poke-list').first().within(() => {
  //     cy.get(':nth-child(1) > a > h3').should('have.text', 'bulbasaur');
  //   });
  // });

  // it('should allow the user to click on a pokemon and navigate to the single poke page', () => {
  //   cy.get('.poke-list')
  //     .contains('bulbasaur').click()
  //     .url().should('include', '/1')
  //     .url().should('not.eq', 'http://localhost:3000/')
  // });
  // it('should show either a catch or need toggle button', () => {
  //   cy.get('.poke-list')
  //     .get(':nth-child(1) > button').contains('Need')
  // })
})