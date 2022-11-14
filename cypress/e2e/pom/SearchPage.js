/// <reference types='cypress' />

export default class SearchPage{

    selectProductFromList(product){
        cy.wait(5000)
        cy.get('a .Product-name').contains(product).click({force:true})
    }


}