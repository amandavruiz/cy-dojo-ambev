/// <reference types="cypress" />
const faker = require('faker-br');

beforeEach (() => {
    cy.visit('cadastrar') 
});

describe('Funcionalidade: Cadastro', () => {
    it('Cadastro com sucesso', () => {
        let name = 'Amanda' + faker.name.findName()
        let email = faker.internet.email(name)
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('testeqa')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('testeqa')
        cy.get('[data-test="register-submit"]').click()
        cy.get('.large').should('contain','Dashboard')
        cy.contains('Bem-vindo').should('exist')
    });

    it('Deve validar mensagem quando cadastrar com e-mail repetido', () => {
        cy.cadastro('Amanda Rossi','amanda3@gmail.com','testeqa','testeqa')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="navbar-logout"] > .hide-sm').click()
        cy.visit('https://conexaoqa.herokuapp.com/cadastrar')
        cy.cadastro('Amanda Rossi','amanda3@gmail.com','testeqa','testeqa')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
    });
    
});

