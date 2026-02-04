/// <reference types="cypress" />

import { elementsPage } from "../../support/page_objects/elementsPage";
import { linksSection } from "../../support/page_objects/linksSection";

describe("Links in the Demo QA Site", () => {

    beforeEach(() => {
        cy.openHomePage();
        elementsPage.elementsSection();
        elementsPage.linksSection();
    })

    it("should validate Created link displays 201 status response", () => {
        
        linksSection.createdLinkIntercept()
        linksSection.validateStatusCodeLink(linksSection.createdLink,"201","Created")
        
    })

})