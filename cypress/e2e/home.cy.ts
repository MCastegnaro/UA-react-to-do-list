/// <reference types="cypress" />

describe('on load not found page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display texts', () => {
        const pageTitle = cy.get("#root > section > article");

        pageTitle.get("h1")
            .contains("To do List")

        pageTitle.get("h2")
            .contains("Desafio do Ignite")
    });


    it('should display image and redirect onclick', () => {
        cy.get('a[href="/to-do"]')
            .should("be.visible")

        cy.get('img[src="/src/assets/capa.svg"]')
            .should("be.visible")
            .click()

        cy.url()
            .should('be.equal', 'http://localhost:8080/to-do');
    });
})