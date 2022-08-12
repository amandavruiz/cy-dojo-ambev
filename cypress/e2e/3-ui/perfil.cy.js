/// <reference types="cypress" />

import register from '../../pages/ProfilePage'
import profileFactory from '../../factories/ProfileFactory'


describe('Profile', () => {
    it('Register profile', function() {
        var profile = profileFactory.profile()

        register.go()
        register.fillForm(profile)
        register.submit()
    });
});
