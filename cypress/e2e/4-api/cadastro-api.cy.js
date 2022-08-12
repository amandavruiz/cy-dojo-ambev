/// <reference types="cypress" />

describe('Funcionalidade Cadastro via API', () => {

    it('Deve fazer cadastro com sucesso', () => {
        
        var email = "amanda" + Math.floor(Math.random() * 100000) + "@bug.com.br"
        var email2 = `amanda${Math.floor(Math.random() * 100000)}@bug.com.br`

        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                "name": "Amanda Rossi",
                "email": email,
                "password": "testeqa"
              }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
        })
    });

});