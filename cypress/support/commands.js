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

Cypress.Commands.add('cadastro', (nome, email, senha, confirmaSenha) => {
    cy.get('[data-test="register-name"]').type(nome)
    cy.get('[data-test="register-email"]').type(email)
    cy.get('[data-test="register-password"]').type(senha)
    cy.get('[data-test="register-password2"]').type(confirmaSenha)
})

Cypress.Commands.add('login', (name, mail) => {
    cy.get('[data-test="login-email"]').type(name)
    cy.get('[data-test="login-password"]').type(mail)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('gerarToken', (email, senha) => {
    cy.request({
        method: 'POST',
        url: 'api/auth',
        body: {
            "email": email,
            "password": senha
        }
    }).then((response) => {
        return response.body.jwt
    })

})

Cypress.Commands.add('appAction', (email, senha) => {
    cy.request({
        method: 'POST',
        url: 'api/auth',
        body: {
            "email": email,
            "password": senha
        }
    }).then((response) => {
        //return response.body.jwt
        cy.setCookie('jwt', response.body.jwt)
    })

})

