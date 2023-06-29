describe('<Todo>', () => {

  context('Quando acessar a pagina todo do projeto', () => {
    it('Deve exibir a imagem logo da plataforma', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._img_h3s54_21').should("be.visible")
    })

    it('Deve exibir o header da pagina', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('[data-testid="header"]').should("be.visible")
    })

    it('Deve exibir o input para inserir o nome da tarefa da pagina', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._input_x3dtl_21').should("be.visible")
    })

    it('Deve exibir o botão para cadastrar a tarefa', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._button_x3dtl_75').should("be.visible")
    })

    it('Deve exibir o incone do sinal de mais(+) do botão de cadastrar a tarefa', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._button_x3dtl_75 > img').should("be.visible")
    })

    it('Deve conter o container do input', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._input_container_x3dtl_21').should("be.visible")
    })

    it('Deve conter o container de content em baixo do header', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('[data-testid="content"]').should("be.visible")
    })

    it('Deve conter o container que guarda os textos de Tarefas Criadas e Concluidas', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._content_header_x3dtl_129').should("be.visible")
    })

    it('Deve conter o texto de Tarefas Criadas', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._tasks_created_x3dtl_159').should("be.visible")
    })

    it('Deve conter o texto de Concluidas', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._tasks_done_x3dtl_175').should("be.visible")
    })

    it('Deve conter o container que contem o texto Tarefas Concluidas', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._content_header_x3dtl_129 > :nth-child(1)').should("be.visible")
    })

    it('Deve conter o container que contem o texto Concluidas', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._content_header_x3dtl_129 > :nth-child(2)').should("be.visible")
    })

    it('Deve conter um texto como placeholder no input do nome da tarefa', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('input._input_x3dtl_21').invoke('attr', 'placeholder').should('eq', 'Adicione uma nova tarefa')
    })

    it('Deve conter um campo que onde será mostrado a quantidade de Tarefas Criadas', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get(':nth-child(1) > ._span_value_x3dtl_191').should("be.visible")
    })

    it('Deve conter um campo que onde será mostrado a quantidade de Tarefas Concluidas', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get(':nth-child(2) > ._span_value_x3dtl_191').should("be.visible")
    })

    it('Deve estar desabilitado o botão ao entrar na pagina', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._button_x3dtl_75').should('be.disabled')
    })

    it('Deve habilitar o botão após ter algum valor no campo de input da tarefa', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._input_x3dtl_21').type('Nova Tarefa')
      cy.get('._button_x3dtl_75').should('be.enabled')
    })

    it('Deve verificar se o valor do campo do input da tarefa reflete o valor digitado dentro do campo', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._input_x3dtl_21').type('Nova Tarefa')
      cy.get('input._input_x3dtl_21').invoke('attr', 'value').should('eq', 'Nova Tarefa')
    })

    it('Deve verificar se o botão adiciona uma nova tarefa', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._input_x3dtl_21').type('Nova Tarefa')
      cy.get('._button_x3dtl_75').click()
    })

    it('Deve verificar se o input limpa o campo voltando a exibir o placeholder sem nenhum valor digitado pelo user refletido no mesmo', () => {
      cy.visit('http://localhost:3000/to-do')
      cy.get('._input_x3dtl_21').type('Nova Tarefa')
      cy.get('._button_x3dtl_75').click()
      cy.get('input._input_x3dtl_21').invoke('attr', 'value').should('eq', 'Nova Tarefa')
    })


    it('Deve verificar se a conexão do método POST da API está funcionando e cadastrando objeto com sucesso', () => {
      cy.request('POST', 'https://ua-todo-list-api.onrender.com/tasks', { id: '30', description: 'Nova Tarefa', isDone: false }).then(
        (response) => {
          expect(response.body).to.have.property('id', '30')
        })
    })

    it('Deve verificar se o método DELETE está funcionando', () => {
      cy.request('DELETE', 'https://ua-todo-list-api.onrender.com/tasks/30')
      cy.request({
        method: 'GET',
        url: 'https://ua-todo-list-api.onrender.com/tasks/30',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.equal(404)
      })
    })
  })
})