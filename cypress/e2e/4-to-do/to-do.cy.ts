describe('<ToDo>', () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit('http://localhost:3000')
    cy.get('img').should("be.visible");
    cy.get('img').click();
    cy.url().should("include", "/to-do");
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

  it('Se não tiver tasks, deve ter uma imagem e um texto dizendo que não tem tasks para fazer', () => {
    cy.get('._section_container_1a9zj_1 > img').should("be.visible");
    cy.get('._text_1a9zj_29').should("be.visible");
  });

  it('Deve exibir o cabeçalho abaixo do input, que mostra o numero de tanks que tem, e quantas tasks foram feitas', () => {
    cy.get('._content_header_x3dtl_129').should("be.visible");
  });

  it('Deve exibir o texto de Tarefas Criadas e seu campo de quantidade de tarefas criadas', () => {
    cy.get('._content_header_x3dtl_129 > :nth-child(1)').should("be.visible");
    cy.get('._tasks_created_x3dtl_159').should("contain.text", "Tarefas Criadas");
    cy.get(':nth-child(1) > ._span_value_x3dtl_191').should("be.visible");
  });

  it('Deve exibir o texto de Tarefas Concluídas e seu campo de quantidade de tarefas concluídas', () => {
    cy.get('._content_header_x3dtl_129 > :nth-child(2)').should("be.visible");
    cy.get('._tasks_done_x3dtl_175').should("contain.text", "Concluídas");
    cy.get(':nth-child(2) > ._span_value_x3dtl_191').should("be.visible");
  });

  it('Deve adicionar uma nova tarefa ao inserir um texto no input e clicar no botão "Criar"', () => {
    cy.get('._input_x3dtl_21').should('be.visible').clear().type("Nova tarefa");
    cy.get('._button_x3dtl_75').should('be.visible').should('not.be.disabled').click();
    cy.get('._section_container_14eu5_1').should('have.length', 1);
    cy.get('._text_14eu5_51').contains("Nova tarefa");
  });

  it('Deve conter um texto, e um icone de lixeira dentro do container da task', () => {
    cy.get('._text_14eu5_51').should("be.visible");
    cy.get('._img_14eu5_85').should("be.visible");
  });

  it('Deve aumentar o número de tarefas criadas ao adicionar uma nova tarefa', () => {
    cy.wait(2000).then(() => {
      cy.get(':nth-child(1) > ._span_value_x3dtl_191').then(() => {
        cy.get('._section_container_14eu5_1').should('have.length', 1);
        cy.get('._text_14eu5_51').contains("Nova tarefa");
        cy.get(':nth-child(1) > ._span_value_x3dtl_191').should(() => {
          expect(1);
        });
      });
    });
  });

  it('Deve adicionar uma nova tarefa ao inserir um texto no input e clicar no botão "Criar", em seguida, clicar no círculo de status e o contador de tarefas concluídas somar 1 número', () => {
    cy.get('._section_container_14eu5_1').should('have.length', 1);
    cy.get('._text_14eu5_51').contains("Nova tarefa");
    cy.get(':nth-child(2) > ._span_value_x3dtl_191').then(($span) => {
      const currentCount = parseInt($span.text().split(' ')[0]);
      const updatedCount = currentCount + 1;
      cy.wrap(updatedCount).as('updatedCount');
      cy.get('input[data-testid="circulo-status-tarefa"]').check();
    });
  });

  it('Deve adicionar uma nova tarefa ao inserir um texto no input e clicar no botão "Criar", em seguida, excluir a tarefa ao clicar no ícone de lixeira', () => {
    cy.wait(2000).then(() => {
      cy.get('._span_value_x3dtl_191').then(() => {
        cy.get('._section_container_14eu5_1').should('have.length', 1);
        cy.get('._text_14eu5_51').contains("Nova tarefa");
        cy.get('._img_14eu5_85').each(($el) => {
          cy.wrap($el).click();
        });
      });
    });
  });

})