/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
// @ts-ignore
describe('Navigation and Routing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login(Cypress.env('auth_username'), Cypress.env("auth_password"))
      .then(() => {
        cy.get('button[id="avatar-menu"]')
      })
  })

  it('.should() - have navigation menu and routing works', () => {
    cy.contains('Menu1').click().then(() => {
      cy.url().should('include', '/menu1')
      cy.get('h2').contains('Menu 1')
    })
    cy.contains('Menu2').click().then(() => {
      cy.url().should('include', '/menu2')
      cy.get('h2').contains('Menu 2')
    })
    cy.contains('Menu3').click().then(() => {
      cy.url().should('include', '/menu3')
      cy.get('h2').contains('Menu 3')
    })
    cy.get('button[id="avatar-menu"]').click().then(() => {
      cy.contains('Profile')
      cy.contains('Log Out')
      cy.get('button[id="profile"]').trigger('mouseover').click().then(() => {
        cy.get('h2').contains('Profile')
      })
    })
  })

  it('.should() - not have navigation menu after logout', () => {
    cy.get('button[id="avatar-menu"]').click().then(() => {
      cy.get('button[id="logout"]').trigger('mouseover').click()
        .then(() => {
          cy.contains('Home').should('not.exist')
          cy.contains('Profile').should('not.exist')
          cy.contains('Log Out').should('not.exist')
          cy.get('h2').should('not.exist')
        }
      )
    })
  })
})