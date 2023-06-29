describe('<ToDo>', () => {
  beforeEach(() =>{
    cy.viewport("macbook-15"); //abre a tela com o tamanho de um macbook-15
    cy.visit('http://127.0.0.1:3000'); //entrar no site pelo ip
    cy.get('img').should("be.visible"); //verificar se a imagem (capa) está visivel
    cy.get('img').click(); //clicar na imagem para entrar no to-do
    cy.url().should("include", "/to-do"); //incluir o /to-do na url
  })

  
})