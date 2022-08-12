class ProfilePage {
    go() {
        cy.visit('login')
        cy.fixture("usuario").then((user) => {
            cy.login(user.email, user.senha)
        })
        cy.get('[data-test="login-submit"]').click()
        cy.get('.large').should('contain','Dashboard')
        cy.get('a[data-test="dashboard-createProfile"]').click()
    }

    fillForm(profile) {
        cy.get('div[data-test="profile-status"]').click()
        cy.get('li[data-test="status-2"]').click()
        cy.get('input[name="company"]').type(profile.company)
        cy.get('input[name="website"]').type(profile.website)
        cy.get('input[name="location"]').type(profile.location)
        cy.get('input[name="skills"]').type(profile.skills)
        cy.get('input[name="githubusername"]').type(profile.githubuser)
        cy.get('textarea[name="bio"]').type(profile.bio)
    }

    submit() {
        cy.get('input[data-test="profile-submit"]').click()
        cy.get('a[data-test="navbar-dashboard"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

}

export default new ProfilePage;