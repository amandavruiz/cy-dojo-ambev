/// <reference types="cypress" />

describe('Funcionalidade Login via API', () => {

    it('Deve fazer login com sucesso', () => {
       cy.request({
            method: 'POST',
            url: 'https://conexaoqa.herokuapp.com/api/auth',
            body: {
                "email": "amanda@ambev.com",
                "password": "123456"
            }
        }).should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
             expect(response.duration).be.lessThan(500)
        })
    });

});