/// <reference types="cypress" />

import { elementsPage } from '../support/page_objects/elementsPage';
import { selectMenuSection } from '../support/page_objects/selectMenuSection'

describe('Select Menu in the Demo QA Site', () => {

  before(() => {
    selectMenuSection.loadSelectMenuData()
  })

  beforeEach(() => {
    cy.openHomePage();
    elementsPage.elementsSection()
    elementsPage.widgetsSection()
    elementsPage.selectMenuSection()
  })

  it('Select Group1, Option2 as Mrs with Old Yellow Style and Black Saab',()=>{

    const valueToSelect = selectMenuSection.selectMenuData.firstScenario

    selectMenuSection.selectValue(valueToSelect.selectValue)
    selectMenuSection.selectOne(valueToSelect.selectOne)
    selectMenuSection.selectOldStyleMenu(valueToSelect.oldStyleSelectMenu)
    selectMenuSection.selectMultiSelectDropdown(valueToSelect.multiSelectDropdown)
    selectMenuSection.selectStandardMultiSelect(valueToSelect.standardMultiSelect)

    selectMenuSection.validateSelectedValue(selectMenuSection.selectValueDropdown, valueToSelect.selectValue)
    selectMenuSection.validateSelectedValue(selectMenuSection.selectOneDropdown, valueToSelect.selectOne)
    selectMenuSection.validateOldStyleSelectedValue(valueToSelect.oldStyleSelectMenu)
    selectMenuSection.validateMultiSelectedValues(valueToSelect.multiSelectDropdown)
    selectMenuSection.validateStandardMultiSelectedValues([valueToSelect.standardMultiSelect])                        

  })

  it('Select A root Option as Other with old Blue and Audi Black, Blue and Green',()=>{

    const valueToSelect = selectMenuSection.selectMenuData.secondScenario

    selectMenuSection.selectValue(valueToSelect.selectValue)
    selectMenuSection.selectOne(valueToSelect.selectOne)
    selectMenuSection.selectOldStyleMenu(valueToSelect.oldStyleSelectMenu)
    selectMenuSection.selectMultiSelectDropdown(valueToSelect.multiSelectDropdown)
    selectMenuSection.selectStandardMultiSelect(valueToSelect.standardMultiSelect)

    selectMenuSection.validateSelectedValue(selectMenuSection.selectValueDropdown, valueToSelect.selectValue)
    selectMenuSection.validateSelectedValue(selectMenuSection.selectOneDropdown, valueToSelect.selectOne)
    selectMenuSection.validateOldStyleSelectedValue(valueToSelect.oldStyleSelectMenu)
    selectMenuSection.validateMultiSelectedValues(valueToSelect.multiSelectDropdown)
    selectMenuSection.validateStandardMultiSelectedValues([valueToSelect.standardMultiSelect])                        

  })
 
})