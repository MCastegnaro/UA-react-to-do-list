describe('example to-do app', () => {

    beforeEach(() => {
        cy.viewport("macbook-15");
        cy.visit('http://127.0.0.1:3000');
        cy.get('img').should("be.visible");
        cy.get('img').click();
        cy.url().should("include", "/to-do");
    })

    context('Quando acessar a página de ToDo', () => {

        it('Deve exibir o logo do sistema', () => {
            cy.get('._img_h3s54_21').should("be.visible");
        });
    });
});
