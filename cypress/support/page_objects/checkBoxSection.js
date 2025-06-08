export class CheckBoxSection {
  checkBoxResultMap = null;

  expandAllButton() {
    cy.get('[title="Expand all"]').click();
    cy.get(".rct-icon-expand-close").should("not.exist");
  }

  collapseAllButton() {
    cy.get('[title="Collapse all"]').click();
    cy.get(".rct-icon-expand-open").should("not.exist");
  }
  
  // toggleNode(label) {
  //   cy.contains(".rct-text", label)
  //     .find('button[aria-label="Toggle"]')
  //     .should("be.visible")
  //     .and("be.enabled")
  //     .click();
  // }

  toggleNode(labels) {
    const nodeLabels = Array.isArray(labels) ? labels : [labels];
    nodeLabels.forEach(label => {
      cy.contains('.rct-text', label).find('button[aria-label="Toggle"]').should('be.visible').and('be.enabled') .click();
    });
  }

  loadCheckboxResults() {
    return cy.fixture("checkBoxResults.json").then((data) => {
      this.checkboxResultMap = data;
      return data;
    });
  }

  selectAndVerifyCheckboxesDynamic(labelsToClick) {
    let combinedExpectedResults = new Set();

    labelsToClick.forEach((label) => {
      cy.contains(".rct-title", label).siblings(".rct-checkbox").click();

      if (this.checkboxResultMap && this.checkboxResultMap[label]) {
        this.checkboxResultMap[label].forEach((result) =>
          combinedExpectedResults.add(result)
        );
      } else {
        Cypress.log({
          name: "selectAndVerifyCheckboxesDynamic",
          message: `Warning: Label "${label}" not found in checkboxResultMap or map not loaded. Verification might be incomplete.`,
          consoleProps: () => ({ label, map: this.checkboxResultMap }),
        });
      }
    });

    const finalExpectedResults = Array.from(combinedExpectedResults);

    cy.get("#result .text-success").then(($selectedItems) => {
      const actualSelections = Cypress._.map($selectedItems, "innerText");

      expect(actualSelections).to.have.members(finalExpectedResults);
      Cypress.log({
        name: "verifyResults",
        message: "Checkbox results verified successfully.",
        consoleProps: () => ({
          actual: actualSelections,
          expected: finalExpectedResults,
        }),
      });
    });
  }
}

export const checkBoxSection = new CheckBoxSection();