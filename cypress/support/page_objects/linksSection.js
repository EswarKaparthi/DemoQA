export class LinksSection {
  
  pageTitle = '.main-header'; 
  simpleLink = '#simpleLink'; 
  dynamicLink = '#dynamicLink'; 
  createdLink = '#created'; 
  noContentLink = '#no-content'; 
  movedLink = '#moved'; 
  badRequestLink = '#bad-request'; 
  unauthorizedLink = '#unauthorized'; 
  forbiddenLink = '#forbidden'; 
  notFoundLink = '#invalid-url'; 
  linkResponse = '#linkResponse';

  isOnLinksPage() {
    cy.get(this.pageTitle).should('be.visible').and('have.text', 'Links')
  }

  validateSimpleHomeLink() {
    cy.get(this.simpleLink).should('be.visible').and('have.text', 'Home').and('have.attr', 'href', 'https://demoqa.com')
  }

  validateDynamicHomeLink() {
    cy.get(this.dynamicLink).should('be.visible').invoke('text').then((text) => {
        expect(text.trim()).to.match(/^Home\w{5}$/)
      })
    cy.get(this.dynamicLink).should('be.visible').and('have.attr', 'href', 'https://demoqa.com')
  }

  validateStatusCodeLink(linkSelector, expectedStatus, expectedStatusText) {

    cy.get(linkSelector).should('be.visible').click()
    cy.get(this.linkResponse).should('be.visible').and('contain.text', `Link has responded with staus ${expectedStatus} and status text ${expectedStatusText}`)

  }

  createdLinkIntercept() {
    cy.intercept('GET', 'https://demoqa.com/created').as('createdLink')
  }
}
export const linksSection = new LinksSection;