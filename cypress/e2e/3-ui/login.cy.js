/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"

//const faker = require('faker-br');

beforeEach (() => {
    cy.visit('login') 
});

describe('Funcionalidade: Login', () => {
    it('Login com sucesso - Fixture', () => {
        cy.fixture("usuario").then((user) => {
            cy.login(user.email, user.senha)
        })
        cy.get('[data-test="login-submit"]').click()
        cy.get('.large').should('contain','Dashboard')
        cy.contains('Bem-vindo').should('exist')
    });

    it('Login com sucesso - Commands', () => {
        cy.login('amandav@gmail.com','testeqa')
        
        cy.get('.large').should('contain','Dashboard')
        cy.contains('Bem-vindo').should('exist')
    });

    it.only('Login com sucesso - Import', () => {
        cy.login(usuarios[1].usuario, usuarios[1].senha)
        cy.get('.large').should('contain','Dashboard')
        cy.contains('Bem-vindo').should('exist')
    });

});