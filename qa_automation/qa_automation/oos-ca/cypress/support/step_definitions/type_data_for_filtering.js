/* global When*/

when(`Type full data: {string} , {string} for existing person`, (name, city) => { 
    cy.get('@addName').type(name);
    cy.get('@addCity').type(city);
    cy.get('@submitButton').click();
  });

when(`Type partly name: {string} for persons`, (name) => { 
    cy.get('@addName').type(name);
    cy.get('@submitButton').click();
  });

when(`Type data: {string} , {string} for person`, (name, city) => { 
    cy.get('@addName').type(name);
    cy.get('@addCity').type(city);
    cy.get('@submitButton').click();
  });

when(`Find and click to "Clear" button`, () => { 
    cy.contains('Clear').click();
  });


