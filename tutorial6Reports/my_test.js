Feature('Other tests')

Scenario('Test for assertion and getting the text', async({ I }) => {
    I.amOnPage('/');
    I.wait(3);
    I.see('Login')
    I.fillField('//input[@name="username"]', "Admin");
    I.fillField('//input[@name="password"]', "admin123");
    I.click('//button[@type="submit"]');
    I.wait(3);
    //I.see('Dashboard')
    I.see('Dashbinvslif')  //it is commented to check the failure in report
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
