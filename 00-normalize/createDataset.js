const Chance = require('chance');
const chance = new Chance();
const fs = require('fs');

/* let users = [];

for(i=0; i<250; i++){
    users.push({
        id: i,
        f_name: chance.first(),
        l_name: chance.last(),
        birthday: chance.birthday()
    })
}

fs.writeFile('users.json', JSON.stringify(users, null, '\t'), err => { err ? console.log(err): console.log('todo gucci')}); 
*/

let blogPost = []
for(i=0; i<10; i++){
    blogPost.push({
        id: i,
        title: chance.sentence(),
        description: chance.paragrap({sentences: 1}),
        content: chance.paragrap({sentences: 2}),
        author:[
            {
                id: 1,
                author: "Rob",
                content: chance.sentence()
            },
            {
                id: 2,
                author: "Jane",
                content: chance.sentence()
            },
            {
                id: 3,
                author: "Joey",
                content: chance.sentence()

            }
        ]
    })
}

fs.writeFileSync('blogPost.json', JSON.stringify(blogPost, null, '\t', err => { err ? console.log(err):console.log('file created');}))