describe('Computer Database Tests Delete Computer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Delete a computer', () => {
    const computer = 'Xserve'
    cy.get('#searchbox')
    .type(computer)
    cy.get('#searchsubmit')
    .click()

    cy.get('tbody > tr > :nth-child(1) > a')
    .contains(computer)
    .click()

    cy.url().should('include', '/30')

    cy.get('#name')
    .should('have.value', computer)

    cy.get('.topRight > .btn')
    .should('have.value', 'Delete this computer')
    .click({ force: true })

    cy.get('.alert-message')
    .should('have.text', `Done !  Computer ${computer} has been deleted`)
  });
});








