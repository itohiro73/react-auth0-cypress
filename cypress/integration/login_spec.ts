/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

describe('Login', () => {
  context('Regular resolution (1000px x 660px)', ()=> {
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

  context('iPhone5 resolution (375 x 667px)', ()=> {
    beforeEach(() => {
      cy.viewport('iphone-6')
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
})