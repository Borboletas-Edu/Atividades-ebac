const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  projectId: "q8ejsd",
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      //require('cypress-html-reporter/GenerateReport')(on, config)
    },
    env: {
        senhaLogin: process.env.senhaLogin,
        emailLogin: process.env.emailLogin
    },
  },
});
