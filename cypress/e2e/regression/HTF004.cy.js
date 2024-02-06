describe('Computer Database Tests Sorting and Filtering', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Home - Verify Titles', () => {
  
    //Header Title
    cy.get('h1.fill > .fill')
    .should('have.text', 'Computer database')

    //Verify Titles
    cy.get('#main > h1')
    .should('be.visible')
    .and('contain', 'computers found')
  });

  it('Home - Verify Search Field Exists', () => {
    cy.get('#searchbox')
    .should('be.visible')
    .and('have.attr', 'placeholder', 'Filter by computer name...')
  });

  it('Home - Verify Buttons', () => {
    //Serch submit 
    cy.get('#searchsubmit')
    .should('be.visible')
    .and('have.value', 'Filter by name')

    //add button
    cy.get('#add')
    .should('be.visible')
    .and('have.text', 'Add a new computer')
  });

  it('Home - Verify Table', () => {
    //Verify table exists and has more than zero rows
    cy.get('.computers.zebra-striped').should('exist');
    cy.get('.computers.zebra-striped tbody tr').its('length').should('be.gt', 0)
    
    //Verify Table Columns
    cy.get('.col-name > a')
    .should('have.text', 'Computer name')

    cy.get('.col-introduced > a')
    .should('have.text', 'Introduced')

    cy.get('.col-discontinued > a')
    .should('have.text', 'Discontinued')

    cy.get('.col-company > a')
    .should('have.text', 'Company')
  });
  it('Home - Verify Pagination Selector', () => {
    //previous
    cy.get('.prev > a')
    .should('be.visible')
    .and('have.text', '← Previous')

    //current
    cy.get('.current > a')
    .should('have.text', 'Displaying 1 to 10 of 574')

    //next
    cy.get('.next > a')
    .should('be.visible')
    .and('have.text', 'Next →')

  });

});








