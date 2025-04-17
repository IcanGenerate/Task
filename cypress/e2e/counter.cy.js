describe('Counter App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('increments the counter when "Increment" is clicked', () => {
      cy.contains('Increment').click();
      cy.get('#counter').should('have.text', '1');
    });
  });
  