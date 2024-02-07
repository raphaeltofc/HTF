describe('Computer Database Tests Add Computer', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('Add a New Computer - Mandatory Fields Only', () => {
    //Validate Mandatory Fields When Adding a New Computer
    cy.get('#add')
    .should('be.visible')
    .and('have.text', 'Add a new computer')
    .click()

    // check the url
    cy.url().should('include', '/new')


    cy.get(':nth-child(1) > label')
    .should('be.visible')
    .and('have.text', 'Computer name')

    //generate random name
    function generateComputerName() {
      const randomNumber = Math.floor(Math.random() * 1001);
      return `htf${randomNumber}`;
    }
    const computerName = generateComputerName();
   
    cy.get('#name')
    .type(computerName)

    cy.get('.primary')
    .should('have.value', 'Create this computer')
    .click()
    
    cy.url().should('eq', 'https://computer-database.gatling.io/computers');

    cy.get('.alert-message')
    .should('have.text',`Done !  Computer ${computerName} has been created`)

    //check if it exists in the table
    //cy.get('#searchbox')
    //.type(computerName)
    //cy.get('#searchsubmit')
    //.click()
  });

  it('Add a New Computer - All Fields Filled', () => {
    //Validate Mandatory Fields When Adding a New Computer
    cy.get('#add')
    .should('be.visible')
    .and('have.text', 'Add a new computer')
    .click()

    // check the url
    cy.url().should('include', '/new')

    cy.get(':nth-child(1) > label')
    .should('be.visible')
    .and('have.text', 'Computer name')

    //generate random name
    function generateComputerName() {
      const randomNumber = Math.floor(Math.random() * 1001);
      return `htf-${randomNumber}`;
    }
    const computerName = generateComputerName();
   
    cy.get('#name')
    .type(computerName)    

    cy.get('#introduced')
    .type('2024-01-01')

    cy.get('#discontinued')
    .type('2024-01-02')

    cy.get('#company')
    .select('Apple Inc.')

    cy.get('.primary')
    .should('have.value', 'Create this computer')
    .click()
    
    cy.url().should('eq', 'https://computer-database.gatling.io/computers');

    cy.get('.alert-message')
    .should('have.text',`Done !  Computer ${computerName} has been created`)
  });
});








