/// <reference types="cypress" />

describe('on load to do list page', () => {
  beforeEach(() => {
    cy.visit('/to-do');
  });

  it('should display logo', () => {
    cy.get('img[src="/src/assets/logo.svg"]')
      .should("be.visible");
  });

  it('should display input', () => {
    cy.get('input')
      .should("be.visible")
  });

  it('should display submit button disabled', () => {
    cy.get('#root main button')
      .should("be.visible")
      .should("be.disabled")
      .contains("Criar")
  });
});

describe("on create to-do", () => {
  beforeEach(() => {
    cy.visit('/to-do');
  });

  it('should type on input and click submit button', () => {
    cy.get('input')
      .should("be.visible")
      .type("Automated test todo")

    cy.get('#root main button')
      .should("be.visible")
      .click()

    cy.get("aside")
      .should("be.visible")
      .contains("Tarefa adicionada com sucesso")
  });

  it('should have task created on task list', () => {
    cy.get('main')
      .should("be.visible")
      .contains("Automated test todo")
  });

  it('should be possible to check and uncheck', () => {
    cy.get('main > section > article:first input[type="checkbox"]')
      .should("be.visible")
      .click()
      .click()
  });
});

describe("on delete to-do", () => {
  beforeEach(() => {
    cy.visit('/to-do');
  });

  it('should delete item', () => {
    cy.get('main > section > article:first img[src="/src/assets/trash.svg"]')
      .should("be.visible")
      .click()
  });
});