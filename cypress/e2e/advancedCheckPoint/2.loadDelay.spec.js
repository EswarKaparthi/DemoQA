/// <reference types="cypress" />

import { loadDelayPage } from '../../support/page_objects/loadDelayPage'

describe('Session Handling - Load Delay', () => {

    it('should visit the load delay page and verify button appears after delay', () => {

        cy.visit(Cypress.env('loadDelayUrl'))

        loadDelayPage.waitForPageToLoad()
        loadDelayPage.clickDelayedButton()
        
    })

})