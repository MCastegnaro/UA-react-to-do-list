describe('<LandingPAge>', () => {
  context('Quando acessar a home', () => {
    it('Deve exibir uma tag h1 com o titulo do sistema', () => {
      cy.viewport("macbook-13");
      cy.visit('http://example.cypress.io');

      cy.get('h1').should("contain.text", "To do List");
    });
  });
});