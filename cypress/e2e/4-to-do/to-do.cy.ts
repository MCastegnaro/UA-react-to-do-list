describe('<Todo>', () => {

    context('Quando entrar na pagina todo', () => {
        it('Deve exibir a imagem logo da plataforma', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._img_h3s54_21').should("be.visible")
        })
    
        it('Deve ter o testo Criar no botao', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._button_x3dtl_75').should("contain.text", "Criar")
        })

        it('Deve existir o header da pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('[data-testid="header"]').should("be.visible")
        })

        it('Deve ter o container de content em baixo do header na pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('[data-testid="content"]').should("be.visible")
        })

        it('Deve existir o botão para cadastrar a tarefa', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._button_x3dtl_75').should("be.visible")
        }) 

        it('Deve existir o input para inserir o nome da tarefa', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._input_x3dtl_21').should("be.visible")
        })
        
        it('Deve exibir o incone (+) do botão de cadastrar a tarefa', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._button_x3dtl_75 > img').should("be.visible")
        })

        it('Deve ter o container do input na pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._input_container_x3dtl_21').should("be.visible")
        })

        it('Deve ter um campo que onde será mostrado a quantidade de Tarefas Criadas, na pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get(':nth-child(1) > ._span_value_x3dtl_191').should("be.visible")
        })

        it('Deve ter um campo que onde será mostrado a quantidade de Tarefas Concluidas, na pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get(':nth-child(2) > ._span_value_x3dtl_191').should("be.visible")
        })

        it('Deve ter o texto de Tarefas Criadas na pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._tasks_created_x3dtl_159').should("be.visible")
        })

        it('Deve ter o container que guarda os textos de Tarefas Criadas e Concluidas na pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._content_header_x3dtl_129').should("be.visible")
        })

        it('Deve ter o texto de Concluidas na pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._tasks_done_x3dtl_175').should("be.visible")
        })

        it('Deve ter um placeholder no input de adicione uma nova tarefa', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('input._input_x3dtl_21').invoke('attr', 'placeholder').should('eq', 'Adicione uma nova tarefa')
        })

        it('Deve estar desabilitado o botão ao entrar na pagina', () => {
        cy.visit('http://localhost:3000/to-do')
        cy.get('._button_x3dtl_75').should('be.disabled')
        })

        it('Deve habilitar o botão após ter algo no campo de input da tarefa', () => {
        cy.visit('http://localhost:3000/to-do')
        cy.get('._input_x3dtl_21').type('Tarefa Criada') 
        cy.get('._button_x3dtl_75').should('be.enabled')
        })

        it('Deve ter o container que contem o texto Concluidas, dentro da pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._content_header_x3dtl_129 > :nth-child(2)').should("be.visible")
        })
    
        it('Deve ter o container que contem o texto Tarefas Concluidas, dentro da pagina', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._content_header_x3dtl_129 > :nth-child(1)').should("be.visible")
        })

        it('Deve certificar que o botão funciona adicionando uma nova tarefa', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._input_x3dtl_21').type('Tarefa Criada') 
            cy.get('._button_x3dtl_75').click()
        })

        it('Deve Criar tarefa', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._input_x3dtl_21').type('Tarefa Criada') 
            cy.get('._button_x3dtl_75').click()
        })

        it('Deve verificar se o que foi digitado do campo do input da tarefa e igual o valor digitado dentro do campo', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._input_x3dtl_21').type('Tarefa Criada') 
            cy.get('input._input_x3dtl_21').invoke('attr', 'value').should('eq', 'Tarefa Criada')
        })
    
        it('Deve verificar se o input limpa o campo, voltando a mostrar o placeholder sem nada digitado pelo usuario refletido no input', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._input_x3dtl_21').type('Tarefa Criada') 
            cy.get('._button_x3dtl_75').click()
            cy.get('input._input_x3dtl_21').invoke('attr', 'value').should('eq', 'Tarefa Criada')
        })

        it('Deve marcar como concluido todas as tarefas para verificacao', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('input[type="checkbox"]').check()
        })

        it('Deve deletar uma tarefa para verificacao', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get(':nth-child(1) > ._img_14eu5_85').click()
        })  

    })
})