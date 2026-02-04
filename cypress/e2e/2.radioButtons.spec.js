/// <reference types="cypress" />

import {elementsPage} from '../support/page_objects/elementsPage' 
import {radioButtonSection} from '../support/page_objects/radioButtonSection'

describe('Radio Buttons in the Demo QA Site', () => {

  beforeEach(() => {

    cy.openHomePage()
    elementsPage.elementsSection()
    elementsPage.radioButtonsSection()

  })

  it('Select the Radio Buttons from Radio Button section', () => {
    
    radioButtonSection.clickYesButton()
    radioButtonSection.clickImpressiveButton()
    radioButtonSection.clickNoButton()
    
  })

})