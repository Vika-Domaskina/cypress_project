describe('Check state on the page', function() {
    let getColumnByName = (name) => cy.contains(name).parents('.App-column');
    let getCrewMemberByName = (name) => cy.contains(name).parents('.CrewMember-container') ;

    beforeEach(() => {
        let target_host = Cypress.env('TARGET_HOST');
        cy.visit(`http://${target_host}:5000/`);
    });

    it('Change state for person from "Applied" to "Interviewing"', function() {
        getColumnByName('Applied').within(($elem) => getCrewMemberByName('emma').find('.CrewMember-up').click());
        getColumnByName('Interviewing').within(($elem) => expect(cy.contains('emma').parents('.CrewMember-container')).to.exist);
    });

    it('Change state for person from "Interviewing" to "Hired"', function() {
        getColumnByName('Applied').within(($elem) => getCrewMemberByName('emma').find('.CrewMember-up').click());
        getColumnByName('Interviewing').within(($elem) => getCrewMemberByName('emma').find('.CrewMember-up').click());
        getColumnByName('Hired').within((elem) => expect(getCrewMemberByName('emma')).to.exist);
        
    });

    it('Change state back from "Hired" to "Interviewing"', function() {
        getColumnByName('Applied').within(($elem) => getCrewMemberByName('emma').find('.CrewMember-up').click());
        getColumnByName('Interviewing').within(($elem) => getCrewMemberByName('emma').find('.CrewMember-up').click());
        getColumnByName('Hired').within((elem) => getCrewMemberByName('emma').find('.CrewMember-toolbar').contains('<').click());
        getColumnByName('Interviewing').within((elem) => expect(getCrewMemberByName('emma')).to.exist);
    });

    it('Change state back from "Interviewing" to "Applied"', function() {
        getColumnByName('Applied').within(($elem) => getCrewMemberByName('emma').find('.CrewMember-up').click());
        getColumnByName('Interviewing').within((elem) => getCrewMemberByName('emma').find('.CrewMember-toolbar').contains('<').click());
        getColumnByName('Applied').within((elem) => expect(getCrewMemberByName('emma')).to.exist);
    });

});