describe('example to-do app', () => {

    context('Quando acessar a home do projeto', () => {
        it('Deve exibir uma tag h1 com o titulo do sistema', () => {
            cy.viewport("macbook-15")
            cy.visit('http://127.0.0.1:3000')

            cy.get('h1').should("contain.text", "To do List")
        })

        it('Deve exibir uma tag h2 com o subtitulo do sistema', () => {
            cy.viewport("macbook-15")
            cy.visit('http://127.0.0.1:3000')

            cy.get('h2').should("contain.text", "Desafio do Ignite")
        })

        it('Deve exibir uma imagem de banner do sistema', () => {
            cy.viewport("macbook-15")
            cy.visit('http://127.0.0.1:3000')

            cy.get('img').should("be.visible")
        })
    })
})