/* global Given */

given('I open application', () => {
    let target_host = Cypress.env('TARGET_HOST');
    cy.visit(`http://${target_host}:5000/`); // where your web server + HTML is hosted
    cy.get('#name').as('addName');
    cy.get('#city').as('addCity');
    cy.get('button[type="submit"]').as('submitButton');
    cy.get('.CrewMember-container').as('members');
});