const { I } = inject();
// Add in your custom step files

Given('valid credential', () => {
  // TODO: replace with your own step
  I.amOnPage('/')
  I.wait(3)
  I.fillField('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input', 'Admin')
  I.fillField('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input', 'admin123')

});

Given('to navigate PIM', () => {
  I.click('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span')
  I.wait(3)
});

When('try to login', () => {
  I.click('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button')
  I.wait(3)
})

Then('I should see "{word}"', (value) => {      //Then and And both can call this function
  I.see(value)
})

Then('I should see employee id {int} value', (empId) => {  //{int} will accept the number and pass to the empId
  I.see(empId)
})

Then(/I should able to see sentence \"([^\\"]*)\"/, (sen) => { //Here I have used regular expression to accept any sentences or word. It will be passed to sen variable
  I.see(sen)
})

/*
Then('I should able to see employee details', (table) => {
  console.log("came inside.....")
  console.log('table:' + table)
  console.log('table rows:' + table.rows)
  for(const record in table.rows){
    I.say('record is:' + record)
    if(record < 1){
      continue;
    }
    const cell = table.rows[record].cells;
    const id = cell[0].value
    const nm = cell[1].value
    const jo = cell[2].value
    I.say("values : " + id + " " + nm + " " + jo)
    I.see(id)
    I.see(nm)
    I.see(jo)
  }
})

Then('I should able to see detail "{word}"', (val) => {
  I.say(val)
  I.see(val)
})
*/