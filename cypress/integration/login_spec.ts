/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
// @ts-ignore
describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('.should() - assert that Loging button exists', () => {
    cy.contains('Log In')
  })
  it('.should() - have Log out button after login', () => {
    cy.login(Cypress.env('auth_username'), Cypress.env("auth_password"))
      .then(() => {
        cy.get('h2').should('contain', 'Home')
        cy.contains('Log Out').click()
        cy.contains('Log In')
      })
  })
})