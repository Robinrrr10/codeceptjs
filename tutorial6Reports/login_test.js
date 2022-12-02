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
