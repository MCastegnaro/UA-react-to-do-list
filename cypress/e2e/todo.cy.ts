describe('<Todo>', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/to-do')
  })

  it('deve mostrar a imagem do logo', () => {
    cy.get('img').should('be.visible')
  })

  it('deve mostrar o header da página', () => {
    cy.get('[data-testid="header"]').should('be.visible')
  })

  it('deve conter o input para inserir a tarefa', () => {
    cy.get('.input').should('be.visible')
  })

  it('deve conter o botão para cadastrar a tarefa', () => {
    cy.get('.button').should('be.visible')
  })

  it('deve ter texto "Tarefas Criadas"', () => {
    cy.get('.tasks').should('be.visible')
  })

  it('deve ter texto "Concluídas"', () => {
    cy.get('.tasks_done').should('be.visible')
  })

})