/// <reference types="cypress" />

import { elementsPage } from "../support/page_objects/elementsPage"
import { selectableSection } from "../support/page_objects/selectableSection"

describe("Tabs and Grid in the Demo QA Site", () => {
    
    beforeEach(() => {
        cy.openHomePage();
        elementsPage.elementsSection()
        elementsPage.interactionsSection()
        elementsPage.selectableSection()
    })

    describe('List Tab Functionality', () => {

        beforeEach(() => {
            selectableSection.selectTab('List')
        })

        it('should select "Cras justo odio" in the List tab and validate its active state', () => {
            const itemToSelect = 'Cras justo odio'
            selectableSection.selectItem(itemToSelect, 'List')
            selectableSection.validateSelection(itemToSelect, 'List')
            })

        it('should select "Dapibus ac facilisis in" and "Cras justo odio" in the List tab and validate its active state', () => {
            const itemToSelect = ['Dapibus ac facilisis in','Cras justo odio']
            selectableSection.selectItem(itemToSelect, 'List')
            selectableSection.validateSelection(itemToSelect, 'List')
        })

        it('should select First 3 in the List tab and validate its active state', () => {
            const itemToSelect = ['Dapibus ac facilisis in','Cras justo odio','Morbi leo risus']
            selectableSection.selectItem(itemToSelect, 'List')
            selectableSection.validateSelection(itemToSelect, 'List')
        })

        it('should select multiple items, then deselect one, and validate states', () => {
            
            selectableSection.selectItem(['Cras justo odio', 'Morbi leo risus'], 'List');
            selectableSection.validateSelection(['Cras justo odio', 'Morbi leo risus'], 'List');

            selectableSection.selectItem('Cras justo odio', 'List');
            selectableSection.validateSelection(['Morbi leo risus'], 'List'); 
        })

    })

    describe('Grid Tab Functionality', () => {

    
        beforeEach(() => {
            selectableSection.selectTab('Grid')
        })

        it('should select "One" in the Grid tab and validate its active state', () => {
            const itemToSelect = 'One'
            selectableSection.selectItem(itemToSelect, 'Grid')
            selectableSection.validateSelection(itemToSelect, 'Grid')
        })

        it('should select 2 in the Grid tab and validate its active state', () => {
            const itemToSelect = ['Two','Four']
            selectableSection.selectItem(itemToSelect, 'Grid')
            selectableSection.validateSelection(itemToSelect, 'Grid')
        })

        it('should select 4 in the Grid tab and then deselect 2 validate its active state', () => {
            const itemToSelect = ['One','Three','Two','Four']
            selectableSection.selectItem(['One','Three','Two','Four'], 'Grid')
            selectableSection.validateSelection(['One','Three','Two','Four'], 'Grid')

            selectableSection.selectItem(['One','Three'], 'Grid')
            selectableSection.validateSelection(['Two','Four'], 'Grid')
        })

    })
})