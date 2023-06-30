describe('<Todo>', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/to-do')
  })

  it('deve exibir a imagem do logo da plataforma', () => {
    cy.get('._img_h3s54_21').should('be.visible')
  })

  it('deve exibir o header da página', () => {
    cy.get('[data-testid="header"]').should('be.visible')
  })

  it('deve exibir o input para inserir o nome da tarefa', () => {
    cy.get('._input_x3dtl_21').should('be.visible')
  })

  it('deve exibir o botão para cadastrar a tarefa', () => {
    cy.get('._button_x3dtl_75').should('be.visible')
  })

  it('deve exibir o ícone de sinal de mais (+) no botão de cadastrar tarefa', () => {
    cy.get('._button_x3dtl_75 > img').should('be.visible')
  })

  it('deve conter o container do input', () => {
    cy.get('._input_container_x3dtl_21').should('be.visible')
  })

  it('deve conter o container de conteúdo abaixo do header', () => {
    cy.get('[data-testid="content"]').should('be.visible')
  })

  it('deve conter o texto "Tarefas Criadas"', () => {
    cy.get('._tasks_created_x3dtl_159').should('be.visible')
  })

  it('deve conter o container que guarda os textos "Tarefas Criadas" e "Concluídas"', () => {
    cy.get('._content_header_x3dtl_129').should('be.visible')
  })

  it('deve conter o texto "Concluídas"', () => {
    cy.get('._tasks_done_x3dtl_175').should('be.visible')
  })

  it('deve conter o container que guarda o texto "Concluídas"', () => {
    cy.get('._content_header_x3dtl_129 > :nth-child(2)').should('be.visible')
  })

  it('deve conter o container que guarda o texto "Tarefas Concluídas"', () => {
    cy.get('._content_header_x3dtl_129 > :nth-child(1)').should('be.visible')
  })

  it('deve conter um texto como placeholder no input de nome da tarefa', () => {
    cy.get('input._input_x3dtl_21').invoke('attr', 'placeholder').should('eq', 'Adicione uma nova tarefa')
  })

  it('deve conter um campo que mostra a quantidade de "Tarefas Criadas"', () => {
    cy.get(':nth-child(1) > ._span_value_x3dtl_191').should('be.visible')
  })

  it('deve conter um campo que mostra a quantidade de "Tarefas Concluídas"', () => {
    cy.get(':nth-child(2) > ._span_value_x3dtl_191').should('be.visible')
  })

  it('deve desabilitar o botão ao entrar na página', () => {
    cy.get('._button_x3dtl_75').should('be.disabled')
  })

  it('deve habilitar o botão após ter algum valor no campo de input da tarefa', () => {
    cy.get('._input_x3dtl_21').type('Nova Tarefa')
    cy.get('._button_x3dtl_75').should('be.enabled')
  })

  it('deve verificar se o valor do campo de input da tarefa reflete o valor digitado', () => {
    const taskName = 'Nova Tarefa'
    cy.get('._input_x3dtl_21').type(taskName)
    cy.get('input._input_x3dtl_21').invoke('attr', 'value').should('eq', taskName)
  })

  it('deve verificar se o botão adiciona uma nova tarefa', () => {
    cy.get('._input_x3dtl_21').type('Nova Tarefa')
    cy.get('._button_x3dtl_75').click()
  })

  it('deve verificar se o input é limpo após adicionar uma tarefa', () => {
    const taskName = 'Nova Tarefa'
    cy.get('._input_x3dtl_21').type(taskName)
    cy.get('._button_x3dtl_75').click()
    cy.get('input._input_x3dtl_21').invoke('attr', 'value').should('eq', '')
  })

  
})