/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    context('Dado que eu esteja na página de Login', () => {
        before (() => {
            cy.visit('login') 
        });
        
        context('Quando eu inserir usuário e senha', () => {
            cy.login('amandav@gmail.com','testeqa') 
            
            it('Então deve exibir a mensagem de boas vindas no Dashboard', () => {
                cy.get('.large').should('contain','Dashboard')
                cy.contains('Bem-vindo').should('exist')
            });
        });
    });

});