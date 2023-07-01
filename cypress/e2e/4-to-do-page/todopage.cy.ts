describe('<ToDo Page/>', () => {

  context('Quando acessar a pagina de listagem de tarefas', () => {
    
    beforeEach("Carregar a url da listagem de tasks", () => {
        cy.visit('http://localhost:3000/to-do/')

    })
    it('Deve exibir a logo do sistema', () => {
        cy.get('._img_h3s54_21').should("be.visible")
    })

    it('Deve conter um input para digitar as tasks', () => {
        cy.get('[data-testid="input"]').should("be.visible")
    })

    it('Deve conter um botão para criar as tasks ao lado do input', () => {
        cy.get('[data-testid="button"]').should("be.visible") 
    })
    it('Deve conter o Texto "Tarefas Criadas"', () => {
        cy.get('._tasks_created_x3dtl_159').should("be.visible")
    })
    // it('Deve conter 4 tarefas criadas', () => {
    //     cy.get(':nth-child(1) > ._span_value_x3dtl_191').should("contain.text", "4")
    // })
    it('Deve conter o Texto "Concluídas"', () => {
        cy.get('._tasks_done_x3dtl_175').should("be.visible")
    })
    it('O botão deve estar desabilitado se o campo de input estiver em branco', () => {
        cy.get('[data-testid="input"]').should("be.empty")
        cy.get('[data-testid="button"]').should("be.disabled") 
    })

    it('Ao digitar no input o botão deve ficar abilitado', () => {
        cy.get('[data-testid="input"]').type("task teste").should("have.value", "task teste")
        cy.get('[data-testid="button"]').should("be.enabled") 
    })

    // it('A task deve conter descrição, e um icone de lixeira', () => {
    //     cy.get(':nth-child(1) > ._img_14eu5_85').should("be.visible")
    //     cy.get(':nth-child(1) > ._text_14eu5_51').should("be.visible")
    //     cy.get(':nth-child(1) > ._text_14eu5_51').should("have.css", "color", "rgb(242, 242, 242)")
    // })

    it('Ao digitar no input e clicar no botão um toast de sucesso deve aparecer na página', () => {
        cy.get('[data-testid="input"]').type("task teste").should("have.value", "task teste")
        cy.get('[data-testid="button"]').click()
        cy.get('._success_tygn9_59').should("be.visible") 
    })

    it('Ao clicar no ícone de lixeira a task deve ser excluída', () => {
        cy.get('main > [data-testid="content"] > :nth-child(1)').should("be.visible")
        cy.get(':nth-child(1) > ._img_14eu5_85').click()
        // cy.get('main > [data-testid="content"] > :nth-child(1)').should("not.be.visible")

    })
    it('A cor da borda do checkbox da tarefa não concluída deve ser "rgb(30, 111, 159" ', () => {
        cy.get('#ac9a96ec-8a23-4658-bd35-ee12900ad3d2').should('have.css', 'border-color', 'rgb(30, 111, 159)')
    
    })

    it('Ao clicar no checkbox o seu estilo deve mudar', () => {
        cy.get('#ac9a96ec-8a23-4658-bd35-ee12900ad3d2').click()
        cy.get(':nth-child(3) > ._text_scratched_14eu5_71').should("have.css", "color", "rgb(128, 128, 128)" )
    
    })
  })
})