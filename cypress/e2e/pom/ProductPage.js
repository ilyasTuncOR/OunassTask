/// <reference types='cypress' />

export default class ProductPage{

    selectSize(size){
        cy.get('.Select-placeholder',{ timeout: 30000 }).click()
        cy.get("div[aria-label^='"+size+"']",{ timeout: 30000 }).click()
    }

    selectColor(color){
        cy.get("[title='"+color+"']").click()
    }

    clickAddToBagButton(){
        cy.get('[data-cy="addToBagButton"]').click()
    }
}