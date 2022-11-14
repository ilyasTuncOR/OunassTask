/// <reference types='cypress' />

export default class MyAccount{

    clickEditDetailsButton(){
        cy.get("a[href='/customer/information'][class='MyAccountPage-link']").click()
    }

    verifyEmailInputNonEditable(){
        cy.get(".Profile-email",{ timeout: 30000 }).should('have.attr','disabled')
    }

    verifyEmailAsRegistered(email){
        cy.get(".Profile-email",{ timeout: 30000 }).then(($el)=>{
            const value = $el.prop('value')
            expect(value).to.include(email)
        })
    }
}