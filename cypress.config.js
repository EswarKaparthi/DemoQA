const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5nz7hx',
  viewportHeight: 1000,
  viewportWidth: 1920,
  video : false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
       
    },
    baseUrl: 'https://demoqa.com/',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000
  },
});
