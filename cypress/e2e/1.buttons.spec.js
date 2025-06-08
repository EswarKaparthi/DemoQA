/// <reference types="cypress" />

import {elementsPage} from '../support/page_objects/elementsPage' 
import {buttonsSection} from '../support/page_objects/buttonsSection'

describe('Buttons in the Demo QA Site', () => {

  beforeEach(() => {

    cy.openHomePage()
    elementsPage.elementsSection()
    elementsPage.buttonsSection()
    
  })
  
  it('Double Click Button', () => {

    buttonsSection.clickDoubleClickButton()
    buttonsSection.doubleClickButton()
    buttonsSection.clickRightClickButton()
    buttonsSection.rightClickButton()
    buttonsSection.rightClickMeButton()
    buttonsSection.clickMeButton()
  
  })


})