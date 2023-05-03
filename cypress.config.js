///<reference types="cypress"/>

const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  env: {
    BaseUrl: "https://cmsweb-new-qa2.skylab.world/",
    Dashboard: "https://cmsweb-new-qa2.skylab.world/home"
    
  },
  

  e2e: {
    watchForFileChanges: false, //cltest will not run after immediate change in the script 
    defaultCommandTimeout: 5000, //execution will be delayed for mentioned millisecond if any failure occurs in the command 
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      on('task', {
        
        log(message) {
          console.log(message)
          return null// implement node event listeners here
        },
        specPattern: 'cypress/api-test/**.{js,jsx,ts,tsx}',
        projectId: "CMS",
        experimentalRunAllSpecs: false
        
      })
      return cloudPlugin(on, config);
      return config
      
    }
    
  }
});