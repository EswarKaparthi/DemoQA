export class SelectableSection {
  
  pageTitle = '.main-header'
  listTab = '#demo-tab-list'
  gridTab = '#demo-tab-grid'
  listTabPane = '#demo-tabpane-list'
  gridTabPane = '#demo-tabpane-grid'
  listItems = '#demo-tabpane-list .list-group-item'
  gridItems = '#demo-tabpane-grid .list-group-item'
  activeClass = 'active'

  selectTab(tabName) {

    const tabIdSelector = tabName === 'List' ? this.listTab : this.gridTab;
    const tabIdSelectorPane = tabName === 'List' ? this.listTabPane : this.gridTabPane;
    cy.get('.nav.nav-tabs').should('be.visible').find(tabIdSelector).should('be.visible').click()  
    cy.get(tabIdSelectorPane).should('have.class', this.activeClass)

  }

  selectItem(itemTexts, viewType) {

    const itemsSelector = viewType === 'List' ? this.listItems : this.gridItems
    const itemsToClick = Array.isArray(itemTexts) ? itemTexts : [itemTexts]

    itemsToClick.forEach(text => {
    cy.get(itemsSelector).contains(text).should('be.visible').click()
    })

  }

  validateSelection(selectedItemTexts, viewType) {
    const itemsSelector = viewType === 'List' ? this.listItems : this.gridItems

    cy.get(itemsSelector).each(($item) => {
      const itemText = $item.text();
    if (selectedItemTexts.includes(itemText)) {
        cy.wrap($item).should('have.class', this.activeClass).and('have.css', 'background-color', 'rgb(0, 123, 255)')
      } else {
        cy.wrap($item).should('not.have.class', this.activeClass).and('not.have.css', 'background-color', 'rgb(0, 123, 255)')
      }
    }) 

  }
}   

export const selectableSection = new SelectableSection();