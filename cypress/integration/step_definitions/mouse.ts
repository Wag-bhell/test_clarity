import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the {string} page', (endpoint: string) => {
  cy.visit(endpoint);
});

When('I click on the button by id {string}',(buttonId: string)=> {
  cy.get('#'+buttonId).click()
})

When('I click on the button by text {string}',(buttonText: string)=> {
  cy.get('button').contains(buttonText).click()
})

When('I double click on the button {string}',(buttonText: string)=> {
  cy.get('#'+buttonText).dblclick()
})

When('I move the mouse to {string}',(selector:string)=>{
  cy.get("#"+selector).trigger("mouseover")
})

Then('The message {string} should be displayed', (message: string) => {
  cy.contains(message).should('be.visible');
});