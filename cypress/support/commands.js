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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.clearLocalStorage()
    cy.get('input[name="email"]').clear()
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type(password)
    cy.get('button[class="btn btn-primary btn-block btn-lg margin-top-40"]').click()
    cy.get('.panel-title').should('be.visible')
})
