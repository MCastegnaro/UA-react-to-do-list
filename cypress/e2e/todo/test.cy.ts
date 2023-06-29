describe('Testes da página de todo', () => {
    beforeEach(() => {
      cy.viewport(1366, 768)
      cy.visit('http://localhost:3000/to-do');
      cy.url().should('include', '/to-do')
    })

    it('Deve mostrar a logo', () => {
      cy.get(`[aria-label="logo"]`).should("be.visible");
    });
    
    it('Deve mostrar o input', () => {
      cy.get(`[aria-label="nova-task-input"]`).should("be.visible");
    });
  
    it('Deve mostrar o botão', () => {
        cy.get(`[aria-label="nova-task-botao"]`).should("be.visible");
    });

    it('O botão deve estar desabilitado caso não tenha texto', () => {
        cy.get(`[aria-label="nova-task-input"]`).clear()
        cy.get(`[aria-label="nova-task-botao"]`).should("be.disabled");
    });

    it('O botão deve estar habilitado caso tenha texto', () => {
        cy.get(`[aria-label="nova-task-input"]`).type("Fazer café da manhã")
        cy.get(`[aria-label="nova-task-botao"]`).should("be.enabled");
    });
    
    it('Deve criar uma task e colocá-la em baixo da lista', () => {
        cy.get(`[aria-label="nova-task-input"]`).type("Fazer café da manhã")
        cy.get(`[aria-label="nova-task-botao"]`).click()
        cy.wait(1000)
        cy.get(`[aria-label="todo-list"]`).find(`article`).last().find('p').should("have.text", "Fazer café da manhã")
        cy.get(`[aria-label="todo-list"]`).find(`article`).last().find('input').should("not.be.checked")
    });

    it('Deve mostrar o número certo de tasks', () => {
      cy.get(`[aria-label="todo-list"]`).find(`article`).its("length").then(n => {
        cy.get(`[aria-label="todo-list-length"]`).should("have.text", n.toString())
      })
  });

    it('Deve mostrar o no content caso delete todas as tasks', () => {
        cy.get(`[aria-label="todo-list"]`).find(`article`).each(el => {
            el.find('img').click()
            cy.wait(500)
        })
        cy.get(`[aria-label="no-content"]`).should('be.visible')
    });
  
  })