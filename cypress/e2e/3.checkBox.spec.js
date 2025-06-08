/// <reference types="cypress" />

import {elementsPage} from '../support/page_objects/elementsPage' 
import {checkBoxSection} from '../support/page_objects/checkBoxSection'

describe('CheckBox in the Demo QA Site', () => {

  before(() => {
    checkBoxSection.loadCheckboxResults()
  })

  beforeEach(() => {

    cy.openHomePage()
    elementsPage.elementsSection()
    elementsPage.checkBoxSection()

  })

  it('Expand and Collapse the Check Box section', () => {

    checkBoxSection.expandAllButton()
    checkBoxSection.collapseAllButton()
   
  })

  it('should select the Home checkbox and verify all child elements are reflected in the result section', () => {

    checkBoxSection.selectAndVerifyCheckboxesDynamic(['Home']);

  });

  it('should select a specific child checkbox (Desktop) and verify its reflection in the result section', () => {
    
    checkBoxSection.toggleNode('Home');
    checkBoxSection.selectAndVerifyCheckboxesDynamic(['Desktop']);

  });

  it('should select a deeply nested checkbox Private and verify its reflection in the result section', () => {

    checkBoxSection.toggleNode(['Home','Documents','Office']);
    checkBoxSection.selectAndVerifyCheckboxesDynamic(['Private']);

  });

  it('should select Notes and Excel File.doc individually and verify their combined results', () => {

    checkBoxSection.toggleNode(['Home','Desktop','Downloads']);
    checkBoxSection.selectAndVerifyCheckboxesDynamic(['Notes', 'Excel File.doc']);

  });
 
  it('should select Desktop and then Public and verify combined results', () => {
    
    checkBoxSection.toggleNode(['Home','Documents','Office']);
    checkBoxSection.selectAndVerifyCheckboxesDynamic(['Desktop', 'Public']);

  });

})