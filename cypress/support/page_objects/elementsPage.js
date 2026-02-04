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

    bookStoreApplication() {
        cy.contains('Book Store Application').click()
        cy.url().should('include', '/books')
    }

    loginSection() {
        this.navigateSection('Login', '/login');
    }

}


export const elementsPage = new ElementsPage()