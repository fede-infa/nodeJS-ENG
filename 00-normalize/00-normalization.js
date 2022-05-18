const fs = require('fs');
const data = fs.readFileSync('users.json', 'utf-8', (err, data) => err ? console.log(err):console.log(data));
const dataJson = JSON.parse(data);

// First way - reduce
const assignBy = (key) =>{
    return (data,item) =>{
        data[item[key]] = item;
        return data;
    };
};

// Second way - Map class & reduce
/* const mappedData = () =>{
    return (data, item) ={
        data.set(item.id, item);
        return data;
    }
}

const dataNormalized2 = data.reduce(mappedData(), new Map()); */

const normalizeData = dataJson.reduce(assignBy('id'), {}); // O(N)

console.log(normalizeData); // O(1)


/* console.log(normalizeData['1']); // O(1)
console.log(normalizeData['4']); // O(1)
console.log(normalizeData['120']); // O(1)
console.log(normalizeData['233']); // O(1) */

// Creating normalize data in a JSON file
// fs.writeFile('./normalizedData.json', JSON.stringify(normalizeData, null, '\t'), err => err?console.log(err):console.log('OK'));

