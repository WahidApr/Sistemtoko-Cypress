/// <reference types= "cypress"/>

describe('Authentication', () => {
    before(() => {
        cy.visit('https://sistemtoko.com/login')
        cy.url().should('include','/login')
    })

    it('Should try logging in with an invalid email', () => {
        cy.get('input[name="email"]').type('akundemo85@gmail.com')
        cy.get('input[name="password"]').type('@1Wahid')
        cy.get('button[class="btn btn-primary btn-block btn-lg margin-top-40"]').click()
        cy.get('#modal-alert').should('contain.text','Username/Password did not match') //Message error
    });

    it('Should try logging in with an invalid password', () => {
        cy.get('input[name="email"]').clear()
        cy.get('input[name="email"]').type('akundemo859@gmail.com')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('@1Wahida')
        cy.get('button[class="btn btn-primary btn-block btn-lg margin-top-40"]').click()
        cy.get('#modal-alert').should('contain.text','Username/Password did not match') //Message error
    });

    it('Should try logging in with an invalid email and password', () => {
        cy.get('input[name="email"]').clear()
        cy.get('input[name="email"]').type('akundemo85@gmail.com')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('@1Wahida')
        cy.get('button[class="btn btn-primary btn-block btn-lg margin-top-40"]').click()
        cy.get('#modal-alert').should('contain.text','Username/Password did not match') //Message error
    });

    it('Login without entering any data ', () => {
        cy.get('input[name="email"]').clear()
        cy.get('input[name="password"]').clear()
        cy.get('button[class="btn btn-primary btn-block btn-lg margin-top-40"]').click()
        cy.get('#modal-alert').should('contain.text','Please check for empty field or wrong format') //Message error
    });

    it('Utilize the Forgot Password feature, and try to log in with an email that is not registered', () => {
        cy.contains('I forgot my password').click()
        cy.url().should('include','/forgot')
        cy.get('.form-horizontal').should('be.visible')

        cy.get('input[name="email"]').type('akundemo85@gmail.com')
        cy.get('input[class="btn btn-pin"]').click()
        cy.get('strong').should('contain.text',"We can't find a user with that e-mail address. !")
    });

    it('Utilize the Forgot Password feature, and log in with the registered email', () => {
        cy.get('input[name="email"]').type('demoakun358@gmail.com')
        cy.get('input[class="btn btn-pin"]').click()
        cy.get('strong').should('contain.text','Password reminder sent! !')
    });
    
    it('Should login to the application with valid data', () => {
        cy.contains('Login').click()
        cy.get('h3').should('have.text','Login')
        cy.fixture('user').then(user => {
            const email = user.email
            const password = user.password
            cy.login(email, password)
        })
    
    });
})