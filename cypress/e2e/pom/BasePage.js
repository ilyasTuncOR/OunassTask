/// <reference types='cypress' />

export default class BasePage{

    changeLanguage(){
        cy.get(".SiteNavigation-languageLink").click()
    }

    clickMyAccount(){
        cy.get('.CustomerPopup > .Popup-iconLink').click()
    }

    navigateToCategories(category){
        cy.get("a[href='/"+ category.toLowerCase() +"']").click()
    }

    searchProduct(product){
        cy.get('.QuickSearch-v2-textBox').type(product).type("{enter}")
    }

    navigateToBag(){
        cy.get('.MiniCartPopup-Outside > .Popup > .Popup-iconLink > .Popup-iconText').click()
    }
}