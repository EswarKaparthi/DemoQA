/// <reference types="cypress" />

import { elementsPage } from "../support/page_objects/elementsPage";
import { linksSection } from "../support/page_objects/linksSection";

describe("Links in the Demo QA Site", () => {

    beforeEach(() => {
        cy.openHomePage();
        elementsPage.elementsSection();
        elementsPage.linksSection();
    })

    it("should validate the first Home link (simpleLink) opens in same tab", () => {
        linksSection.validateSimpleHomeLink()
    })

    it("should validate the second Home link (dynamicLink) opens in new tab", () => {
        linksSection.validateDynamicHomeLink()
    })

    it("should validate Created link displays 201 status response", () => {
        linksSection.validateStatusCodeLink(linksSection.createdLink,"201","Created")
    })

    it("should validate No Content link displays 204 status response", () => {
        linksSection.validateStatusCodeLink(linksSection.noContentLink,"204","No Content")
    })

    it("should validate Moved Permanently link displays 301 status response", () => {
        linksSection.validateStatusCodeLink(linksSection.movedLink,"301","Moved Permanently")
    })

    it("should validate Bad Request link displays 400 status response", () => {
        linksSection.validateStatusCodeLink(linksSection.badRequestLink,"400","Bad Request")
    })

    it("should validate Unauthorized link displays 401 status response", () => {
        linksSection.validateStatusCodeLink(linksSection.unauthorizedLink,"401","Unauthorized")
    })

    it("should validate Forbidden link displays 403 status response", () => {
        linksSection.validateStatusCodeLink(linksSection.forbiddenLink,"403","Forbidden")
    })

    it("should validate Not Found link displays 404 status response", () => {
        linksSection.validateStatusCodeLink(linksSection.notFoundLink,"404","Not Found")
    })
})