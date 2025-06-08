export class TextBoxSection {

  textBoxData = null;
  fullNameInput = '#userName'
  userEmailInput = '#userEmail'
  currentAddressInput = '#currentAddress'
  permanentAddressInput = '#permanentAddress'
  submitButton = '#submit'
  outputName = '#output #name'
  outputEmail = '#output #email'
  outputCurrentAddress = '#output #currentAddress'
  outputPermanentAddress = '#output #permanentAddress'

  loadTextBoxData() {
    return cy.fixture('textBoxData.json').then((data) => {
      this.textBoxData = data 
      return data
    });
  }

  typeFullName(name) {
    cy.get(this.fullNameInput).type(name)
  }

  typeEmail(email) {
    cy.get(this.userEmailInput).type(email)
  }

  typeCurrentAddress(address) {
    cy.get(this.currentAddressInput).type(address)
  }

  typePermanentAddress(address) {
    cy.get(this.permanentAddressInput).type(address)
  }

  clickSubmit() {
    cy.get('#submit').should('be.visible').and('be.enabled').click()
 
  }

  validateOutput(expectedData) {
    cy.get(this.outputName).should('contain.text', `Name:${expectedData.fullName}`)
    cy.get(this.outputEmail).should('contain.text', `Email:${expectedData.email}`)
    cy.get(this.outputCurrentAddress).should('contain.text', `Current Address :${expectedData.currentAddress}`)
    cy.get(this.outputPermanentAddress).should('contain.text', `Permananet Address :${expectedData.permanentAddress}`)
  }

  validateInvalidEmailError() {
    cy.get(this.userEmailInput).should('have.class', 'field-error')
    cy.get('#output').find('p').should('not.exist')
  }

  validateNoOutput() {
    cy.get('#output').find('p').should('not.exist')
  }
}

export const textBoxsection = new TextBoxSection();