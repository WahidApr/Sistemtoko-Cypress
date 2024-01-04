/// <reference types= "cypress"/>

describe('Tambah toko feature', () => {
   before(() => {
    cy.visit('https://sistemtoko.com/login')
    cy.url().should('include','/login')
}) 

it('"Create a new store."', () => {
    cy.fixture('user').then(user => {
        const email = user.email
        const password = user.password
        cy.login(email, password)
    })

    cy.contains('Tambah Toko').click()
    cy.url().should('include','/member/create')
    cy.get('h2').contains('Buat Toko baru').should('be.visible')
    cy.get('input[ng-model="brandCreate.name"]').type('Sistem Store.id') //syntax untuk case inspek web sistem toko
    cy.get('textarea[ng-model="brandCreate.description"]').type('Menjual pakaian muslimah dan perlengkapan ibadah khusus wanita lainnya.')
    cy.get('textarea[ng-model="brandCreate.address"]').type('Jalan Raya Bogor, Jakarta Timur, DKI Jakarta.')
    cy.get('input[ng-model="brandCreate.expedition_manual"]').click()
    cy.get('input[ng-model="brandCreate.shipping_actived"]').click()
    cy.get('select#province').select('DKI Jakarta')
    cy.get('select#city').select('Jakarta Timur')
    cy.get('#jne').click()
    cy.contains('Submit').click()
    cy.get('label.col-sm-4.control-label', { timeout: 10000 }).should('be.visible');

});

})

