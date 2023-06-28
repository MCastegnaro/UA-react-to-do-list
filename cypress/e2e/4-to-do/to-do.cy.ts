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

        it('Deve exibir um campo de entrada(input) para adicionar uma nova tarefa', () => {
            cy.get('._input_x3dtl_21').should("be.visible");
        });

        it('Deve exibir um botão de criar uma nova tarefa', () => {
            cy.get('._button_x3dtl_75').should("be.visible");
            cy.get('._button_x3dtl_75 > img').should("be.visible");
        });
    });
});
