Feature('mainTests');

Scenario('Test for opening web, navigation, opening link etc',  ({ I }) => {
    I.amOnPage('/'); //This is open the web site with the default link in codecept.confg.js
    I.wait(3);
    I.fillField('//input[@name="username"]', "Admin");  //This is for setting the text to an input
    I.fillField('//input[@name="password"]', "admin123");
    I.click('//button[@type="submit"]'); //this is for clicking
    I.wait(3);
    I.amOnPage('/web/index.php/directory/viewDirectory'); // I can jump to this path in the current site
    I.wait(3);
    I.amOnPage('https://google.com') // I can directly give the other web address to jump
    I.wait(3);
    I.amOnPage('https://www.amazon.in/deals?ref_=nav_cs_gb') //can directly jump to other web and path
    I.wait(3)
});

Scenario('Test for locators, xpath, css, id, setting the text and click', ({I}) => {
    I.amOnPage('https://www.facebook.com');
    I.wait(3);
    //Below fillField function is for giving the text to an element
    I.fillField('#email', "Admin"); //id
    I.fillField('//*[@id="pass"]', "admin123"); //xpath
    I.click('#pageFooter > ul > li:nth-child(2)'); //css selector
});

Scenario('Test for assertion and getting the text', async({ I }) => { //When we use grabTextFrom function inside, we need to use async
    I.amOnPage('/');
    I.wait(3);
    I.see('Login')  //assertion - to check whether text "Login" is visibile or not
    I.fillField('//input[@name="username"]', "Admin");
    I.fillField('//input[@name="password"]', "admin123");
    I.click('//button[@type="submit"]'); //this is for clicking
    I.wait(3);
    I.see('Dashboard')  //assertion - to check whether this text "Dashboard" is visibile or not
    I.dontSee('Login')  //assertion - to check whether text "Login" is NOT visibile
    let user = await I.grabTextFrom('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p') //grabTextFrom function is to get the element
    //await should be used before grabTextFrom function to wait and get the text
    console.log("User is:" + user);
})

Scenario("Test drop down select", ({I}) => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown')
    I.wait(3);
    I.selectOption('//*[@id="dropdown"]', 'Option 2') //This is to select Option 2 in drop down select
    I.wait(3);
})

Scenario("Test smart wait. Wait for particular text to display", ({I}) => {
    I.amOnPage('https://the-internet.herokuapp.com/dynamic_loading/1');
    I.click('//*[@id="start"]/button');
    I.waitForText('Hello World!', 20)  //this is wait for particular text to display. Once it is visible it will move to next. Maximum wait time is 20 sec here.
    console.log("done...")
})