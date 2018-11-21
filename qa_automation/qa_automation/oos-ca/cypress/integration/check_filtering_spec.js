describe('Check filtering on the page', function() {
    beforeEach(() =>{
        let target_host = Cypress.env('TARGET_HOST');
        cy.visit(`http://${target_host}:5000/`); // where your web server + HTML is hosted
    });

    it('Type full data for existing person and check presence in result', function() {
     cy.get('#name').type('lloyd'); 
     cy.get('#city').type('hereford');
     cy.contains('Submit').click();
     cy.get('.CrewMember-container').should('have.length', 1);
    });

    it('Type partly name for persons and check presence in result', function() {
        cy.get('#name').type('ll'); 
        cy.contains('Submit').click();
        cy.get('.CrewMember-container').should('have.length', 2);
    });

    it('Type data for not existing person and check result (negative case)', function() {
        cy.get('#name').type('Viktoria'); 
        cy.get('#city').type('Kiev');
        cy.contains('Submit').click();
        cy.get('.CrewMember-container').should('have.length', 0);
    });

    it('Check "Clear" button', function() {
        cy.get('#name').type('qwerty'); 
        cy.get('#city').type('test');
        cy.contains('Clear').click();
        expect('.CrewMember-container').to.exist;
    })

  })