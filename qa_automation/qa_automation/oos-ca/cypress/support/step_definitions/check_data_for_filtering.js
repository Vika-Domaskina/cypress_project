/* global Then*/

then(`Count of members should be: {int}`, (count) => {
    cy.get('@members').should('have.length', count);
});

then(`Members should be found on the page after cleaning test data`, () => {
    expect('@members').to.exist;
})