const Chance = require('chance');
const chance = new Chance();
const fs = require('fs');

let users = [];

for(i=0; i<250; i++){
    users.push({
        id: i,
        f_name: chance.first(),
        l_name: chance.last(),
        birthday: chance.birthday()
    })
}
    
fs.writeFile('users.json', JSON.stringify(users, null, '\t'), err => { err ? console.log(err): console.log('todo gucci')});