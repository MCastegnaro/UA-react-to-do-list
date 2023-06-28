describe('>', () => {
    context('Quando acessar a página To-Do', () => {
        it('Deve adicionar uma nova tarefa', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')

            cy.get('button').should('be.disabled')

            cy.get('input').type('New task')

            cy.get('button').should('be.enabled')

            cy.get('button').click()

            cy.contains('New task').should('be.visible')

        })

        it('O contador de tarefas criadas deve ser 1', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')

            cy.get(':nth-child(1) > ._span_value_x3dtl_191').should('contain', '1')

        })

        it('O contador de tarefas concluídas deve ser 0', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')

            cy.get(':nth-child(2) > ._span_value_x3dtl_191').should('contain', '0')

        })

        it('Deve selecionar a checkbox da tarefa', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')

            cy.get('input[data-testid="checkbox-status-tarefa"]').check();

            cy.get('input[data-testid="checkbox-status-tarefa"]').should('be.checked')

        })

        it('O contador de tarefas concluídas deve ser 1', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')

            cy.get(':nth-child(2) > ._span_value_x3dtl_191').should('contain', '1')
        })


        it('Deve remover uma tarefa', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')

            cy.contains('New task').should('exist')

            cy.get('img[alt="Ícone de lixeira"]').click()

            cy.contains('New task').should('not.exist')

        })

        it('O contador de tarefas criadas deve ser 0', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')

            cy.get(':nth-child(1) > ._span_value_x3dtl_191').should('contain', '0')

        })
    })
})