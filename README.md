# QA Engineer Test

- This framework is about Frontend Testing and it supports Page Object Model design pattern
- I can use Selenium and Cypress automation tools. In this task I prefer Cypress because it is so easy and fast to set up and it runs tests faster than other automation tools.
- Tools: Cypress 10.11.0 version, Mocha Framework, JavaScript, Mochawesome Reporter, Chai library for assertions
- After clonning, run "npm install" command in the terminal
- Scripts of execution:
    - For "Case1_Arabic.pec.js" : npm run runCase1.1
    - For "Case1_english.pec.js" : npm run runCase1.2
    - For all tests : npm run runAllTests
    - For execution with test runner : npx cypress open
- Framework generates mochawesome reporter


## Folder Structure

    ├── ...
    │
    |
    ├──── pom                            # Interaction methods and locators for each web page
    |    ├── BagPage.spec.js             # Methods and locators of BagPage
    |    |── BasePage.spec.js            # Common methods and locators used in whole application
    |    ├── MyAccountPage.spec.js       # Methods and locators of MyAccountPage
    |    ├── ProductPage.spec.js         # Methods and locators of ProductPage
    |    ├── SearchPage.spec.js          # Methods and locators of SearchPage
    |
    |
    |──── tests                     # Test suites
    │    ├──Case1_Arabic.spec.js    # Automated test scripts for frontend testing
    │    ├──Case1_english.spec.js   # Automated test scripts for frontend testing
    |    
    |──── support                    
    │    ├──Case1_Arabic.spec.js     # Common methods used in whole application  
    |
    ├──── mochawesome-report        # Test Report for the tests executed
    |     ├── mochawesome.html      # Right click --> Reveal in Finder for MAC (OR) Reveal in Explorer for Windows



