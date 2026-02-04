/// <reference types="cypress" />

import { elementsPage } from '../../support/page_objects/elementsPage'
import { loginSection } from '../../support/page_objects/loginSection'

describe('Session Handling Tests', () => {
    
    before(() => {
        loginSection.loadLoginData()
    })

    it('Should login and save session', () => {
        const loginCredentials = loginSection.loginDetails.validUser

        cy.session('loginSession', () => {
            cy.openHomePage()
            elementsPage.bookStoreApplication()
            elementsPage.loginSection()
            loginSection.userName(loginCredentials.username)
            loginSection.password(loginCredentials.password)
            loginSection.clickLoginButton()
            loginSection.validLogin(loginCredentials.username)
        })
        cy.openHomePage()
        elementsPage.bookStoreApplication()
        elementsPage.loginSection()
        loginSection.loggedInUser()
    })
})