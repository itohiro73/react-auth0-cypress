// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to login.
     * @example cy.login("username", "password, "appState")
     */
    login(username: string, password: string, appState?: { targetUrl: string }): Chainable<AUTWindow>
  }
}
