export class RadioButtonSection {

    clickYesButton(){
        cy.get('#yesRadio').check({force: true});
        cy.get('#yesRadio').check({force: true}).should('be.checked');
        cy.get('#yesRadio').check({force: true}).should('not.be.disabled');
        cy.get('.text-success').should('have.text', 'Yes')
    }

    clickImpressiveButton(){
        cy.get('#impressiveRadio').check({force: true});
        cy.get('#impressiveRadio').check({force: true}).should('be.checked');
        cy.get('#impressiveRadio').check({force: true}).should('not.be.disabled');
        cy.get('.text-success').should('have.text', 'Impressive')
    }

    clickNoButton(){
        cy.get('#noRadio').check({force: true});
        cy.get('#noRadio').check({force: true}).should('be.disabled');
    }


}

export const radioButtonSection = new RadioButtonSection();