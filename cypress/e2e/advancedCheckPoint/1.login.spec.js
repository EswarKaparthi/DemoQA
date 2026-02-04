/// <reference types="cypress" />

import { elementsPage } from '../../support/page_objects/elementsPage';
import { loginSection } from '../../support/page_objects/loginSection';

describe('Login into Book Store Application', () => {

  before(() => {
    loginSection.loadLoginData()
  })

  beforeEach(() => {
    
    cy.openHomePage()
    elementsPage.bookStoreApplication()
    elementsPage.loginSection()
    
  })
  
  it('Login using Valid Credentials', () => {

    const loginCredentials = loginSection.loginDetails.validUser

    loginSection.userName(loginCredentials.username)
    loginSection.password(loginCredentials.password)
    loginSection.clickLoginButton()
    loginSection.validLogin(loginCredentials.username)

  })

  it('Login using Invalid Credentials', () => {

    const loginCredentials = loginSection.loginDetails.invalidUser
    
    loginSection.userName(loginCredentials.username)
    loginSection.password(loginCredentials.password)
    loginSection.clickLoginButton()
    loginSection.inValidLogin()

  })
})