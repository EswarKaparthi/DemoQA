export class SelectMenuSection {

  selectMenuData = null;
  selectValueDropdown = '#withOptGroup'
  selectValueOptions = '#react-select-2-option-0, #react-select-2-option-1, #react-select-2-option-2, #react-select-2-option-3, #react-select-2-option-4'
  selectValueContainer = '#react-select-2-input'

  selectOneDropdown = '#selectOne'
  selectOneOptions = '#react-select-3-option-0, #react-select-3-option-1, #react-select-3-option-2, #react-select-3-option-3, #react-select-3-option-4, #react-select-3-option-5'
  selectOneContainer = '#react-select-3-input'

  oldStyleSelectMenu = '#oldSelectMenu'

  multiSelectDropdown = '.css-1wa3eu0-placeholder'
  multiSelectInput = '#react-select-4-input'
  multiSelectOptions = '.css-1rhbuit-multiValue'

  standardMultiSelect = '#cars';

  loadSelectMenuData() {
    return cy.fixture('selectMenu.json').then((data) => {
      this.selectMenuData = data 
      return data
    });
  }
  selectValue(value) {
    cy.get(this.selectValueDropdown).click();
    cy.contains(value).click();
  }

  selectOne(value) {
    cy.get(this.selectOneDropdown).click();
    cy.contains(value).click();
  }

  selectOldStyleMenu(value) {
    cy.get(this.oldStyleSelectMenu).select(value, { force: true });
  }

  selectMultiSelectDropdown(values) {
    values.forEach(value => {
      cy.get(this.multiSelectInput).type(value + '{enter}', { force: true })
    })
  }

  selectStandardMultiSelect(values) {
    cy.get(this.standardMultiSelect).select(values, { force: true })
  }

  validateSelectedValue(selector, expectedText) {
    cy.get(selector).should('be.visible').and('have.text', expectedText)
  }

  validateOldStyleSelectedValue(expectedText) {
  cy.get(this.oldStyleSelectMenu).find('option:selected').should('have.text', expectedText)
}
  validateMultiSelectedValues(expectedTexts) {
    cy.get(this.multiSelectOptions).should('have.length', expectedTexts.length).each(($el, index) => {
        cy.wrap($el).should('have.text', expectedTexts[index])
    })
  }

  validateStandardMultiSelectedValues(expectedTexts) {
    cy.get(this.standardMultiSelect).find('option:selected').should('have.length', expectedTexts.length).each(($option, index) => {
        expect($option.text()).to.equal(expectedTexts[index])
      })
  }
}

export const selectMenuSection = new SelectMenuSection();