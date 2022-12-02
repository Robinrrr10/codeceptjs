const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://opensource-demo.orangehrmlive.com',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {   //mocha will be added after installing // npm i mocha-junit-reporter --save-dev 
    reporterOptions: {
      mochaFile: "output/myreport.xml",  //Here we will give where to save mocha junit xml report
      reportDir: "output" //place where mocha html file should be added
    }
  },
  name: 'tutorial6Reports',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    stepByStepReport: {
      enabled: true,  //to enable step by step report which takes screenshot for each steps
      deleteSuccessful: true,  //to delete the screenshot when successfull
      screenshotsForAllureReport: true  //to add screenshot in allure report in step
    },
    allure: {
      enabled: true
    }
  }
}



/*

npx codeceptjs run --steps    // --steps to print the report steps in commandline/terminal while running the tests

npx codeceptjs run --reporter mocha-junit-reporter   // to run the test and generate mocha xml report in given output folder

npx codeceptjs run --reporter mochawesome  // to run the test and generate mocha html report in given output folder

npx codeceptjs run  //as the step by step report and allure are added in plugs, this command is sufficient to run and generate files related to report

allure serve output   //command to open allure report in browser

*/