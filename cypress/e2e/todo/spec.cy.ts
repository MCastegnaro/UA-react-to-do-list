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

})