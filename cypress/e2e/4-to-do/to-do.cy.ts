describe('<ToDo>', () => {
  beforeEach(() => {
    cy.viewport("macbook-15"); //abre a tela com o tamanho de um macbook-15
    cy.visit('http://localhost:3000') //entrar no localhost 3000
    cy.get('img').should("be.visible"); //verificar se a imagem (capa) está visivel
    cy.get('img').click(); //clicar na imagem para entrar no to-do
    cy.url().should("include", "/to-do"); //incluir o /to-do na url
  })

  it('Deve exibir o header', () => {
    cy.get('[data-testid="header"]').should("be.visible");
  });

  it('Deve exibir o logo do sistema', () => {
    cy.get('._img_h3s54_21').should("be.visible");
  });

  it('Deve exibir um input logo abaixo do header', () => {
    cy.get('._input_x3dtl_21').should("be.visible");
  });

  it('Deve exibir um botão de criar uma nova tarefa, com o texto Criar e uma imagem', () => {
    cy.get('._button_x3dtl_75').should("be.visible");
    cy.get('._button_x3dtl_75').should("contain.text", "Criar");
    cy.get('._button_x3dtl_75 > img').should("be.visible");
  });

  it('Deve desabilitar o botão criar quando o input não tiver texto', () => {
    cy.get('._input_x3dtl_21').should("be.visible");
    cy.get('._button_x3dtl_75').should("be.visible").should("be.disabled");
  });

  it('Deve habilitar o botão criar quando o input tiver texto', () => {
    cy.get('._input_x3dtl_21').should("be.visible").type("Nova tarefa");
    cy.get('._button_x3dtl_75').should("be.visible").should("not.be.disabled");
  });

  
})