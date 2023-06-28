describe('>', () => {
    context('Quando acessar a página To-Do', () => {

        beforeEach(() => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')
        })

        it('Deve verificar se o header da tela aparece', () => {

            cy.get('[data-testid="header"]').should('be.visible')

        })

        it('Deve verificar se a logo do sistema é renderizada', () => {

            cy.get('._img_h3s54_21').should('be.visible')

        })

        it('Deve verificar se a tela noContent é renderizada', () => {

            cy.get('._section_container_1a9zj_1').should('be.visible')

        })

        it('Deve verificar se o input é renderizado', () => {

            cy.get('._input_x3dtl_21').should('be.visible')

        })

        it('Deve verificar se o botão "Criar" é renderizado', () => {

            cy.get('._button_x3dtl_75').should('be.visible')

        })

        it('Deve verificar se o a imagem do botão "Criar" é renderizado', () => {

            cy.get('._button_x3dtl_75').should('be.visible')

            cy.get('._tasks_created_x3dtl_159')

            cy.get('._tasks_done_x3dtl_175')

        })

        it('Deve verificar se o span "Tarefas criadas" é renderizado', () => {

            cy.get('._tasks_created_x3dtl_159').should('be.visible')

        })

        it('Deve verificar se o span "Tarefas concluídas" é renderizado', () => {

            cy.get('._tasks_done_x3dtl_175').should('be.visible')

        })

        it('Deve adicionar uma nova tarefa', () => {

            cy.get('input').type('New task')

            cy.get('button').click()

            cy.contains('New task').should('be.visible')

        })

        it('Deve verificar se o card da TodoList aparece', () => {

            cy.get('._section_container_14eu5_1').should('be.visible')

        })

        it('Verifica se o contador de tarefas criadas é igual a 1', () => {

            cy.get(':nth-child(1) > ._span_value_x3dtl_191').should('contain', '1')

        })

        it('Verifica se o contador de tarefas concluídas é igual a 0', () => {

            cy.get(':nth-child(2) > ._span_value_x3dtl_191').should('contain', '0')

        })

        it('Deve selecionar a checkbox da tarefa', () => {

            cy.get('input[data-testid="checkbox-status-tarefa"]').check();

            cy.get('input[data-testid="checkbox-status-tarefa"]').should('be.checked')

        })

        it('Verifica se o contador de tarefas concluídas é igual a 1', () => {

            cy.get(':nth-child(2) > ._span_value_x3dtl_191').should('contain', '1')

        })

        it('Deve remover uma tarefa', () => {

            cy.contains('New task').should('exist')

            cy.get('img[alt="Ícone de lixeira"]').click()

            cy.contains('New task').should('not.exist')

        })

        it('Verifica se o contador de tarefas criadas é igual a 0', () => {

            cy.get(':nth-child(1) > ._span_value_x3dtl_191').should('contain', '0')

        })

        it('Deve verificar se o botão fica disabled antes da task e enabled depois de digitar no input', () => {

            cy.get('button').should('be.disabled')

            cy.get('input').type('New task')

            cy.get('button').should('be.enabled')

            cy.get('button').click()

            cy.contains('New task').should('be.visible')

        })

        it('Deve adicionar uma nova tarefa e verificar se o toast do tipo success aparece', () => {

            cy.get('button').should('be.disabled')

            cy.get('input').type('New task')

            cy.get('button').should('be.enabled')

            cy.get('button').click()

            cy.contains('New task').should('be.visible')

            cy.get('._success_tygn9_59').should('be.visible')

        })

        it('Deve remover as tarefas em tela e verificar se o toast do tipo danger aparece', () => {

            cy.contains('New task').should('exist')

            cy.get('img[alt="Ícone de lixeira"]').click({ multiple: true })

            cy.contains('New task').should('not.exist')

            cy.get('._danger_tygn9_43').should('be.visible')

        })
    })
})