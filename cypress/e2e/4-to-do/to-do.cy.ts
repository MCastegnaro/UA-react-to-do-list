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

        it('Deve exibir o contêiner principal que contém o contêiner com listagem de tarefas', () => {
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

        it('Deve exibir o texto de tarefas concluídas e seu campo de contagem da quantidade de tarefas concluídas', () => {
            cy.get('._content_header_x3dtl_129 > :nth-child(2)').should("be.visible");
            cy.get('._tasks_done_x3dtl_175').should("contain.text", "Concluídas");
            cy.get(':nth-child(2) > ._span_value_x3dtl_191').should("be.visible");
        });

        it('Deve adicionar uma nova tarefa ao inserir um texto no input e clicar no botão "Criar"', () => {
            const novaTarefa = "Nova tarefa";

            cy.get('._input_x3dtl_21').should('be.visible').clear().type(novaTarefa);

            cy.get('._button_x3dtl_75').should('be.visible').should('not.be.disabled').click();

            cy.get('._section_container_14eu5_1').should('have.length', 1);
            cy.get('._text_14eu5_51').contains(novaTarefa);
        });

        it('Deve conter um círculo representando o status da tarefa dentro do container de uma tarefa criada', () => {
            cy.get('[data-testid="circulo-status-tarefa"]').should("be.visible");
        });

        // it('Deve aumentar o número de tarefas criadas ao adicionar uma nova tarefa', () => {
        //     cy.get(':nth-child(1) > ._span_value_x3dtl_191').then(($span) => {
        //         const numeroTarefasInicial = parseInt($span.text());

        //         const novaTarefa = "Nova tarefa";
        //         cy.get('._input_x3dtl_21').should('be.visible').clear().type(novaTarefa);
        //         cy.get('._button_x3dtl_75').should('be.visible').should('not.be.disabled').click();

        //         cy.get(':nth-child(1) > ._span_value_x3dtl_191').should(($spanAtualizado) => {
        //             const numeroTarefasAtualizado = parseInt($spanAtualizado.text());
        //             expect(numeroTarefasAtualizado).to.equal(numeroTarefasInicial + 1);
        //         });
        //     });
        // });


    });
});
