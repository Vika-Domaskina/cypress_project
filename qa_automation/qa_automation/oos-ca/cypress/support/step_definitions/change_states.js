/* global When, Then*/

when(`Find column by name : {string}`, (columnName) => { 
    cy.contains(columnName).parents('.App-column');
  });

when(`Get member by name : {string}`, (name) => { 
    cy.contains(name).parents('.CrewMember-container');
  });

when(`Change state: {string} for a {string} the one step ahead`, (columnName, memberName) => { 
  cy.contains(columnName).parents('.App-column').within((elem) =>cy.contains(memberName).parents('.CrewMember-container').find('.CrewMember-toolbar').contains('>').click());
  });

when(`Change state: {string} for a {string} the one step back`, (columnName, memberName) => { 
  cy.contains(columnName).parents('.App-column').within((elem) => cy.contains(memberName).parents('.CrewMember-container').find('.CrewMember-toolbar').contains('<').click());
  });

then(`Check that in state: {string} {string} is present`, (columnName,name) => {
  cy.contains(columnName).parents('.App-column').within((elem) => expect(cy.contains(name).parents('.CrewMember-container')).to.exist);
})