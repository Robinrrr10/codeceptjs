Feature('Other tests')

Scenario('Test for assertion and getting the text', async({ I }) => {
    I.amOnPage('/');
    I.wait(3);
    I.see('Login')
    I.fillField('//input[@name="username"]', "Admin");
    I.fillField('//input[@name="password"]', "admin123");
    I.click('//button[@type="submit"]');
    I.wait(3);
    I.see('Dashboard')
    I.dontSee('Login') 
    let user = await I.grabTextFrom('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p') //grabTextFrom function is to get the element
    console.log("User is:" + user);
})

Scenario("Test drop down select", ({I}) => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown')
    I.wait(3);
    I.selectOption('//*[@id="dropdown"]', 'Option 2')
    I.wait(3);
})

Scenario("Test smart wait. Wait for particular text to display", ({I}) => {
    I.amOnPage('https://the-internet.herokuapp.com/dynamic_loading/1');
    I.click('//*[@id="start"]/button');
    I.waitForText('Hello World!', 20)
    console.log("done...")
})



/*

Different run option

npx codeceptjs run            - To run all the tests
npx codeceptjs run my_test.js  - To run tests in one file
npx codeceptjs run --steps     - To print the steps when running
npx codeceptjs run --grep 'Test for opening web, navigation, opening link etc' - To run specific test by giving the scenario name

npx codeceptjs run-multiple --all     - To run the test parallelly. It will run one file in one browser session and another file in another browser session
It required below config in codecept.conf.js
multiple: {
    parallel: {
      chunks: 2, 
      browsers: ["chrome", "firefox"]
    },
  }



  npx codeceptjs run-workers 3    - for Parallel execution// 3 session will be running. and test cases will be splitted to 3 sessions. It will use main browser which is under helpers.WebDriver.browser

  npx codeceptjs run --debug  - This is to print the debug logs while running

  npx codeceptjs run --verbose   - this is to pring all logs including internal logs. 
*/

