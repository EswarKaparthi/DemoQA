export class ElementsPage {
    

    navigateSection(sectionName, urlPath) {
        cy.contains(sectionName).click()
        cy.url().should('include', urlPath)
        cy.get('.text-center').should('have.text', sectionName);
    }

    elementsSection() {
        cy.contains('Elements').click()
        cy.url().should('include', '/elements')
    }

    buttonsSection() {
        this.navigateSection('Buttons', '/buttons');
    }

    radioButtonsSection() {
        this.navigateSection('Radio Button', '/radio-button');
    }

    checkBoxSection() {
        this.navigateSection('Check Box', '/checkbox');
    }

    textBoxSection() {
        this.navigateSection('Text Box', '/text-box');
    }

    linksSection() {
        this.navigateSection('Links', '/links');
    }

    widgetsSection() {
        cy.contains('Widgets').click();
    }

    selectMenuSection() {
        this.navigateSection('Select Menu', '/select-menu');
    }

    interactionsSection() {
        cy.contains('Interactions').click();
    }

    selectableSection() {
        this.navigateSection('Selectable', '/selectable');
    }
}

/*

elementsSection(){
        cy.contains('Elements').click()
        cy.url().should('include', '/elements')
    }

    buttonsSection(){
        cy.contains('Buttons').click()
        cy.url().should('include', '/buttons')
        cy.get('.text-center').should('have.text', 'Buttons');
    }

    radioButtonsSection() {
        cy.contains('Radio Button').click()
        cy.url().should('include', '/radio-button')
        cy.get('.text-center').should('have.text', 'Radio Button');
    }
    
    checkBoxSection() {
        cy.contains('Check Box').click()
        cy.url().should('include', '/checkbox')
        cy.get('.text-center').should('have.text', 'Check Box');
    }

    textBoxSection() {
        cy.contains('Text Box').click()
        cy.url().should('include', '/text-box')
        cy.get('.text-center').should('have.text', 'Text Box');
    }

    linksSection() {
        cy.contains('Links').click()
        cy.url().should('include', '/links')
        cy.get('.text-center').should('have.text', 'Links');
    }

    widgetsSection() {
        cy.contains('Widgets').click()
    }

    selectMenuSection() {
        cy.contains('Select Menu').click()
        cy.url().should('include', '/select-menu')
        cy.get('.text-center').should('have.text', 'Select Menu');
    }

    interactionsSection() {
        cy.contains('Interactions').click()
    }

    selectableSection() {
        cy.contains('Selectable').click()
        cy.url().should('include', '/selectable')
        cy.get('.text-center').should('have.text', 'Selectable');
    }
        
*/

export const elementsPage = new ElementsPage()