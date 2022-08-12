describe('Teste de API', () => {

    var dojo = {
        aula: "API",
        duracao: 3,
        professor: "Fábio"
    }

    var numero = [0, 2, 4, 6, 8, 10]

    var usuarios = [
        {
            "usuario": "amandav@gmail.com",
            "senha": "testeqa"
        },
        {
            "usuario": "amanda@ambev.com",
            "senha": "123456"
        }
    ]

    it('Teste Dojo', () => {
        expect(dojo.aula).to.equal("API")
        expect(dojo.duracao).to.equal(3)
        expect(dojo.professor).contains("Fábio")
    });

    it('Teste Log', () => {
        expect(usuarios[1].usuario).contains("ambev")
        cy.log(usuarios[1].usuario)
    });

});