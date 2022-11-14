/// <reference types='cypress' />

export default class BagPage{
    clickCheckOutButtton(){
        cy.get('[data-cy="secureCheckoutButton"]',{timeout:30000}).click()
    }

    clickContinueButton(){
        cy.get('[data-cy="setShippingInfoButton"]',{timeout:30000}).click()
    }

    verifyPaymentPage(){
        cy.url().should('contain','payment')
    }
}