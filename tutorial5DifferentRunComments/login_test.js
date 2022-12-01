Feature('login');

Scenario('Test for opening web, navigation, opening link etc',  ({ I }) => {
    I.amOnPage('/');
    I.wait(3);
    I.fillField('//input[@name="username"]', "Admin");
    I.fillField('//input[@name="password"]', "admin123");
    I.click('//button[@type="submit"]');
    I.wait(3);
    I.amOnPage('/web/index.php/directory/viewDirectory');
    I.wait(3);
    I.amOnPage('https://google.com')
    I.wait(3);
    I.amOnPage('https://www.amazon.in/deals?ref_=nav_cs_gb')
    I.wait(3)
});

Scenario('Test for locators, xpath, css, id, setting the text and click', ({I}) => {
    I.amOnPage('https://www.facebook.com');
    I.wait(3);
    I.fillField('#email', "Admin");
    I.fillField('//*[@id="pass"]', "admin123");
    I.click('#pageFooter > ul > li:nth-child(2)');
});



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

