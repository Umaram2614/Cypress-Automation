import {login} from "../support/login_feature.cy"
describe('Login Feature', () => {
afterEach(function onAfterEach() {
    if (this.currentTest?.state === "failed") {
      cy.setCookie('shouldSkip', 'true');
      //set cookie to skip tests for further specs
      Cypress.runner.stop();
      //this will skip tests only for current spec
    }
  });
before(() => {
    cy.beforetest();
  });
 
beforeEach( () => {
    login.visit()
  
    })
it.only('Verify unsuccessful login with Invalid inputs', () => {
 debugger;
  login.login("Invalid") 
})
it.only('Verify unsuccessful login with Blank inputs', () => {
  debugger;
  login.login("Blank") 
})
it('Verify successful login with valid inputs', () => {
  login.login("valid") 
  debugger;
  cy.task("log","Logged Successfully")
})

  })
