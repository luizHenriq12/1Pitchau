describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000/contatos');
    cy.get('input[name="name"]').type('Luiz');
    cy.get('input[name="phone"]').type('123456789');
    cy.get('input[name="email"]').type('luiz@gmail.com');
    cy.get('select[name="city"]').select('Cidade 1');
    cy.get('textarea[name="message"]').type('Esta é uma mensagem de teste.');

    cy.get('button[type="submit"]').click();
  })
})