/// <reference types="cypress" />

describe("Prueba E2E", function () {

    this.beforeEach("commerce", function () {
        cy.visit('https://www.demoblaze.com/')
        cy.contains("CATEGORIES").should('have.length', 1)
        cy.setCookie('user', 'e4664419-361d-e4d9-fa26-3157cbe284f3')
        cy.wait(1000)
    });

    it("ADD CARRITO", function () {
        cy.contains("Sony vaio i5").should('have.length', 1).click().wait(1000)
        cy.contains('Add to cart').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        }).wait(1000)
        cy.get('a[href*="index.html"]').eq(0).click().wait(1000)
        cy.contains("Sony vaio i7").should('have.length', 1).click().wait(1000)
        cy.contains('Add to cart').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        }).wait(1000)
    });

    it("CARRITO", function () {
        cy.get('a[href*="cart.html"]').click().wait(1000)
        cy.get('tr').should('have.length', 3)
    });

        it("FORMULARIO", function () {
        cy.get('a[href*="cart.html"]').click().wait(1000)
        cy.contains('Place Order').click().wait(1000)
        cy.contains('Purchase').should('have.length',1)
        cy.get('input[id="name"]').type('Maribel Vargas')
        cy.get('input[id="country"]').type('Ecuador')
        cy.get('input[id="city"]').type('Quito')
        cy.get('input[id="card"]').type('12121-12121-121212')
        cy.get('input[id="month"]').type('Septiembre')
        cy.get('input[id="year"]').type('2022')
    });
        it("FIN", function () {
        cy.get('a[href*="cart.html"]').click().wait(1000)
        cy.contains('Place Order').click().wait(1000)
        cy.get('input[id="name"]').type('Maribel Vargas')
        cy.get('input[id="country"]').type('Ecuador')
        cy.get('input[id="city"]').type('Quito')
        cy.get('input[id="card"]').type('12121-12121-121212')
        cy.get('input[id="month"]').type('Septiembre')
        cy.get('input[id="year"]').type('2022')
        cy.contains('Purchase').click().wait(1000)
        cy.contains("Thank you for your purchase!").should('have.length', 1)
    });

});