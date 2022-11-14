const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/tests/*spec.js",
    reporter: 'mochawesome'
  },
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  viewportWidth: 2000,
  viewportHeight: 1400,
  pageLoadTimeout: 30000,
  env: {
    BASE_URL : 'https://www.ounass.ae/',
    EMAIL : 'ilyastunc@gmail.com',
    PASSWORD : 'ilyastunc123'
  }
})