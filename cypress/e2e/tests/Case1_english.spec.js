/// <reference types="cypress" />

import BagPage from "../pom/BagPage"
import BasePage from "../pom/BasePage"
import MyAccountPage from "../pom/MyAccountPage"
import ProductPage from "../pom/ProductPage"
import SearchPage from "../pom/SearchPage"

const basePage = new BasePage()
const myAccountPage = new MyAccountPage()
const searchPage = new SearchPage()
const productPage = new ProductPage()
const bagPage = new BagPage

describe('Case1 - Frontend Automation', () => {

    beforeEach('Go to URL before each test cases', () => {
        //I go to url
        cy.visit(Cypress.env("BASE_URL"))
        //I dismiss the notifications
        //cy.DismissNotification()
        //I login the application 
        cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"))
    })

    it('Task1 : Register Account', () => {

        //I go to MyAccount page
        basePage.clickMyAccount()
        //I click Edit button fot Your Details
        myAccountPage.clickEditDetailsButton()
        //I verify the email input is not editable
        myAccountPage.verifyEmailInputNonEditable()
        //I verify the email is the same email with which I registered the application
        myAccountPage.verifyEmailAsRegistered(Cypress.env("EMAIL"))

    })

    it('Task2 : Checkout till payment screen', () => {

        const CATEGORY = 'Men'
        const PRODUCT = 'ONE WORLD CAPSULE 365 Hoodie - England'
        cy.wait(5000)
        //I navigate to Men Categories
        basePage.navigateToCategories(CATEGORY)
        //I search a product
        basePage.searchProduct(PRODUCT)
        //I select the product
        searchPage.selectProductFromList(PRODUCT)
        //I select size of product
        productPage.selectSize("S")
        //I select color of product
        productPage.selectColor("Saffron Yellow")
        //I add the product to Bag
        productPage.clickAddToBagButton()
        //I navigate to Bag page
        basePage.navigateToBag()
        //I click chekout button
        bagPage.clickCheckOutButtton()
        //I click continue button
        bagPage.clickContinueButton()
        //I verify I am on the Payment page
        bagPage.verifyPaymentPage()

    })
})