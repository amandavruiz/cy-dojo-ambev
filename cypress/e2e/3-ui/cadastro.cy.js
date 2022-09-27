/// <reference types="cypress" />

import register from '../../pages/RegisterPage'

const faker = require('faker-br');

//beforeEach (() => {
    //cy.visit('cadastrar') 
//});

describe('Funcionalidade: Cadastro', () => {
    it('Cadastro com sucesso', () => {
        let name = 'Amanda' + faker.name.findName()
        let email = faker.internet.email(name)
        cy.get('[data-test="register-name"]').type(name)
        cy.get('[data-test="register-email"]').type(email)
        cy.get('[data-test="register-password"]').type('testeqa')
        cy.get('[data-test="register-password2"]').type('testeqa')
        cy.get('[data-test="register-submit"]').click()
        cy.get('.large').should('contain','Dashboard')
        cy.contains('Bem-vindo').should('exist')
    });

    it('Deve validar mensagem quando cadastrar com e-mail repetido', () => {
        cy.cadastro('Amanda Rossi','amanda6@gmail.com','testeqa','testeqa')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="navbar-logout"] > .hide-sm').click()
        cy.visit('https://conexaoqa.herokuapp.com/cadastrar')
        cy.cadastro('Amanda Rossi','amanda3@gmail.com','testeqa','testeqa')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
    });


    it.only('Cadastro usando Page Objects', function() {
        let name = 'Amanda' + faker.name.findName()
        let email = faker.internet.email(name)

        register.goRegistration()
        register.registerUser(name, email, 'testeqa', 'testeqa')
        register.submit()
    });
    
});

