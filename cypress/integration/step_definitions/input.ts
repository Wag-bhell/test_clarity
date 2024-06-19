import { Then, BeforeStep, When, AfterStep } from "@badeball/cypress-cucumber-preprocessor";

function closeOverlay(): void {
    cy.document().then((doc: Document) => {
        const overlay: HTMLElement | null = doc.querySelector('#overlay');
        const isVisible: boolean = !!overlay && Cypress.dom.isVisible(overlay);
        if (isVisible) {
            cy.get("#overlay button").click()
            cy.log("Overlay Closed")
        }
    });
}

BeforeStep(() => {
    closeOverlay()
})

AfterStep(() => {
    closeOverlay()
})

When('I type {string} in the input field {string}', (text: string, id: string) => {
    cy.get('#' + id).type(text);
})

Then('The other inputs should have the value {string}', (inputValue: string) => {
    cy.get('#InputTextObjects').first().get('input[name="inputText"]').each((input: JQuery<HTMLElement>) => {
        cy.wrap(input).should('have.value', inputValue)
    })
})