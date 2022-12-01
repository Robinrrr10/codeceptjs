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
  mocha: {},
  name: 'tutorial5DifferentRunComments',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  multiple: {
    parallel: {
      chunks: 2, //This is for giving number of threads. Here it will run with 2 threads parallelly
      browsers: ["chrome", "firefox"]
    },
  }
}