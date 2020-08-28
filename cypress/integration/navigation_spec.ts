/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
// @ts-ignore
describe('Navigation and Routing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login(Cypress.env('auth_username'), Cypress.env("auth_password"))
      .then(() => {
        cy.contains('Log Out')
      })
  })

  it('.should() - have navigation menu and routing works', () => {
    cy.contains('Home').click().then(() => {
      cy.get('h2').contains('Home')
    })
    cy.contains('Profile').click().then(() => {
      cy.get('h2').contains('Profile')
    })
    cy.contains('Log Out')
  })

  it('.should() - not have navigation menu after logout', () => {
    cy.contains('Log Out').click().then(() => {
        cy.contains('Home').should('not.exist')
        cy.contains('Profile').should('not.exist')
        cy.contains('Log Out').should('not.exist')
        cy.get('h2').should('not.exist')
      }
    )
  })
})