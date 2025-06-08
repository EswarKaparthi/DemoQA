export class ButtonsSection {
    
    clickDoubleClickButton() {
        cy.get('#doubleClickBtn').click();
        cy.get('#doubleClickMessage').should('not.exist');
    }
    
    doubleClickButton() {
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('be.visible');
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
    }

    clickRightClickButton() {
        cy.get('#rightClickBtn').click();
        cy.get('#rightClickMessage').should('not.exist');
    }

    rightClickButton() {
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('be.visible');
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
    }

    rightClickMeButton (){
        cy.get('button').eq(3).rightclick();
        cy.get('#dynamicClickMessage').should('not.exist');
    }

    clickMeButton() {
        cy.get('button').eq(3).click();
        cy.get('#dynamicClickMessage').should('be.visible');
        cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
    }

}   

export const buttonsSection = new ButtonsSection();