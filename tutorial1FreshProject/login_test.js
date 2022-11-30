Feature('login');

Scenario('login with valid credential and verify',  ({ I }) => {
    I.amOnPage('/');
    I.wait(5);
    I.seeElement("//*[@id='app']/div[1]/div/div[1]/div/div[2]/h5");
    I.fillField('//input[@name="username"]', "Admin");
    I.fillField('//input[@name="password"]', "admin123");
    I.click('//button[@type="submit"]');
    I.wait(5);
});
