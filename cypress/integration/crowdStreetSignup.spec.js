context('crowdStreet signup process', function () {
  //This will run before each test and verify route
  beforeEach(function () {
    // Give an alias to request
    cy.server().route('GET', Cypress.config().baseurl).as('dataGetFirst');
  });

  //Navigate to the test page
  it('navigates to account creation', function () {
    // Wait for response.status to be 200
    cy.visit(Cypress.config().baseurl).its('status').should('be', 200);
    //verify title is correct
    cy.title().should('contain', 'Marketplace | CrowdStreet');
    //Click the create new account button
    cy.log('clicking the create account button');
    cy.get('.tablet-menu > .join-button').click();
    //Verifying the new user account URL after user visits page
    cy.log('verifying URL for creating account');
    cy.url().should('include', '/invexp/accounts/create-account/');
  });

  it('Entering the new user details ', function () {
    // Automating the user input
    cy.log('Entering the user information');
    cy.creatingNewAccount();
  });

  it('Verify account is created', function () {
    //User will need to manually click the captacha
    cy.log('Manually Click On Captcha!');
    cy.wait(8000);
    //cy.get('<iframe>https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI&co=aHR0cHM6Ly90ZXN0LmNyb3dkc3RyZWV0LmNvbTo0NDM.&hl=en&type=image&v=OOKISvkNnVD_m_9dreR_1S0n&theme=dark&size=normal&badge=bottomright&cb=3ntc0r6mse7a').click(screenLeft,console.log('Trying to bypass Captcha'));

    cy.log('Completing info');
    cy.get(
      '#content-well > div.content.-accounts > div > div > div.css-pqgn5f.e9fk5m11.sc-bdVaJa.gqHuFm > div > div > div.account-creation-form-container.sc-bdVaJa.hgkmdP > button'
    ).click({ force: true });

    //Verifies the title of user matches the new user name
    cy.log('verifying the name in popup matches account username');
    cy.get('.znexR').should('contain', Cypress.env('firstName'));

    //cy.get('.title').contains("Congrats, " + Cypress.env('firstName')+'!');
    waitOnIt();
  });
});

//alerting user for manually entering captcha
function waitOnIt() {
  alert('Hello tester, please manually enter the captcha for me!');
}
