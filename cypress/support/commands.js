// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('creatingNewAccount', () => {
  //cy.log('Clicking on "Create new account"');
  //cy.get('.tablet-menu > .join-button').click();

  cy.log('Entering email');
  cy.get('#create_account_email').click().type(Cypress.env('email'));
  cy.log('Entering firstName');
  cy.get('.-left > .ui > input').click().type(Cypress.env('firstName'));
  cy.log('Entering lastName');
  cy.get(':nth-child(4) > :nth-child(2) > .ui > input')
    .click()
    .type(Cypress.env('lastName'));
  cy.log('Enter Password');
  cy.get('.password-input-container > .input-container > .ui > input').type(
    Cypress.env('password')
  );
  cy.wait(1000);
  cy.log('Re-entering password');
  cy.get('.password-confirm-input > .ui > input').type(
    Cypress.env('confirmPassword')
  );
  cy.log('Entering phone Nummber');
  cy.get(':nth-child(9) > .ui > input').click().type('5164567689');
  cy.log('Are you an accreddited investor?');
  cy.get(':nth-child(1) > ._radio_e1a40').click();
  cy.log('Click checkbox');
  cy.get(':nth-child(1) > ._field_1fb41 > ._check_1fb41').click();

  cy.log('Accepting terms and conditions');
  cy.get(':nth-child(2) > ._field_1fb41 > ._check_1fb41').click();
});

Cypress.Commands.add('iframe', (iframeSelector, elSelector) => {
  return cy
    .get(`iframe${iframeSelector || ''}`, { timeout: 10000 })
    .should(($iframe) => {
      expect($iframe.contents().find(elSelector || 'body')).to.exist;
    })
    .then(($iframe) => {
      return cy.wrap($iframe.contents().find('body'));
    });
});
