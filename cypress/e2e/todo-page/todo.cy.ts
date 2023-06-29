/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

const link:string = "http://localhost:3000"
const tarefa  :string = `Tarefa`

describe('<ToDo>', () => {

  beforeEach(() => {
    cy.visit(`${link}/to-do`)
  }),

  context('Quando acessar a listagem de tarefas', () => {
  
    it("Input deve estar vaziu", () => {
      cy.get('input').should('have.value', '')
    })

    it("Botão deve estar dasabilitado quando input estiver vaziu", () => {
      cy.get('input').should('have.value', '')
      cy.get('button').should('be.disabled')
    })
  }),

  context("Adicionar tarefa", () => {

    it("Botão deve estar abilitado quando input não estiver vaziu", () => {
      cy.get('input').type('Tarefa 1')
      cy.get('button').should('be.enabled')
    })

    it("Ao clicar no botão deve adicionar a tarefa na lista", () => {

      cy.get('input').type(tarefa)
      cy.get('button').click()
      cy.get('._section_container_14eu5_1 > ').then((v)=>{
        let total = Cypress.$(v).length;
        cy.get(`:nth-child(${total + 1})`).contains(tarefa)
      })
    })

    it("Ao clicar no botão deve limpar o input", () => {

      cy.get('input').type(tarefa)
      cy.get('button').click()
      cy.get('input').should('have.value', '')
    })

    it("Ao adicionar tarefa deve aparecer mensagem de sucesso", () => {

      cy.get('input').type(tarefa)
      cy.get('button').click()
      cy.contains('Tarefa adicionada com sucesso')
    })
  })

  context("Remover tarefa", () => {

    it("Ao clicar no botão de remover deve remover a tarefa da lista", () => {
      cy.get('input').type(tarefa)
      cy.get('button').click()
      const length = cy.get('._section_container_14eu5_1 > ').then((v)=>{
        let total = Cypress.$(v).length;
        cy.get(`:nth-child(${total + 1})`).find('._img_14eu5_85').click()
        cy.get(`._section_container_14eu5_1 > :nth-child(${total + 1})`)
      })
    })
    
  })

  context("Editar tarefa", () => {

    it("Marcar como concluída", () => {
      cy.get('input').type(tarefa)
      cy.get('button').click()
      const length = cy.get('._section_container_14eu5_1 > ').then((v)=>{
        let total = Cypress.$(v).length;
        cy.get(`:nth-child(${total + 1})`).find('[type="checkbox"]').click()
        cy.get(`:nth-child(${total + 1})`).find('._text_scratched_14eu5_71')
      })
    })

  })
  
})
