describe('<ToDo>', () => {
    context('Deve verificar componenets do teste do ToDo' , () => {
        it('Deve exibir o input', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._input_x3dtl_21').should("be.visible")
        })

        it('Deve conter o texto tarefas criadas', () => {
            cy.visit('http://localhost:3000/to-do')
            cy.get('._tasks_created_x3dtl_159').should("be.visible")
        })

        it('Deve exibir um ícone de clipboard', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')
            cy.get('img').should("be.visible")
        }) 

        it('Deve verificar se tem um botão', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')
            cy.get('._button_x3dtl_75').should("be.visible")
        })

        it('Deve conter o texto "Tarefas Criadas"', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')
            cy.get('p').should("contain.text", "Tarefas Criadas")
        })

        it('Deve verificar se tem a logo principal do sistema"', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')
            cy.get('img').should("be.visible")
        })

        it('Deve conter um texto para criar novas terefas caso não foi criada', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/to-do')
            cy.get('._section_container_1a9zj_1').should("be.visible")
        })
        
    })
})