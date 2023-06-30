/// <reference types="cypress" />

describe('<To-Do />', () => {
  context('Quando acessar a rota /to-do do projeto', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/to-do')
    })

    it('Deve exibir a logo do sistema', () => {

      cy.get('._img_h3s54_21').should("be.visible")
    })

    it('Deve exibir uma input para entrada de tarefas', () => {

    cy.get('._input_x3dtl_21').should("be.visible")
    })

    it('Deve exibir um botão para criar uma tarefa com o texto "Criar" nele', () => {

        cy.get('button').should("be.visible")
        .should("contain.text", "Criar");
    })

    it('O botao Criar deve estar desabilitado caso nao tenha nenhum texto na input', () => {
        
        cy.get('._input_x3dtl_21').should('have.value', '');
        cy.get('button').should("be.disabled");
    })
    describe("E digitar algo na input ", () => {
        it('O botao Criar deve passar a estar habilitado', () => {
            
            cy.get('._input_x3dtl_21').type('Lorem');
            cy.get('button').should("be.enabled");
        })
        
        describe("E clicar no botao criar ", () => {
            it('Deve ser criada uma nova tarefa na lista e aparecer junto as outras', () => {
                
                cy.get('._input_x3dtl_21').type('Lorem');
                cy.get('button').click();
                cy.get('p').should("contain.text","Lorem");
            })
        })
    })
    describe("E clicar no checkbock ", () => {
        it('Deve ser riscado o texto dessa tarefa', () => {
            cy.get('[type="checkbox"]').uncheck({force: true})
                
            cy.get('[type="checkbox"]').click({multiple:true});
            cy.get('[type="checkbox"]').next()
            .should('have.class', '_text_scratched_14eu5_71');
        })
    })


});


});