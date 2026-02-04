export class LoadDelayPage {
  
  button = 'button[type="button"]'

    waitForPageToLoad() {
        cy.get(this.button, { timeout: 10000 }).should('be.visible')
    }

    clickDelayedButton() {
        cy.get(this.button).should('exist').should('be.visible')
    }

}

export const loadDelayPage = new LoadDelayPage