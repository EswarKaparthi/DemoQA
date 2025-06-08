/// <reference types="cypress" />

import { textBoxsection } from '../support/page_objects/textBoxSection';
import {elementsPage} from '../support/page_objects/elementsPage' 

describe('CheckBox in the Demo QA Site', () => {

  before(() => {
    textBoxsection.loadTextBoxData()
  })

  beforeEach(() => {
    cy.openHomePage()
    elementsPage.elementsSection()
    elementsPage.textBoxSection()
  })

  it('should successfully submit the form with all valid details and display correct output', () => {

    const userData = textBoxsection.textBoxData.positiveUser

    textBoxsection.typeFullName(userData.fullName)
    textBoxsection.typeEmail(userData.email)
    textBoxsection.typeCurrentAddress(userData.currentAddress)
    textBoxsection.typePermanentAddress(userData.permanentAddress)
    textBoxsection.clickSubmit()
    textBoxsection.validateOutput(userData)

  })

  it('should show an error for invalid email format and no output', () => {

    const userData = textBoxsection.textBoxData.negativeUser

    textBoxsection.typeFullName(userData.fullName)
    textBoxsection.typeEmail(userData.email)
    textBoxsection.typeCurrentAddress(userData.currentAddress)
    textBoxsection.typePermanentAddress(userData.permanentAddress)
    textBoxsection.clickSubmit()
    textBoxsection.validateInvalidEmailError()

  })

  it('should not display output for an empty form submission', () => {
   
    textBoxsection.clickSubmit()
    textBoxsection.validateNoOutput()

  })

})
