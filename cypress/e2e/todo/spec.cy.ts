describe('test To Do page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/to-do');
  })
  it('should show logo', () => {
    cy.get('._img_h3s54_21').should("be.visible");
  });
  
  it('should show new task input', () => {
    cy.get('._input_x3dtl_21').should("be.visible");
  });

  it('should show create task button', () => {
    cy.get('._button_x3dtl_75').should("be.visible");
  });
  
  it('should show how much tasks are created', () => {
    cy.get('._content_header_x3dtl_129 > :nth-child(1)').should("be.visible");
    cy.get(':nth-child(1) > ._span_value_x3dtl_191').should("be.visible");
  });

  it('should show how much tests are finished', () => {
    cy.get('._content_header_x3dtl_129 > :nth-child(1)').should("be.visible");
    cy.get(':nth-child(2) > ._span_value_x3dtl_191').should("be.visible");
  });

  it('should disable create button when input is empty', () => {
    cy.get('._input_x3dtl_21').should("be.visible");
    cy.get('._button_x3dtl_75').should("be.visible").should("be.disabled");
  });

  it('should enable create button when input has content', () => {
    cy.get('._input_x3dtl_21').should("be.visible").type("Nova tarefa");
    cy.get('._button_x3dtl_75').should("be.visible").should("not.be.disabled");
  });

  it('should show warning when tasks are empty', () => {
    cy.get('._section_container_1a9zj_1 > img').should("be.visible");
    cy.get('._text_1a9zj_29').should("be.visible");
  });

  it('should show content tasks', () => {
    cy.get('main').should("be.visible");
  });

  it('should create a new task and check toast', () => {
    const newTaskName = "New Task";

    cy.get('._input_x3dtl_21').should('be.visible').clear().type(newTaskName);

    cy.get('._button_x3dtl_75').should('be.visible').should('not.be.disabled').click();

    cy.get('._section_container_14eu5_1').should('have.length', 1);
    cy.get('._text_14eu5_51').contains(newTaskName);

  });

  it('should contain the task name', () => {
    cy.get('._text_14eu5_51').should("be.visible");
  });

  it('should contain an delete option', () => {
    cy.get('._img_14eu5_85').should("be.visible");
  });

  it('should mark all as done', () => {
    cy.get('._input_x3dtl_21').should('be.visible').clear().type("to be mark as done");

    cy.get('._button_x3dtl_75').should('be.visible').should('not.be.disabled').click();

  });

  it('should delete all', () => {
    cy.get('._input_x3dtl_21').should('be.visible').clear().type("to be deleted");

    cy.get('._button_x3dtl_75').should('be.visible').should('not.be.disabled').click();

    cy.get('img[alt="Ícone de lixeira"]').click({ multiple: true })
  });

})