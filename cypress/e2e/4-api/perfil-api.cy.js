/// <reference types="cypress" />

describe('Funcionalidade Perfil via API', () => {

    let token

    beforeEach(() => {
        cy.gerarToken('amanda@ambev.com', '123456').then((tkn) => {
            token = tkn
        })
    });

    it('GET - Deve consultar perfil do usuário', () => {
        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "amanda@ambev.com",
                "password": "123456"
            }
        }).then((response) => {
            let token = response.body.jwt

            cy.request({
                method: 'GET',
                url: 'api/profile/me',
                headers: {
                    Cookie: token
                }
            }).then((response) => {
                expect(response.body.company).to.equal("Ambev")
                expect(response.body.skills[0]).to.equal("Cypress")
            })
        })
    });


    it('GET - Deve consultar perfil do usuário', () => {
        cy.request({
            method: 'GET',
            url: 'api/profile/me',
            headers: {
                Cookie: token
            }
        }).then((response) => {
            expect(response.body.company).to.equal("Ambev")
            expect(response.body.skills[0]).to.equal("Cypress")
        })
    })
});