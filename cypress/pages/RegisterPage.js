class RegisterPage {
    goRegistration() {
        cy.visit('cadastrar')
    }

    registerUser(nome, email, senha, confirmaSenha) {
        cy.get('[data-test="register-name"]').type(nome)
        cy.get('[data-test="register-email"]').type(email)
        cy.get('[data-test="register-password"]').type(senha)
        cy.get('[data-test="register-password2"]').type(confirmaSenha)
    }

    submit() {
        cy.get('[data-test="register-submit"]').click()
    }

}

export default new RegisterPage;