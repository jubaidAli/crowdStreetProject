# crowdStreetProject
This is an automation framework for end to end testing using Cypress to automate the user account creation in the test environment for CrowdStreet.

To use the application, open the project in Visual Studio Editor or any favorite editor that can handle javascript libraries.

========= Assuming user is in the main project directory (crowdstreetProject) =========

1) Install Cypress on your machine by running 'npm install cypress' in terminal 
2) Then run the command 'npm install' to get all the dependencies in package.json  
3) All the tests are in the integration directory, to run your tests, enter 'npx cypress open' in terminal
4) A cypress dashboard should appear, click on the crowdstreetSignup.spec.js, your test should begin to run on Electron browser (chrome).
5) If you would like to run the test in headless mode, use the command 'npm run cy:run' in terminal
================================================================================================

#Keep In Mind#
When going through the tests, there will be an alert box that prompts user to click 'Ok'. After that, user will have to manually click on the Captcha box
===================================================================================================================================

It is generally a bad idea to use third party sites and receiving their SiteKey so I kept my tests all inside Cypress and forcing user to 
manually click the Captcha. In the real production environment, this would be automated using third party API keys provided by googles reCaptcha v2 API form key authentication.
