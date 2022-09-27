/// <reference types="cypress" />

import mockProfile from "../../fixtures/qa.json"

describe('Funcionalidade Visualizar Perfil', () => {

    beforeEach (() => {
        cy.intercept({
            method: 'GET',
            url: 'api/profile'
        },{
            statusCode: 200,
            body: mockProfile
        })
        
        cy.visit('perfis') 
    });

    it('Validar o primeiro item da lista', function() {
        cy.get('[data-test="profile-name"]').first().should('have.text', 'Pedro Guerra')
    });

    it('Validar o último item da lista', function() {
        cy.get('[data-test="profile-name"]').last().should('have.text', 'Roberto dos Santos Filho')
    });
});
