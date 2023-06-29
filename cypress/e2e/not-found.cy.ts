/// <reference types="cypress" />

describe('on load not found page', () => {
  beforeEach(() => {
    cy.visit('/404');
  });

  it('should display texts', () => {
    cy.get("h1").contains("Oops!");
    cy.contains("Sorry, an unexpected error has occurred.");
    cy.get("i").contains("Not Found");
  });

  it('should display redirect button', () => {
    cy.get('a[href="/"]')
      .should("be.visible")
      .children()
      .contains("Voltar")
  });
});

describe("on click redirect button", () => {
  it('should redirect to home', () => {
    cy.visit('/404');

    cy.get('a[href="/"]')
      .children()
      .click();

    cy.url()
      .should('be.equal', 'http://localhost:8080/');
  })
})