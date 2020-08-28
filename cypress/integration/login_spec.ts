/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
// @ts-ignore
describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login(Cypress.env('auth_username'), Cypress.env("auth_password"))
      .then(() => {
        cy.get('h2').should('contain', 'Home')
    })
  })

  it('.should() - show Home component after login', () => {
    cy.get('h2').should('contain', 'Home')
  })
})