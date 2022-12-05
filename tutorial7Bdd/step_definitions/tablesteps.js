const { I } = inject();

Then('I should able to see employee details', (table) => {
  console.log("came inside.....")
  console.log('table:' + table)
  console.log('table rows:' + table.rows)
  for(const record in table.rows){
    I.say('record is:' + record)//record is index
    if(record < 1){
      continue; //this if statement is given to ignore header
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