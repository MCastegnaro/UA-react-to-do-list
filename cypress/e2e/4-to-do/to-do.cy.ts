describe('<ToDo>', () => {

    beforeEach(() => {
        cy.viewport("macbook-15");
        cy.visit('http://127.0.0.1:3000');
        cy.get('img').should("be.visible");
        cy.get('img').click();
        cy.url().should("include", "/to-do");
    })

    context('Quando acessar a página de ToDo', () => {

        it('Deve exibir o header do sistema', () => {
            cy.get('[data-testid="header"]').should("be.visible");
        });

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

        it('Deve desabilitar o botão de criar quando o input estiver vazio', () => {
            cy.get('._input_x3dtl_21').should("be.visible");

            cy.get('._button_x3dtl_75')
                .should("be.visible")
                .should("be.disabled");
        });

        it('Deve habilitar o botão de criar quando o input contiver texto', () => {
            cy.get('._input_x3dtl_21').should("be.visible").type("Nova tarefa");

            cy.get('._button_x3dtl_75')
                .should("be.visible")
                .should("not.be.disabled");
        });

        it('Deve exibir o conteúdo da página abaixo do header', () => {
            cy.get('[data-testid="content"]').should("be.visible");
        });

        it('Deve exibir o contêiner principal que contém a listagem de tarefas', () => {
            cy.get('main').should("be.visible");
        });

        it('Deve exibir o cabeçalho(header) dentro do contêiner principal, o qual inclui informações sobre a contagem de tarefas criadas e concluídas', () => {
            cy.get('._content_header_x3dtl_129').should("be.visible");
        });

        it('Deve exibir o texto de tarefas criadas e seu campo de contagem da quantidade de tarefas criadas', () => {
            cy.get('._content_header_x3dtl_129 > :nth-child(1)').should("be.visible");
            cy.get('._tasks_created_x3dtl_159').should("contain.text", "Tarefas Criadas");
            cy.get(':nth-child(1) > ._span_value_x3dtl_191').should("be.visible");
        });
    });
});
